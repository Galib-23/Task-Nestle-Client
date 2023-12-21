import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import Ad from "./HomeComponents/Ad";
import Banner from "./HomeComponents/Banner";
import ConnectEveryone from "./HomeComponents/ConnectEveryone";
import Organized from "./HomeComponents/Organized";
import Review from "./HomeComponents/Review";
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
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default Home;