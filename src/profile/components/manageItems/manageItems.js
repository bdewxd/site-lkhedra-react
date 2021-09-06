import css from './manageItems.css';
import TableHead from './tableComponents/tableHead/tableHead.js';
import Item from './tableComponents/item/item.js';
import data from './tableComponents/item/data.js';
import React from 'react';
class ManageItems extends React.Component {
    constructor(){
        super();
        this.state = {
            items : data
        }
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    handleUpdate(id){
        //redirect to l morba3 li kayupdatih diksa3t
    }

    delete(){

    }
    
    render(){
        return (
            <div>
                <div className='addAndDeleteBtns'>
                    <button className='btn btn-success'>add</button>
                </div>
                <table id="dtBasicExample" class="table table-striped table-bordered table-sm" cellspacing="0" width="100%">
                    <thead>
                        <TableHead />
                    </thead>
                    <tbody>
                        {this.state.items.map((e, i)=>{
                            return <Item handleDelete={this.delete} handleUpdate={this.handleUpdate} item={e} key={i}/>
                        })}
                    </tbody>
                    <tfoot>
                        <TableHead />
                    </tfoot>
                </table>
            </div>
        );
    }
}

export default ManageItems;