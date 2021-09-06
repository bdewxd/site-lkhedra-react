import SignUp from "./components/signUp/signUp";
import Login from './components/login/login.js';
import css from './handleActivity.css';
let HandleActive = ()=>{
    return (
        <div className='handleActive'>
            <SignUp />
            <Login />
        </div>
    );
}
export default HandleActive;