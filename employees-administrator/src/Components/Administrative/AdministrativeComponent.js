import { useContext } from "react";
import { FireContext } from "../../Context/FireContext.js";
import QRCode from "react-qr-code";
import Company from "../../Assets/Company.png";
import User from "../../Assets/User.png";

import "./AdministrativeComponent.css";

const AdministrativeComponent = () => {
  const { dbData } = useContext(FireContext);

  const mappingLocationCard = () => {
    return dbData[1].sede.map((location, index) => (
      <div className="locationBaseCard" key={index}>
        <div className="locationCardImage">
          <img className="imageData" alt="Company" src={Company}></img>
        </div>
        <div className="locationCardName">
          <p className="nameData">{location.name}</p>
        </div>
        <button className="locationCardAction">More</button>
        <div className="locationCardEmployees">
          {location.employee.length - 1 > 0 && (
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

        </div>
      </div>
    ));
  };

  console.log(dbData);

  return (
    <div className="pageAdminBase">
      <p className="adminBaseLocationSubTitle">Locations</p>
      <div className="adminBaseLocation">
        {dbData.length > 0 && mappingLocationCard()}
      </div>
      <div className="adminBaseEmployees">
        {dbData.length > 0 && mappingEmployeeCard()}
      </div>
    </div>
  );
};

export default AdministrativeComponent;
