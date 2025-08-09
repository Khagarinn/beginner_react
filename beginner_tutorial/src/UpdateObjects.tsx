import { useState } from "react";

function UpdateObjects() {

    const [car, setCar] = useState({ year: 2024, make: "Ford", model: "Mustang" });

    function handleYearChange(event: React.ChangeEvent<HTMLInputElement>) {
        setCar(c => ({ ...c, year: Number(event.target.value) }))
    }

    function handleMakeChange(event: React.ChangeEvent<HTMLInputElement>) {
        setCar(c => ({ ...c, make: event.target.value }))
    }

    function handleModelChange(event: React.ChangeEvent<HTMLInputElement>) {
        setCar(c => ({ ...c, model: event.target.value }))
    }

    return (
        <>
            <div className="uo">
                <p>Your favorite car is: {car.year} {car.make} {car.model}</p>

            </div>
            <div className="uo2">
                <input type="number" value={car.year} onChange={handleYearChange} /><br />
                <input type="text" value={car.make} onChange={handleMakeChange} /><br />
                <input type="text" value={car.model} onChange={handleModelChange} /><br />
            </div>
        </>
    );
}

export default UpdateObjects;