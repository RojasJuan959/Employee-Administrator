import { useContext } from "react";
import { FireContext } from "../Context/FireContext.js";
import SesionComponent from "../Components/Sesion/SesionComponent.js";

const Session = () => {

    const { dbData } = useContext(FireContext);

    console.log(dbData);

  return (
    <div>
      <SesionComponent />
    </div>
  );
};

export default Session;
