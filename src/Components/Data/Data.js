import React, { useEffect, useState } from "react";

const Data = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://ware-house-server.vercel.app/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleAddUser = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;

    const user = { name, email };

    // post to server

    fetch("https://ware-house-server.vercel.app/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        const newUsers = [...users, data];
        setUsers(newUsers);
        console.log(setUsers);
      });
  };

  return (
    <div>
      <div>
        <h1 className="d-flex text-align-center justify-content-center mb-4">
          My own data ...{users.length}
        </h1>

        <form
          onSubmit={handleAddUser}
          className="d-flex text-align-center justify-content-center mb-4"
        >
          <input type="text" name="name" placeholder="Name" />
          <input type="text" name="email" placeholder="Email" />
          <input type="submit" value="Add items" />
        </form>
      </div>

      <ul>
        {users.map((user) => (
          <li
            className="d-flex text-align-center justify-content-center"
            key={user.id}
          >
            {" "}
            name: {user.name}, email:{user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Data;
