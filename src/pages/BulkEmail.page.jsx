import { useState, useEffect } from "react";
import emailService from "../services/email.service";

const BulkEmail = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/users");
        const data = await res.json();

        if (data && data.length) {
          setUsers(data);
        }
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []);

  const handleSubmission = async () => {
    try {
      const promises = users.map((user) => emailService(user.name, user.email));
      const res = Promise.all(promises);

      console.log("res: ", res);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main>
      <h1 className="text-2xl">Bulk email</h1>
      <p className="text-sm">Send everyone an email from anywhere!</p>

      <h3 className="text-2xl my-6 underline">React Trainees</h3>

      <table className="w-full bg-slate-100">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
        {users.map((user) => {
          return (
            <tr key={user.id} className="text-center">
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          );
        })}
      </table>

      <button
        className="px-8 py-3 text-white bg-black rounded-xl mt-6"
        onClick={handleSubmission}
      >
        Send Bulk Email
      </button>
    </main>
  );
};

export default BulkEmail;
