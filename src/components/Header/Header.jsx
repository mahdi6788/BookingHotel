import { MdLocationOn } from "react-icons/md";
import { HiOutlineCalendar, HiSearch} from "react-icons/hi"

function Header() {
  return (
    <div className="header">
      <div className="headerSearch">
        <div className="headerSearchItem">
          <MdLocationOn className="headerIcon locationIcon" />
          <input
            type="text"
            placeholder="Where to go"
            className="headerSearchInput"
            name="destination"
            id="destination"
          />
          <span className="seperator"></span>
        </div>
        <div className="headerSearchItem">
        <HiOutlineCalendar className="headerIcon dateIcon"/>
        <div className="dateDropDown">2023/06/15</div>
        <span className="seperator"></span>
        </div>
        <div className="headerSearchItem">
            <div id="optionDropDown"> 1 adult &bull; 2 children &bull; 1 room</div>
          <span className="seperator"></span>
        </div>
        <div className="headerSearchItem">
            <button className="headerSearchBtn">
                <HiSearch className= "headerIcon"/>
            </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
