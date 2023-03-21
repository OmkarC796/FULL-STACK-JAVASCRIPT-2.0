import React, { useState } from "react";
import Card from "./card";
import Axios from "axios";

function App(props) {

    const [details, setDetails] = useState({});

    const fetchDetails = async () => {
             const {data} = await Axios.get('https://randomuser.me/api')
             console.log("RESPONSE", data)
            
            const details = data.results[0]
            setDetails(details)
            }
    let nameList = ["omkar", "suraj", "deepak"]
    return(
        <>
        <div>App</div>
        <Card myname="Omkar" list={nameList}/>
        <button onClick={fetchDetails}>get details</button>
        </>
    )
    
}

export default App