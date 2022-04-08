import React from "react";
import Patients from "./Patients";

const List = ({ patients, setPatient, deletePatient }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {patients && patients.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Patient List</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Manage your{" "}
            <span className="text-indigo-600 font-bold">
              Patients and appointment
            </span>
          </p>

          {patients.map((patient) => (
            <Patients
              key={patient.id}
              patient={patient}
              setPatient={setPatient}
              deletePatient={deletePatient}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">
            There are not patients
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Start adding patient{" "}
            <span className="text-indigo-600 font-bold">
              and they will appear here
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default List;
