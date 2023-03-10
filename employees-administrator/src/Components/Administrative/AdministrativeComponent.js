import { useContext, useEffect, useState } from "react";
import { FireContext } from "../../Context/FireContext.js";
import { useNavigate } from "react-router-dom";
import QRCode from "react-qr-code";
import Company from "../../Assets/Company.png";
import User from "../../Assets/User.png";

import "./AdministrativeComponent.css";

const AdministrativeComponent = () => {
  const navigate = useNavigate();
  const { dbData } = useContext(FireContext);
  const [locationData, setLocationData] = useState([]);
  const [moveEmployeem, setMoveEmployee] = useState([]);

  useEffect(() => {
    if (dbData.length > 0) {
      setLocationData(dbData[1].sede);
    }
  }, [dbData]);

  useEffect(() => {}, [moveEmployeem]);

  const moveEmployee = (employeeID, locationID) => {
    let boolLocationReady = false;

    if (locationID === "-") {
      alert("Select some location to employee get into");
    } else {
      dbData[1].sede.map((dataEmployee) => {
        for (let i = 0; i < dataEmployee.employee.length; i++) {
          if (dataEmployee.employee[i].id === employeeID) {
            alert("The employee is already at the workplace location");
            boolLocationReady = true;
          }
        }
      });

      if (boolLocationReady === false) {
        dbData[0].employee[employeeID].site.lat =
          dbData[1].sede[locationID].lat;
        dbData[0].employee[employeeID].site.lng =
          dbData[1].sede[locationID].lng;

        dbData[1].sede[locationID].employee.push(
          dbData[0].employee[employeeID]
        );

        setMoveEmployee(dbData[1].sede[locationID].employee);
      }
    }
  };

  const mappingLocationCard = () => {
    return dbData[1].sede.map((location, index) => (
      <div className="locationBaseCard" key={index}>
        <div className="locationCardImage">
          <img className="imageData" alt="Company" src={Company}></img>
        </div>
        <div className="locationCardName">
          <p className="nameData">{location.name}</p>
        </div>
        <button
          className="locationCardAction"
          onClick={() => {
            navigate(`/Location/${index}`);
          }}
        >
          More
        </button>
        <div className="locationCardEmployees">
          {location.employee.length > 0 && (
            <div className="locationCardEmployeesImage">
              <img className="imageEmployeesData" alt="User" src={User}></img>
            </div>
          )}
        </div>
      </div>
    ));
  };

  const mappingEmployeeCard = () => {
    return dbData[0].employee.map((employee, index) => (
      <div className="employeesBaseCard" key={index}>
        <div className="employeesCardImage">
          <img className="imageEnployeesData" alt="Employee" src={User}></img>
        </div>
        <div className="employeeCardQR">
          <QRCode
            size={256}
            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            value={
              "ID: " +
              employee.id +
              "\n" +
              "Name: " +
              employee.name +
              "\n" +
              "Charge: " +
              employee.charge +
              "\n" +
              "Location: " +
              employee.site.lat +
              " | " +
              employee.site.lng
            }
            viewBox={`0 0 256 256`}
          />
        </div>
        <div className="employeeCardAction">
          <select
            className={`employeeCardSectionAction employee${employee.name}${employee.id}`}
            name="locations"
          >
            <option value={"-"}></option>
            {locationData.map((location, index) => (
              <option value={index} key={index}>
                {location.name}
              </option>
            ))}
          </select>
          <button
            onClick={() => {
              moveEmployee(
                index,
                document.getElementsByClassName(
                  `employee${employee.name}${employee.id}`
                )[0].value
              );
            }}
            className="employeeAction"
          >
            Get into
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div className="pageAdminBase">
      <p className="adminBaseLocationSubTitle">Locations</p>
      <div className="adminBaseLocation">
        {dbData.length > 0 && mappingLocationCard()}
      </div>
      <div className="adminBaseEmployees">
        {dbData.length > 0 && locationData.length > 0 && mappingEmployeeCard()}
      </div>
    </div>
  );
};

export default AdministrativeComponent;
