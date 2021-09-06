import react from "react";
import About from "../aboutUs/components/About/smallAbout.js";
import ImagesCarrousel from "./components/carousel/ImagesCarrousel.js";
import MostSoldDiv from './components/mostSold/mostSold.js';
import Footer from "../footer.js";
import css from './home.css';
class Home extends react.Component{
    constructor(){
        super();
        this.state = {}
    }
    render(){
        return(
            <div>
                <div id='container'>
                    <ImagesCarrousel />
                    {/* <SideNav /> */}
                    <MostSoldDiv />
                    <About />
                </div>
            </div>
        )
    }
}
export default Home;