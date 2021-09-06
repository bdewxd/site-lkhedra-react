import Arrow from '../carousel/arrows.js';
import Cards from './cards.js';
import css from './mostSold.css';

var homepics = ['conclave', 'spons', 'gonc', 'monke', 'salvation'];
let MostSoldItems = ()=>{
    let acab = 'active';
    let id = "carousel_Example_Controls";
    return (
    <div>
        <div className="carousel-images carousel-cards">
            <div id={id} className="carousel slide" data-ride="carousel">
                <div className="carousel-inner ">

                    {
                        homepics.map((e,i)=>{
                            i != 0 ? acab = '' : acab = 'active';
                            return  <div className={"carousel-item card-container " + acab} key={i}>
                                        <Cards />
                                    </div>
                        })
                    }
                </div>
                <Arrow dir='prev' id={id}/>
                <Arrow dir='next' id={id}/>
            </div>
        </div>
    </div>
    )
};
export default MostSoldItems;