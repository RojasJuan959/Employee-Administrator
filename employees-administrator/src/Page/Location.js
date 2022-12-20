import { useContext } from "react";
import { FireContext } from "../Context/FireContext.js"
import { useParams } from "react-router-dom";
import LocationComponent from "../Components/Location/LocationComponent.js";

const Location = () => {
    const { dbData } = useContext(FireContext);
    const { id } = useParams();
    
    return(
        <LocationComponent 
            employees={dbData[1].sede[id].employee}
            name={dbData[1].sede[id].name}
            lat={dbData[1].sede[id].lat}
            lng={dbData[1].sede[id].lng}
        />
    )

}

export default Location;