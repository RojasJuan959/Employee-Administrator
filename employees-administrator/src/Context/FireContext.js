import { useEffect, useState, createContext } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

export const FireContext = createContext();

export const FireProvider = ({ children }) => {
  const [dbData, setDbData] = useState([]);

  useEffect(() => {
    let firebaseConfig = {
      apiKey: "AIzaSyBqklEq79BTEjrH0YpYSGfkmfyLh8XMwKc",
      authDomain: "personal-work-7b8a6.firebaseapp.com",
      projectId: "personal-work-7b8a6",
      storageBucket: "personal-work-7b8a6.appspot.com",
      messagingSenderId: "1092920907380",
      appId: "1:1092920907380:web:25bbc5face4cf8e5dbe321",
      measurementId: "G-ZN76KECFMN",
    };

    let fb = initializeApp(firebaseConfig);
    let db = getFirestore(fb);

    getCities(db);

  }, []);

  async function getCities(db) {
    const citiesCol = collection(db, 'EmployeesAdministrator');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    setDbData(cityList);
  }

  return (
    <FireContext.Provider
      value={{
        dbData,
        setDbData,
      }}
    >
      {children}
    </FireContext.Provider>
  );
};

export default FireProvider;