import style from "./button.module.css";

export function ButtonMenu({name, iconSrc} : {name: string, iconSrc: string}) {
    return (
    <button className={style.button}>
        <p className={style.icon_container}>
            <img src={iconSrc} className={style.icon}/>
        </p>
        <p className="font">{name}</p>
    </button>
    )
}

export function ButtonDefault({name} : {name: string}) {
    return (
        <>
        <button className={style.button_default}>
            <p className="font">{name}</p>
        </button>
        </>
    )
}