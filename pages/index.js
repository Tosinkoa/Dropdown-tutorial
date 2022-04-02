import { useState } from "react";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdOutlineWallpaper,
  MdSettingsSuggest,
  MdOutlineColorLens,
  MdNotificationsNone,
  MdOutlineAccountCircle,
  MdLogout,
} from "react-icons/md";

const Index = () => {
  const [showList, setShowList] = useState(false);

  const showListHandler = () => setShowList(!showList);

  return (
    <div className="relative m-6">
      <div className="show_dropdown" onClick={showListHandler}>
        <p className="dropdown_label">Basic Options</p>
        <div className="arrow_background">
          <div className="dropdown_arrows">{showList ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}</div>
        </div>
      </div>
      {showList && (
        <ul className="options_background">
          <li className="option_list" onClick={showListHandler}>
            <MdSettingsSuggest />
            <span className="list_name">Interface Settings</span>
          </li>
          <li className="option_list" onClick={showListHandler}>
            <MdOutlineColorLens />
            <span className="list_name">Color Theme</span>
          </li>
          <li className="option_list" onClick={showListHandler}>
            <MdOutlineWallpaper />
            <span className="list_name">Wallpaper</span>
          </li>
          <li>
            <hr className="list_line" />
          </li>
          <li className="option_list" onClick={showListHandler}>
            <MdNotificationsNone />
            <span className="list_name">Notifications</span>
          </li>
          <li className="option_list" onClick={showListHandler}>
            <MdOutlineAccountCircle /> <span className="ml-2">Account </span>
          </li>
          <li className="option_list" onClick={showListHandler}>
            <MdLogout />
            <span className="list_name">Sign Out</span>
          </li>
        </ul>
      )}
    </div>
  );
};
export default Index;
