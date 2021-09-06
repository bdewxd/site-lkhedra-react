import css from './aboutUs.css';
let companyName = 'Fruit Store';
let storeInfo = ['Morocco', 'Marrakech', 'Call us: xxxxxxxxx', 'email us: shkwe3l@hotmail.com'];
let AboutUs = ()=>{
    return (
        <div className='aboutUs container container-fluid'>
            <div className='about-div'>
                <h1>Our company</h1>
                <p>
                    {companyName} is a new company who's on a new online campaign.
                    We are not the only ones but we are the BEST in what we do.
                    we have quality product, quality service in low amount of time,
                    quick delivery, client support, and more ...
                    
                </p>
            </div>
            <div className='about-div'>
                <h1>Our team</h1>
                <p>Our {companyName} guarantee to deliver the best quality service to our customers,
                    products from the very dephs of our farms. Our team consists of around 
                    80 000 black farmer and around 750 farm only to give the best quality 
                    to our dear customers.
                </p>
            </div>
            <div className='about-div last'>
                <h1>Store Information</h1>
                <p>
                    our store center location for any dispute: 
                    <ul>
                        {
                            storeInfo.map((e, i)=>{
                                return <li key={i}>{e}</li>
                            })
                        }    
                    </ul>
                </p>
            </div>
        </div>
    );
}
export default AboutUs;