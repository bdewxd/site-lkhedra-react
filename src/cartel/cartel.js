import css from './cartel.css';
import Item from './components/item/item.js';
import React from 'react';
import data from './components/item/data/data';
import Total from './components/total/total.js';
import { createContext } from 'react/cjs/react.development';
export let Conc = createContext();

class Cartel extends React.Component{
    constructor(){
        super();
        this.state = {
            items : data,
            sum : data.reduce((a, e)=>{
                return a + (e.qty * e.price);
            }, 0)
        }
        this.deleteItem = this.deleteItem.bind(this);
        this.sumAll = this.sumAll.bind(this);
        this.deleteAll = this.deleteAll.bind(this);
    }
    
    deleteItem(itemId, price, qty){
        let newState = this.state.items.filter((e, i)=>{
            return itemId != e.id;
        })
        this.setState({items: newState});
        this.setState({sum : this.state.sum - (price * qty)})
    }

    sumAll(data){
        let sum = data.reduce((a, e)=>{
            return a + (e.qty * e.price);
        }, 0);
        this.setState({sum})
    }
    
    deleteAll(){
        this.setState({items : [],
                        sum : 0});
    }

    render(){
        return (
            <div>
                <div className='container container-fluid cartel'>
                    
                    {this.state.items.length != 0 ? this.state.items.map((e, i)=>{
                        return (
                        <Conc.Provider key={e.id}  value={this.state.items}>
                            <Item 
                                id={e.id} 
                                handleSum={this.sumAll} 
                                item={e} 
                                handleDelete={this.deleteItem}
                                    />
                        </Conc.Provider>
                        )
                    }): <h2 style={{color:'bisque'}}>Your Cartel is empty</h2>}
                    <Total handleDeleteAll={this.deleteAll} sum={this.state.sum}/>
                </div>
            </div>
        );
    }
}
export default Cartel;