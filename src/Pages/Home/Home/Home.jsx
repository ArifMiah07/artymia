// import Explore from "../../Explore/Explore";
// import Featured from "../Featured/Featured";

// import CardGrid from "../../../Components/CardGrid/CardGrid";
import Banner from "../Banner/Banner";
import Featured from "../Featured/Featured";

const Home = () => {
  return (
    <div className="min-h-screen bg-white ">
      <div className=" bg-white ">
        <Banner></Banner>
      </div>
      <div className=" bg-white">
        <Featured></Featured>
      </div>
      {/* <CardGrid></CardGrid> */}
    </div>
  );
};

export default Home;
