import style from "./search.module.css";

import IconSearch from "./../../assets/images/search.svg";

export default function SearchBar() {
    return (
        <>
            <div className={style.bar}>
                <img src={IconSearch} className={style.icon}/>
                <input placeholder="Search" className={style.input}></input>
            </div>
        </>
    )
}