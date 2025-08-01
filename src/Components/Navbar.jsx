import "../App.css";
import SparkIcon from "../assets/SvgIcon/SpatrkIcon";

const Navbar = () => {
  return (
    <nav className="flex justify-between w-full absolute top-0 left-0 right-0 px-10 py-4">
      <div className="text-5xl flex " style={{ fontFamily: "CustomFont3" }}>
       {/* <p className="flex  flex-col items-center"><SparkIcon /><div className="w-[2px] h-[100px] bg-white"></div></p>*/}
      <h1 style={{fontFamily:'CustomFont3'}} className="text-4xl  tracking-wide">
          <span className="text-white">Deepak</span>
          <span className=" ml-3">Dev</span>
        </h1>
      </div>

      <ul style={{fontFamily:'CustomFont1'}} className="flex items-center gap-5">
        <button>Home</button>
        <button>About</button>
        <button>Projects</button>
        <button>Contanct</button>
      </ul>
    </nav>
  );
};

export default Navbar;
