import React, { useState, useEffect } from "react";
import Error from "./Error";

const Form = ({ patients, patient, setPatients, setPatient }) => {
  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [symptom, setSymptom] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(patient).length > 0) {
      setName(patient.name);
      setOwner(patient.owner);
      setEmail(patient.email);
      setDate(patient.date);
      setSymptom(patient.symptom);
    }
  }, [patient]);

  const generateId = () => {
    const random = Math.random().toString(36).substring(2);
    const date = Date.now().toString(36);
    return random + date;
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    if ([name, owner, email, date, symptom].includes("")) {
      setError(true);
      return;
    } else {
      setError(false);
    }
    const objPatient = {
      name,
      owner,
      email,
      date,
      symptom,
    };

    if (patient.id) {
      //? Editar el paciente

      objPatient.id = patient.id;
      const updatePatient = patients.map((patientState) =>
        patientState.id === patient.id ? objPatient : patientState
      );
      setPatients(updatePatient);
      setPatient({});
    } else {
      // nuevo registro
      objPatient.id = generateId();
      setPatients([...patients, objPatient]);
    }

    // reset form
    setName("");
    setOwner("");
    setEmail("");
    setDate("");
    setSymptom("");
  };
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Patient Monitoring</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Add patients and{" "}
        <span className="text-indigo-600 font-bold">Manage them</span>
      </p>

      <form
        onSubmit={handlerSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        {error && (
          <Error>
            <p>All fields are required</p>{" "}
          </Error>
        )}
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block text-gray-700 uppercase font-bold"
          >
            Pet's Name:
          </label>
          <input
            type="text"
            placeholder="the pet's name"
            className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="owner"
            className="block text-gray-700 uppercase font-bold"
          >
            Owner,s Name:
          </label>
          <input
            type="text"
            placeholder="owner's name"
            className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            id="owner"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email:
          </label>
          <input
            type="email"
            placeholder="@email"
            className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="date"
            className="block text-gray-700 uppercase font-bold"
          >
            Date:
          </label>
          <input
            type="date"
            className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="symptom"
            className="block text-gray-700 uppercase font-bold"
          >
            Symptom:
          </label>
          <textarea
            id="symptom"
            className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="describe the symptom"
            value={symptom}
            onChange={(e) => setSymptom(e.target.value)}
          ></textarea>
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-all"
          value={patient.id ? "Edit Patient" : "Add patient"}
        />
      </form>
    </div>
  );
};

export default Form;
