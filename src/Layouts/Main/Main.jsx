import { Outlet } from "react-router-dom";
import NavBar from "../../Pages/Shared/NavBar/NavBar";


const Main = () => {
    return (
        <div className="bg-white min-h-screen">
            <div className="bg-white shadow-md fixed w-full z-10">
                <NavBar></NavBar>
            </div>
            <div className="bg-white pt-16">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;