import style from "./folder.module.css";

import IconFolder from "./../../assets/images/folder.png";

export default function Folder({name}: {name: string}) {
    return (
        <>
        <div className={style.folder}>
            <img src={IconFolder} className={style.folder_img}/>
            <p className="font">{name}</p>
        </div>
        </>
    )
}