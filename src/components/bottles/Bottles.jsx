import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../bottle/Bottle";
import './bottles.css'


const Bottles = () => {
    const [bottles, setBottles]=useState([])

    useEffect(()=>{
        fetch('./bottles.json')
        .then(res=>res.json())
        .then(data=>setBottles(data))
    },[])

    return (
        <div>
           <h2>Water Bottle</h2> 
           <h4>Bottle: {bottles.length}</h4>
           <div className="bottle-container">
           {
            bottles.map(bottle=><Bottle key={bottle.id} bottle={bottle}></Bottle>)
           }
           </div>
        </div>
    );
};

export default Bottles;