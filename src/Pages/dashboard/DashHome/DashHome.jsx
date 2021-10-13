import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../DashHome.css";
import Cards from "./Components/Cards";

function DashHome(props) {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      props.history.push("/");
    }
    axios.get("https://reqres.in/api/users?page=2").then((res) => {
      setUsers(res.data.data);
    });
  });
  return (
    <div className="text-center dashHome w-100">
      <div className="row w-100 p-5">
        {users.map((item) => {
          return (
            <div className="col-2 cards" key={item.id} value={item.id}>
              <Link
                to={{
                   pathname: `/dashboard/user/${item.first_name} ${item.last_name}`,
                   state: { id: item.id }
                }}
              >
                <Cards
                  firstName={item.first_name}
                  lastName={item.last_name}
                  pic={item.avatar}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DashHome;
