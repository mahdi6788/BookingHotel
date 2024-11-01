import { useNavigate } from "react-router-dom";
import useUrlLocation from "../../hooks/useUrlLocation";
import { useState } from "react";

function AddNewBookmark() {
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");

  const [lat, lng] = useUrlLocation();

  const navigate = useNavigate();
  const handleBack = (e) => {
    e.preventDefault();
    navigate(-1);
  };


  return (
    <div>
      <h2>Add New Bookmark</h2>
      <div className="form">
        <div className="formControl">
          <label htmlFor="cityName">City Name</label>
          <input
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
            type="text"
            className="cityName"
            id="cityName"
          />
        </div>
        <div className="formControl">
          <label htmlFor="country">Country</label>
          <input
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            type="text"
            className="country"
            id="country"
          />
        </div>
        <div className="buttons">
          <div className="btn btn--back" onClick={handleBack}>
            &larr; Back
          </div>
          <div className="btn btn--primary">Add</div>
        </div>
      </div>
    </div>
  );
}

export default AddNewBookmark;
