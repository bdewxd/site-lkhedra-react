import { useContext, useState } from "react/cjs/react.development";
import css from './item.css';
import { Conc } from '../../cartel.js';

let k = css;
let Item = (props)=>{
    let {img, qty, name, price} = props.item;
    let [numberOfItem, setNumberOfItem] = useState(1);
    var contextData = useContext(Conc);
    function change(ope, id){
        contextData.map((e, i)=>{
            if(e.id == id){
                if(ope == 'plus'){
                    e.qty++
                }else{
                    if(e.qty > 1){
                        e.qty--;
                    }
                } 
            }
            return e;
        });
        props.handleSum(contextData);
    }
    return (
        <div>
            <div className='container container-fluid itemInCartel'>
                <div className='imageContainer'>
                    <img className='img img-fluid papen' src={img}/>
                </div>
                <div className="priceTag">
                    <h5 className="text-grey mt-1 mr-1 ml-1">{name}</h5>
                    <div>
                        <h5 className="text-grey">{price * numberOfItem} DH</h5>
                    </div>
                </div>
                <div>
                    <div className="d-flex flex-row align-items-center qty"><i className="fa fa-minus text-danger" onClick={()=>{
                        setNumberOfItem(numberOfItem > 1 ? numberOfItem - 1 : numberOfItem);
                        change('minus', props.id);
                        }}></i>
                        <h5 className="text-grey mt-1 mr-1 ml-1">{numberOfItem}</h5><i className="fa fa-plus text-success" onClick={()=>{
                        setNumberOfItem(numberOfItem + 1);
                        change('plus', props.id);
                        }}></i>
                    </div>
                    <div className="d-flex align-items-center"><i className="fa fa-trash mb-1 text-danger" onClick={()=> props.handleDelete(props.id, price, qty)}>Delete</i></div>
                        </div>
                </div>
        </div>
    )
}
export default Item;