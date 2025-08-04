import { useState } from "react";


function MyComponent() {

    const [name, setName] = useState("Mert Can");

    const updateName = () => {
        setName("arda");
    }

    return (
        <>
            <button className="button_default"onClick={updateName}>Set Name</button>
            <p>Name: {name}</p>
        </>

    );
}

export default MyComponent;