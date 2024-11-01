import { useNavigate } from "react-router-dom";
import useUrlLocation from "../../hooks/useUrlLocation";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import ReactCountryFlag from "react-country-flag";

function AddNewBookmark() {
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [countryCode, setCountryCode] = useState('')
  const [isLoadingGeoCoding, setIsLoadingGeoCoding] = useState("false")

  const [lat, lng] = useUrlLocation();

  const navigate = useNavigate();
  const handleBack = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  const Base_GeoCoding_URL = "https://api-bdc.net/data/reverse-geocode-client";

  useEffect(() => {
    if (!lat, !lng) return

    async function fetchLocationData() {
        setIsLoadingGeoCoding(true)
      try {
        const {data} = await axios.get(
          `${Base_GeoCoding_URL}?latitude=${lat}&longitude=${lng}&localityLanguage=en`
        );
        if (!data.countryCode) {
            const message = "Here is not a specific city!"
            toast.error(message)
        }
        setCityName(data.city || data.locality || "")
        setCountry(data.countryName)
        setCountryCode(data.countryCode || "")
      } catch (error) {
        toast.error(error.message);
      } finally {setIsLoadingGeoCoding(false)}
    }
    fetchLocationData();
  }, [lat,lng]);

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
          <ReactCountryFlag svg  countryCode={countryCode} className="flag"  />
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
