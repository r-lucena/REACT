import { useState } from "react"

function useCurrentLocation() {
    const [location, setLocation] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] =useState(false)
    function getLocation () {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setLocation({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                    
                })
                console.log("Position ===> ", position);
            },
            (error) => {
                console.log(error);
            }
        )

    }

    return {
        location: location,
        getLocation: getLocation,
    }
}


export default useCurrentLocation