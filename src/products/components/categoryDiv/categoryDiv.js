import css from './categoryDiv.css';
import lists from './lists.js';

const SideNav=()=>{
    return (
        <div className="">
            <div class="dropdown ">
                <a class="btn btn-info dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown link
                </a>

                <div class="dropdown-menu sidenav" aria-labelledby="dropdownMenuLink">
                    {lists.map((e, i)=>{
                        return (
                            <div key={i}>
                                <h2>{e[0]}</h2>
                                {e[1].map((ele, key)=>{
                                    return <a href={ele.href} key={key}>{ele.text}</a>
                                })}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default SideNav;