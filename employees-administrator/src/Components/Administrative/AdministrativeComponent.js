import { useContext } from "react";
import { FireContext } from "../../Context/FireContext.js";

import './AdministrativeComponent.css'

const AdministrativeComponent = () => {
    const { dbData } = useContext(FireContext);

    console.log(dbData);

    //setPokeTeam((pokeTeam) => [...pokeTeam, pokemon]);

  return (
    <div className="pageAdminBase">
      <div></div>
    </div>
  );
};

export default AdministrativeComponent;