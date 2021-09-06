import css from './total.css';
function Total(props) {
    return (
        <div>
            <div className='sum'>
                <p className='text'>Total Price:  <br />{props.sum} DH</p>
                <div className='buttons'>
                    <button className='btn btn-success bottono' onClick={()=>alert('order Confirmed')}>Confirm Cartel</button>
                    <button className='btn btn-danger bottono' onClick={()=>alert('elmacaco !!')}>Cancel</button>
                    <button className='btn btn-primary bottono' onClick={props.handleDeleteAll}>Clear Cartel</button>
                </div>
            </div>
        </div>
    );
}

export default Total;