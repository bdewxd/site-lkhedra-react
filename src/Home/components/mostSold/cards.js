let vegs = [
    {
        name : 'banana',
        price : '20dh',
        id : ''
    },
    {
        name : 'tfa7a',
        price : '60dh',
        id : ''

    },
    {
        name : 'baben',
        price : '30dh',
        id : ''
    }
]
let Cards = ()=>{
    return (
        <div>
            {
                vegs.map((e, i)=>{
                    return <div className="card" style={{width: "18rem"}} key={i}>
                        <img className="card-img-top" src="https://picsum.photos/200/?random=1" alt="Card image cap" />
                        <div className="card-body">
                            <h6>{e.name}</h6>
                            <p className="card-text">{e.price}</p>
                        </div>
                    </div>
                })
            }
        </div>
    )
}
export default Cards;