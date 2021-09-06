import CategoryDiv from './components/categoryDiv/categoryDiv.js';
import ProductsList from './components/productsList/productsList.js';
import Carrousel from '../Home/components/carousel/ImagesCarrousel.js';
import css from './products.css';
let numberOfProducts = 81;
let products = (props)=>{
    return (
        <div className='products'>
            <div>
                <Carrousel />
            </div>
            <div className='pageContainer container container-fluid'>
                <div className='category'>
                    il y'a {numberOfProducts} produits:
                    <CategoryDiv />
                </div>
                <ProductsList />
            </div>
        </div>
    );
}

export default products;