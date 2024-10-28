import { MdLocationOn } from "react-icons/md";
import { HiMinus, HiOutlineCalendar, HiPlus, HiSearch } from "react-icons/hi";
import { useRef, useState } from "react";
import useOutsideClick from "../useOutsideClick";

function Header() {
  const [destination, setDestination] = useState("");
  const [openOption, setOpenOption] = useState(false);
  const [options, setOptions] = useState({
    Adult: 1,
    Children: 0,
    Room: 1,
  });
  const handleOpertations = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "inc" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

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
          <div id="optionDropDown" onClick={() => setOpenOption(!openOption)}>
            {options.Adult} adult &bull; {options.Children} children &bull;{" "}
            {options.Room} room
          </div>
          {openOption && (
            <GuestOptionList
              options={options}
              handleOpertations={handleOpertations}
              setOpenOption={setOpenOption}
              exceptionId={"optionDropDown"}
            />
          )}
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

function GuestOptionList({ options, handleOpertations, setOpenOption, exceptionId }) {
  const optionsRef = useRef();
  useOutsideClick(optionsRef, setOpenOption, exceptionId);
  return (
    <div className="guestOptions" ref={optionsRef}>
      <OptionItem
        type="Adult"
        options={options}
        minLimit={2}
        handleOpertations={handleOpertations}
      />
      <OptionItem
        type="Children"
        options={options}
        minLimit={1}
        handleOpertations={handleOpertations}
      />
      <OptionItem
        type="Room"
        options={options}
        minLimit={2}
        handleOpertations={handleOpertations}
      />
    </div>
  );
}

function OptionItem({ type, options, minLimit, handleOpertations }) {
  return (
    <div className="guestOptionItem">
      <span className="optionText">{type}</span>
      <div className="optionCounter">
        <button
          className="optionCounterBtn"
          disabled={options[type] < minLimit}
          onClick={() => handleOpertations(type, "dec")}
        >
          <HiMinus className="icon" />
        </button>
        <span className="optionCounterNumber">{options[type]}</span>
        <button
          className="optionCounterBtn"
          onClick={() => handleOpertations(type, "inc")}
        >
          <HiPlus className="icon" />
        </button>
      </div>
    </div>
  );
}
