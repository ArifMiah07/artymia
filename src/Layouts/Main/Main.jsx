import { Outlet } from "react-router-dom";
import NavBar from "../../Pages/Shared/NavBar/NavBar";



const Main = () => {
    return (
        <div className="">
            <div>
                <NavBar></NavBar>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;
