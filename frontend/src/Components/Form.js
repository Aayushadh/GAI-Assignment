import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "./Loader";
import Banner from "./Banner";
import Alert from "./Alert";

const Form = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [flag,setFlag] = useState(true)
  const handlePost = async () => {
    const obj = { email: email };
    console.log(obj);
    if(email=="")
    {
    setSuccess("");
    setError("");
    setMessage("");
    setEmail("");
    return
    }

    // resetting all the value
    setSuccess("");
    setError("");
    setMessage("");
    setEmail("");
    setLoading(true);

    try {
      const data = await axios.post("/api/list/", obj);
      let status = data.status;
      console.log(status);
      setSuccess("Thank You for Subscribing !!");
    } catch (e) {
      if (e.response.status === 400) {
        setError("Already Subscribed !");
      } else {
        setError("Something Went Wrong !");
      }
    }

    setLoading(false);
  };

  return (
    <div className="px-3 md:w-1/3">
      {loading && <Loader />}
      {success && <Alert alert="green" message={success}></Alert>}
      {error && <Alert alert="red" message={error}></Alert>}
      <form>
        <div className="flex mb-3">
          <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
            <i className="mdi mdi-email-outline text-gray-400 text-lg" />
          </div>
          <input
            type="text"
            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
            placeholder="email@example.com"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div>
          <button
            type="button"
            className="block w-full bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 transition-colors text-white rounded-lg px-3 py-2 font-semibold"
            onClick={handlePost} 
          >
            Subscribe now.
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
