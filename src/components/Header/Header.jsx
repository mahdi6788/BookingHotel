import { MdLocationOn } from "react-icons/md";
import { HiMinus, HiOutlineCalendar, HiPlus, HiSearch } from "react-icons/hi";
import { useState } from "react";

function Header() {
  const [destination, setDestination] = useState("");
  const [openOption, setOpenOption] = useState(false)


  return (
    <div className="header">
      <div className="headerSearch">
        <div className="headerSearchItem">
          <MdLocationOn className="headerIcon locationIcon" />
          <input
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            type="text"
            placeholder="Where to go"
            className="headerSearchInput"
            name="destination"
            id="destination"
          />
          <span className="seperator"></span>
        </div>
        <div className="headerSearchItem">
          <HiOutlineCalendar className="headerIcon dateIcon" />
          <div className="dateDropDown">2023/06/15</div>
          <span className="seperator"></span>
        </div>
        <div className="headerSearchItem">
          <div id="optionDropDown" onClick={()=>setOpenOption(!openOption)}>
            1 adult &bull; 2 children &bull; 1 room
          </div>
          {openOption && <GuestOptionList />}
          <span className="seperator"></span>
        </div>
        <div className="headerSearchItem">
          <button className="headerSearchBtn">
            <HiSearch className="headerIcon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;


function GuestOptionList(){
    return(
        <div className="guestOptions">
            <OptionItem />
            <OptionItem />
            <OptionItem />
        </div>
    )
}

function OptionItem() {
    return(
        <div className="guestOptionItem">
                <span className="optionText">Adult</span>
                <div className="optionCounter">
                    <button className="optionCounterBtn">
                        <HiMinus className="icon"/>
                    </button>
                    <span className="optionCounterNumber">2</span>
                    <button className="optionCounterBtn">
                    <HiPlus className="icon"/>
                    </button>
                </div>
            </div>
    )
}