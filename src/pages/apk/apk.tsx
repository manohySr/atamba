import style from "./apk.module.css";

import IconFiles from "./../../assets/images/file-earmark-text.svg";
import IconClock from "./../../assets/images/clock.svg";
import IconTrash from "./../../assets/images/trash.svg";
import IconStar from "./../../assets/images/star.svg";
import IconShare from "./../../assets/images/share.svg";
import { ButtonDefault, ButtonMenu } from "../../components/button/button";
import Folder from "../../components/folder/folder";
import SearchBar from "../../components/search/search";
import Space from "../../components/space/space";

// <ButtonMenu name="My categories" iconSrc={IconFiles} />
// <ButtonMenu name="Recent" iconSrc={IconClock} />
// <ButtonMenu name="Share" iconSrc={IconShare} />
// <ButtonMenu name="Stared" iconSrc={IconStar} />
// <ButtonMenu name="Trash" iconSrc={IconTrash} />
// <ButtonDefault name="Upgrade" />
// <Folder name="Projects" />
// <SearchBar />
// <Space totalSpace="150 GB" usedSpace="112.5 GB" />

export default function Apk() {
  return (
    <>
      <div className={style.container}>
        <div className={style.menu}>
          <ButtonMenu name="My categories" iconSrc={IconFiles} />
          <ButtonMenu name="Recent" iconSrc={IconClock} />
          <ButtonMenu name="Share" iconSrc={IconShare} />
          <ButtonMenu name="Stared" iconSrc={IconStar} />
          <ButtonMenu name="Trash" iconSrc={IconTrash} />
        </div>
        <div className={style.application}>
          <div className={style.explorer}>
            <div className={style.explorer_search}>
              <SearchBar />
            </div>
            <div className={style.folder}>
              <div className={style.title}>Quick Access</div>
              <div className={style.folder_list}>
                <Folder name="Projects" />
                <Folder name="Projects" />
                <Folder name="Projects" />
                <Folder name="Projects" />
              </div>
            </div>
          </div>
          <div className={style.user}>
            <div className={style.storage}>
              <Space totalSpace="150 GB" usedSpace="112.5 GB" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
