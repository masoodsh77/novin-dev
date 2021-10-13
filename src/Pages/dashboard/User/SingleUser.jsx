import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function SingleUser(props) {
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios
      .get(`https://reqres.in/api/users/${props.location.state.id}`)
      .then((res) => {
        setUser(res.data.data);
      });
  });
  console.log(user);
  return (
    <div className="userCard p-3">
      <div className="userCardChild w-100">
        <div className="avatar w-100 text-center">
          <img src={user.avatar} alt={user.first_name} />
        </div>
        <div className="row w-100 text-center m-5 mt-1 ">
          <div className="col-4">E-Mail : {user.email}</div>
          <div className="col-4">Last Name : {user.last_name}</div>
          <div className="col-4">First Name : {user.first_name}</div>
        </div>
        <Link to="/dashboard">
          <button className="btn btn-success">بازگشت به داشبورد</button>
        </Link>
      </div>
    </div>
  );
}

export default SingleUser;
