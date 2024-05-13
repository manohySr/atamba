import { ButtonMenu, ButtonDefault } from "./components/button/button"
import Folder from "./components/folder/folder";
import SearchBar from "./components/search/search";

import IconFiles from "./assets/images/file-earmark-text.svg";
import IconClock from "./assets/images/clock.svg";
import IconTrash from "./assets/images/trash.svg";
import IconStar from "./assets/images/star.svg";
import IconShare from "./assets/images/share.svg";

function App() {
  return (
  <>
  <ButtonMenu name="My categories" iconSrc={IconFiles}/>
  <ButtonMenu name="Recent" iconSrc={IconClock}/>
  <ButtonMenu name="Share" iconSrc={IconShare}/>
  <ButtonMenu name="Stared" iconSrc={IconStar}/>
  <ButtonMenu name="Trash" iconSrc={IconTrash}/>
  <ButtonDefault name="Upgrade" />
  <Folder name="Projects"/>
  <SearchBar />
  </>
  )
}

export default App
