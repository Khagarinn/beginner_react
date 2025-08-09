import {useState} from "react";

function UpdateObjects(){

    const [car, setCar] = useState({year:2024, make:"Ford", model:"Mustang"});


    return (
        <>
            <div className="uo">
                <p>Your favorite car is: {car.year} {car.make} {car.model}</p>
                
            </div>
            <div className="uo2">
                <input type="number" value={car.year}/><br/>
                <input type="text" value={car.make}/><br/>
                <input type="text" value={car.model}/><br/>
            </div>
        </>
    );
}

export default UpdateObjects;