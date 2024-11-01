import { useNavigate } from "react-router-dom"
import useUrlLocation from "../../hooks/useUrlLocation"


function AddNewBookmark() {
    /// back button
    const navigate = useNavigate()
    const handleBack = (e)=>{
        e.preventDefault()
        navigate(-1)
    }

    const [lat, lng] = useUrlLocation()
    

 return(
    <div>
        <h2>Add New Bookmark</h2>
        <div className="form">
            <div className="formControl">
                <label htmlFor="cityName">City Name</label>
                <input type="text" className="cityName" id="cityName" />
            </div>
            <div className="formControl">
                <label htmlFor="country">Country</label>
                <input type="text" className="country" id="country" />
            </div>
            <div className="buttons">
            <div className="btn btn--back" onClick={handleBack}>&larr; Back</div>
            <div className="btn btn--primary">Add</div>
            </div>

        </div>
        
    </div>
 )   
}


export default AddNewBookmark