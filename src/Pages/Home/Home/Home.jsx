// import Explore from "../../Explore/Explore";
// import Featured from "../Featured/Featured";

// import CardGrid from "../../../Components/CardGrid/CardGrid";
import Banner from "../Banner/Banner";
import Featured from "../Featured/Featured";

const Home = () => {
  return (
    <div className="min-h-screen bg-white  border-8 border-yellow-500">
      <div className="border-8 border-blue-600 bg-white">
        <Banner></Banner>
      </div>
      <div className=" border-8 border-green-800 bg-white">
        <Featured></Featured>
      </div>
      {/* <CardGrid></CardGrid> */}
    </div>
  );
};

export default Home;
