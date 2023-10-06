import moment from "moment/moment";
import logo from "../../../assets/logo.png"
const Header = () => {
    const date = moment().format('LLL');
    return (

        <div className="text-center mt-12">
            <img className=" mx-auto" src={logo} alt="" />
            <p>Journalism Without Fear or Favour</p>
            <p>{date}</p>
        </div>
    );
};

export default Header;