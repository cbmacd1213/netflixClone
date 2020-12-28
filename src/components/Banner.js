import React, {useEffect, useState}from 'react'

function Banner() {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        async function fetchData(){

        }
        fetchData();
    }, []);
    return (
        <header>
            {/* background image for entire header */}
            {/* title */}
            {/* div -> 2 buttons */}
            {/* description */}
        </header>
    )
}

export default Banner
