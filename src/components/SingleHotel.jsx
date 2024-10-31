import { useParams } from "react-router-dom"
import Loading from "./Loading"
import { useHotel } from "./HotelsProvider"
import { useEffect } from "react"

function SingleHotel() {
    const {id} = useParams()
    const { getsingleHotel, isLoadingCurrentHotel, currentHotel } = useHotel()

    useEffect(()=>{
        getsingleHotel(id)
    },[id])
    
    if (isLoadingCurrentHotel || !currentHotel) return <Loading/>
    return(
        <div className="room">
            <div className="roomDetail">
                <h2>{currentHotel.name}</h2>
                <div>
                    {currentHotel.number_of_reviews} reviews &bull; {currentHotel.smart_location}
                </div>
                <img src={currentHotel.xl_picture_url} alt={currentHotel.name} />
            </div>
        </div>
    )
}

export default SingleHotel