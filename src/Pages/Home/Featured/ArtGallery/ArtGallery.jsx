import HeaderCard from "../../../../Components/Cards/HeaderCard/HeaderCard";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Arts from "./Arts/Arts";
import MiniHeaderCard from "../../../../Components/Cards/MiniHeaderCard/MiniHeaderCard";

const ArtGallery = () => {
    return (
        <>
            <div>
                <HeaderCard headingText={"Explore Masterpieces, Exceptional Artworks"}></HeaderCard>
            </div>
            <div>
                <Tabs>
                    <TabList>
                    <Tab>Illustration</Tab>
                    <Tab> Minimalism X Pointillism Art</Tab>
                    <Tab> Minimalism</Tab>
                    <Tab> Favorite</Tab>
                    </TabList>

                    <TabPanel>
                        <MiniHeaderCard headerText={"Illustration"} bg_clr={'bg-sunset-overdrive'} ></MiniHeaderCard>
                        <Arts></Arts>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    <Arts></Arts>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                        <Arts></Arts>
                    </TabPanel>
                    <TabPanel>
                        <h2>Your Favorite Arts</h2>
                        <Arts></Arts>
                    </TabPanel>
                </Tabs>
            </div>
        </>
    );
};

export default ArtGallery;