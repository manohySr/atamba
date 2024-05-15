import style from "./apk.module.css";

import IconFiles from "./../../assets/images/file-earmark-text.svg";
import IconClock from "./../../assets/images/clock.svg";
import IconTrash from "./../../assets/images/trash.svg";
import IconStar from "./../../assets/images/star.svg";
import IconShare from "./../../assets/images/share.svg";
import IconPdf from "./../../assets/images/pdf.png";
import { ButtonDefault, ButtonMenu } from "../../components/button/button";
import Folder from "../../components/folder/folder";
import SearchBar from "../../components/search/search";
import Space from "../../components/space/space";

export default function Apk() {
  return (
    <>
      <div className={style.container}>
        <div className={style.menu}>
          <div>
            <ButtonMenu name="My categories" iconSrc={IconFiles} />
            <ButtonMenu name="Recent" iconSrc={IconClock} />
            <ButtonMenu name="Share" iconSrc={IconShare} />
            <ButtonMenu name="Stared" iconSrc={IconStar} />
            <ButtonMenu name="Trash" iconSrc={IconTrash} />
          </div>
          <div className={style.menu_bottom}>
            <ButtonDefault name="Create new" />
            <div className={style.line}></div>
            <ButtonMenu name="Log out" iconSrc={""} />
          </div>
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
            <div>
              <div className={style.title}>Recent Files</div>
              <ExploreFile />
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

function ExploreFile() {
  return (
    <>
      <div className={style.explore_file}>
        <p className={`${style.explore_file_title} ${style.filename}`}>Name</p>
        <p className={style.explore_file_title}>File size</p>
        <p className={style.explore_file_title}>Creation</p>
      </div>
      <div className={style.container_explorer}>
        <File name="File name lava be" size={10} creationDate="Nov 20, 2024" />
        <File name="File name lava be" size={10} creationDate="Nov 20, 2024" />
        <File name="File name lava be" size={10} creationDate="Nov 20, 2024" />
        <File name="File name lava be" size={10} creationDate="Nov 20, 2024" />
        <File name="File name lava be" size={10} creationDate="Nov 20, 2024" />
        <File name="File name lava be" size={10} creationDate="Nov 20, 2024" />
        <File name="File name lava be" size={10} creationDate="Nov 20, 2024" />
        <File name="File name lava be" size={10} creationDate="Nov 20, 2024" />
        <File name="File name lava be" size={10} creationDate="Nov 20, 2024" />
        <File name="File name lava be" size={10} creationDate="Nov 20, 2024" />
      </div>
    </>
  );
}

function File({
  name,
  size,
  creationDate,
}: {
  name: string;
  size: number;
  creationDate: string;
}) {
  return (
    <>
      <div className={`${style.explore_file} ${style.files}`}>
        <p className={style.filename}>
          <img src={IconPdf} />
          <p>{name}.pdf</p>
        </p>
        <p className={style.explore_file_title}>{size}Mo</p>
        <p className={style.explore_file_title}>{creationDate}</p>
      </div>
    </>
  );
}
