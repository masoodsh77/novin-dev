import DashHome from "../Pages/dashboard/DashHome/DashHome";
import SingleUser from "../Pages/dashboard/User/SingleUser";

const dashMain= [
    {path:"/dashboard" , exact:true , Component : DashHome},
    { path: "/dashboard/user", exact: false, Component: SingleUser },
]
export default dashMain;