import css from './productsList.css';
import Product from './product/product.js';
var b = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
function ProductsList(props) {
    return (
        <div>
            <div className='productsContainer '>
                {b.map((e, i)=>{
                    return <Product key={i}/>;
                })}
            </div>
        </div>
    );
}

export default ProductsList;