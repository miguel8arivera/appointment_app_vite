import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import List from "./components/List";

function App() {
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});

  useEffect(() => {
    const getlS = () => {
      const patientLS = JSON.parse(localStorage.getItem("patients")) ?? [];
      setPatients(patientLS);
    };
    getlS();
  }, []);

  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patients));
  }, [patients]);

  const deletePatient = (id) => {
    const patientUpdate = patients.filter((patient) => patient.id !== id);
    setPatients(patientUpdate);
  };

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form
          patients={patients}
          patient={patient}
          setPatients={setPatients}
          setPatient={setPatient}
        />
        <List
          patients={patients}
          setPatient={setPatient}
          deletePatient={deletePatient}
        />
      </div>
    </div>
  );
}

export default App;
