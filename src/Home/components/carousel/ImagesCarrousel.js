import homepics from './images/images.js';
import style from "./carrousel.css";
import Arrows from './arrows.js';

let Carrousel = ()=>{
    let acab = "active";
    let crem = "carousel-Example-Controls";
    return (
        <div>
            <div className="carousel-images">
                <div id={crem} className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">

                        {
                            homepics.map((e,i)=>{
                                i != 0 ? acab = '' : acab = 'active';
                                return  <div className={"carousel-item " + acab } key={i}>
                                            <img className="d-block w-100 image image-fluid" src={e} alt="First slide" />
                                        </div>
                            })
                        }
                    </div>
                    <Arrows dir='prev' id={crem} />
                    <Arrows dir='next' id={crem} />
                </div>
            </div>
        </div>
        
    )
}
export default Carrousel;