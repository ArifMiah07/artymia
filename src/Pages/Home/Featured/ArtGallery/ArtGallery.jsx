import HeaderCard from "../../../../Components/Cards/HeaderCard/HeaderCard";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Arts from "./Arts/Arts";

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
                    <Tab> Arts</Tab>
                    </TabList>

                    <TabPanel>
                    <h2>Any content 1</h2>
                        {/* <Illustration></Illustration> */}
                    </TabPanel>
                    <TabPanel>
                    <h2>Any content 2</h2>
                        {/* <MinimalismPointillism></MinimalismPointillism> */}
                    </TabPanel>
                    <TabPanel>
                    <h2>Any content 2</h2>
                        {/* <Minimalism></Minimalism> */}
                    </TabPanel>
                    <TabPanel>
                    <h2>Your Favorite</h2>
                        {/* <Minimalism></Minimalism> */}
                        <Arts></Arts>
                    </TabPanel>
                </Tabs>
            </div>
        </>
    );
};

export default ArtGallery;