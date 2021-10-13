import axios from "axios";
const url = "https://reqres.in/api/";

//----------------LOGIN API ----------------------
export const LoginApi = async (email, password) => {
  const data = await axios
    .post(`${url}login`, {
         email,
         password 
        })
    .then((res) => {
        return res;
    })
    .catch((err) =>{
       return err.response
      });
  return data;
};
//--------------USER LIST API----------------------
export const UserLists = async () => {
    const data = await axios
      .get(`${url}users?page=2`)
      .then((res) => {
        if (res.status === 200) {
          return res;
        }
      })
      .catch((err) => console.log(err));
    return data;
  };
  //----------SINGLE USER API ---------------------
  export const SingleUserApi = async (userId) => {
    const data = await axios
      .get(`${url}users/${userId}`)
      .then((res) => {
        if (res.status === 200) {
          return res;
        }
      })
      .catch((err) => console.log(err));
    return data;
  };