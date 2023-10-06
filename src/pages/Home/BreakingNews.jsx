import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNews = () => {
    return (
        <div className=" flex flex-row bg-slate-100 ">
            <div className="btn btn-secondary rounded-none bg-red-700 hover:bg-red-800 text-white w-28 h-12 m-2">Latest</div>
            <div className=" pr-4 my-auto">
                <Marquee>
                    <Link to="\">I can be a React component, multiple React components, or just some text.</Link>
                </Marquee>
            </div>
        </div>
    );
};

export default BreakingNews;