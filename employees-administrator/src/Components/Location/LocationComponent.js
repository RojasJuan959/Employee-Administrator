import leaflet from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import QRCode from "react-qr-code";

import "leaflet/dist/leaflet.css";
import "./LocationComponent.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const LocationComponent = ({ employees, name, lat, lng }) => {
  
const position = [lat, lng];

  const DefaultIcon = leaflet.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
  });

  leaflet.Marker.prototype.options.icon = DefaultIcon;

  console.log(employees)

  const employeeLocation = () => {
    return employees.map((employee, index) => (
      <div className="employeesBaseCard" key={index}>
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
          <button onClick={() => {}} className="employeeAction">
            Sign out
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div className="pageLocationBase">
      <div className="locationBaseMap">
        <MapContainer
          center={position}
          zoom={20}
          scrollWheelZoom={true}
          style={{ width: "100%", height: "100%" }}
        >
          <TileLayer
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>Sede: {name}</Popup>
          </Marker>
        </MapContainer>
      </div>
      <div className="locationEmployeesSite">
        {employees[0].hasOwnProperty("id") &&  employeeLocation() }
      </div>
    </div>
  );
};

export default LocationComponent;
