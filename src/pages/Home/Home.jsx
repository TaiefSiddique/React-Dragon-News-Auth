import Navbar from "../shared/Navbar.jsx/Navbar";
import Header from "../shared/header/Header";
import RightNavbar from "../shared/rightNav/RightNavbar";
import LeftNavbar from './../shared/leftNav/LeftNavbar';
import BreakingNews from "./BreakingNews";


const Home = () => {
    return (
        <div className="font-poppins ">

            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <h1 >This is home</h1>
            <div className=" grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className=" border">
                    <LeftNavbar></LeftNavbar>
                </div>
                <div className=" md:col-span-2 border">
                    <h1>NEWS IS COMINGGGG!!!!!!</h1>
                </div>
                <div className=" border">
                    <RightNavbar></RightNavbar>
                </div>
            </div>

        </div>
    );
};

export default Home;