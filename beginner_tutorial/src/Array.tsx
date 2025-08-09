import { useState } from "react";

function Array() {

    const [foods, setFoods] = useState(["Mantı", "Hamburger", "Pizza"]);

    function handleAddFood() {
        const inputEl = document.getElementById("foodInput") as HTMLInputElement | null;
        if (!inputEl) return; // or throw an error

        const newFood = inputEl.value;
        inputEl.value = "";
        setFoods(f => [...f, newFood]);
    }


    function handleRemoveFood(index: number) {
        setFoods(foods.filter((_, i) => i !== index));

    }

    return (
        <>
            <div className="arraycontainer">
                <h1 className="title">Sevdiğim yemekler</h1>
                <div className="arrayRow">
                    <ul className="listItems">
                        {foods.map((foods, index) =>
                            <li key={index} onClick={() => handleRemoveFood(index)}>
                                {foods}
                            </li>)}
                    </ul>
                </div>
                <div className="arrayRow2">
                    <input className="input" type="text" id="foodInput" placeholder="Yemek ekle" />
                    <button className="button" onClick={handleAddFood}>Ekle</button>
                </div>

            </div>

        </>
    );
}

export default Array;