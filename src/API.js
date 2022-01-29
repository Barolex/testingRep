import { useState, useEffect } from "react";

export const API = () => {

    const [catImage, setCatImage] = useState();

    useEffect(() => {
        fetch("https://api.thecatapi.com/v1/images/search")
          .then((response) => response.json())
          .then((data) => setCatImage(data[0].url));
    },[])

    return (
        <div>
            <img src={catImage} width={400}/>
        </div>
    )

  
};
