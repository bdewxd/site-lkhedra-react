import css from './updateItemBox.css';
function UpdateItemBox(props) {
    return (
        <div>
            <div className='container container-fluid itemUpdaterBox'>
                <div className="child">
                    <div>
                        <img className="card-img-top img img-fluid" src="https://picsum.photos/200" alt="Card image cap" />
                    </div>
                    <div className="card-body">
                    
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlFile1">Veuillez insérer une image de votre produit:</label>
                                <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Nom</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1"  />
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleFormControlSelect1">Type de Produit</label>
                                <select className="form-control"  id="exampleFormControlSelect1">
                                <option>--Choisir--</option>
                                <option>fruits</option>
                                <option>légumes</option>
                                <option>herbes</option>
                                <option>divers</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput2">Prix</label>
                                <input type="email" className="form-control" id="exampleFormControlInput2"  />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput3">Quantité par Kg</label>
                                <input type="email" className="form-control" id="exampleFormControlInput3"  />
                            </div>
                            <div className="submit">
                                <button className="btn btn-success" type="submit">Ajouter</button>
                                <button className="btn btn-secondary" >Annuler</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpdateItemBox;