import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import HeaderCard from '../../../../../Components/Cards/HeaderCard/HeaderCard';
// import HeaderCard from '../../../../Components/Cards/HeaderCard/HeaderCard';
// import Illustration from './ArtStyles/Illustration/Illustration';
// import MinimalismPointillism from './ArtStyles/MinimalismPointillism/MinimalismPointillism';
// import Minimalism from './ArtStyles/Minimalism/Minimalism';


const ArtPlatforms = () => {
    return (
        <>
            <div>
                <HeaderCard headingText={"Exceptional Artworks in various Ai Art Platforms"}></HeaderCard>
            </div>
            <div>
                <Tabs>
                    <TabList>
                    <Tab>Illustration</Tab>
                    <Tab> Minimalism X Pointillism Art</Tab>
                    <Tab> Minimalism</Tab>
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
                </Tabs>
            </div>
        </>
    );
};

export default ArtPlatforms;