import Navbar from "../Shared/Navbar";
import Ad from "./HomeComponents/Ad";
import Banner from "./HomeComponents/Banner";
import ConnectEveryone from "./HomeComponents/ConnectEveryone";
import Organized from "./HomeComponents/Organized";
import Window from "./HomeComponents/Window";

const Home = () => {
    return (
        <div className="md:container mx-auto">
            <Navbar></Navbar>
            <Banner></Banner>
            <Organized></Organized>
            <ConnectEveryone></ConnectEveryone>
            <Window></Window>
            <Ad></Ad>
        </div>
    );
};

export default Home;