import { useState, useEffect } from "react";
import { TbUvIndex } from "react-icons/tb";

function GoogleReviews() {

    const PLACE_ID = "ChIJN1t_tDeuEmsRUsoyG83frY4";
    const API_KEY = "AIzaSyD-vpW3xJmZZJxr5kD6xHzCqRoZghV1GAc";

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await fetch(
                    `https://maps.googleapis.com/maps/api/place/details/json?placeid=${PLACE_ID}&fields=reviews&key=${API_KEY}`
                ) 
                const data = await response.json();
                console.log(data)
            }
            catch{
                console.log("error")
            }
        };
        fetchReviews();
    }, [])

    return (
        <div className="max-w-6xl mx-auto px-6 ">
<h2 className="text-3xl font-extrabold text-gray-900 text-center mb-6">What customers say about us:</h2>
<p>Based on {reviews.length} reviews !</p>

{reviews.map((review, index) => (
    <div key={index}>
        <h3 >{review.author_name}</h3>
        <p>{review.text}</p>
    </div>

))}
        </div>

    )
}

export default GoogleReviews;