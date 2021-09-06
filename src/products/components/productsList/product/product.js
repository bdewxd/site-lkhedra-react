import css from './product.css';
function Product(props) {
    return (
        <div>
            <div className="card" id='cards'>
                <img className="card-img-top" src="..." alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-success">Add to Cartel</a>
                </div>
            </div>
        </div>
    );
}

export default Product;