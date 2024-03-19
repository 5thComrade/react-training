import { useState } from "react";
import emailService from "../services/email.service";

const SingleEmail = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleFormSubmission = async (e) => {
    e.preventDefault();
    try {
      const resFromService = await emailService(name, email);
      console.log("resFromService: ", resFromService);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main>
      <h1 className="text-2xl">Single email</h1>
      <p className="text-sm">Send a single email to anyone from anywhere!</p>

      <form className="mt-6 bg-gray-300 rounded p-6">
        <h3 className="text-xl mb-4">Input Form</h3>
        <div className="flex flex-col">
          <label htmlFor="name" className="text-lg mb-2">
            Name
          </label>
          <input
            type="text"
            placeholder="Walter White"
            id="name"
            className="border border-black px-5 py-2 rounded-lg"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="flex flex-col mt-6">
          <label htmlFor="email" className="text-lg mb-2">
            Email
          </label>
          <input
            type="email"
            placeholder="walterwhite@breakingbad.com"
            id="email"
            className="border border-black px-5 py-2 rounded-lg"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button
          className="px-8 py-3 text-white bg-black rounded-xl mt-6"
          onClick={handleFormSubmission}
        >
          Send Email
        </button>
      </form>
    </main>
  );
};

export default SingleEmail;
