import { useContext } from "react";
import { FireContext } from "../../Context/FireContext.js";
import Company from "../../Assets/Company.png";

import "./AdministrativeComponent.css";

const AdministrativeComponent = () => {
  const { dbData } = useContext(FireContext);

  console.log(dbData);

  //setPokeTeam((pokeTeam) => [...pokeTeam, pokemon]);

  return (
    <div className="pageAdminBase">
      <div className="adminBaseLocation">
        {dbData.length > 0 && <div></div>}
        <div className="locationBaseCard">
            <div className="locationCardImage">
                <img className="imageData" src={Company}></img>
            </div>
            <div className="locationCardName">
                <p className="nameData">CC Unicentro</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AdministrativeComponent;
