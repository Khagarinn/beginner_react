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
            <h6>asdasd</h6>
            
            <h2>sdsd</h2>
            <h1>aselsakmd</h1>
        </>

    );
}

export default MyComponent;