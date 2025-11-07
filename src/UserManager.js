import { useState } from "react";
import "./usermanager.css";
function UserManager() {
  let [users, setUsers] = useState([]);
  let [nextId, setId] = useState(0);
  let [deleteUsers, setDeleteUsers] = useState([]);
  function AddUser() {
    let add = {
      id: nextId,
      name: "Naqash",
      age: 29,
      city: "Rawalpindi",
    };
    setUsers([...users, add]);
    setId(users.length + 1);
  }
  function DeleteUser(userid) {
    let userDeletedData = users.find((user) => user.id === userid);
    setDeleteUsers([...deleteUsers, userDeletedData]);
    let updateUsers = users.filter((user) => user.id !== userid);
    setUsers(updateUsers);
    setId("After Deleting" + updateUsers.length);
    console.log(updateUsers.length);
  }
  function RestoreUser(ind) {
    let restore = deleteUsers.find((user, index) => index === ind);
    setUsers([...users, restore]);
    setId(restore.length);
    console.log("After Resotoring" + users.length);
    let updateDeleteData = deleteUsers.filter((user, index) => index !== ind);
    setDeleteUsers(updateDeleteData);
  }

  return (
    <>
      <div className="container">
        <div className="usermanager-form">
          <h3>User Management System</h3>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">City</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map(({ id, name, age, city }) => (
                <tr>
                  <th scope="row" key={id}>
                    {id}
                  </th>
                  <td>{name}</td>
                  <td>{age}</td>
                  <td>{city}</td>
                  <td>
                    <button
                      className="btn btn-danger mt-2 ms-4"
                      onClick={() => DeleteUser(id)}
                    >
                      Delete Users
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <button className="btn btn-primary mt-2" onClick={AddUser}>
              Add Users
            </button>
          </table>
        </div>
      </div>
      <div className="container">
        <div className="usermanager-form">
          <h3>Delete Users</h3>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">City</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {deleteUsers.map((val, index) => (
                <tr>
                  <th scope="row" key={index}>
                    {index}
                  </th>
                  <td>{val.name}</td>
                  <td>{val.age}</td>
                  <td>{val.city}</td>
                  <td>
                    <button
                      className="btn btn-danger mt-2 ms-4"
                      onClick={() => RestoreUser(index)}
                    >
                      Restore Users
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <button className="btn btn-primary mt-2" onClick={AddUser}>
              Add Users
            </button>
          </table>
        </div>
      </div>
    </>
  );
}
export default UserManager;
