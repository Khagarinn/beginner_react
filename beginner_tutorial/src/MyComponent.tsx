import { useState, type SetStateAction } from "react";


function MyComponent() {

    const [name, setName] = useState("Mert Can");
    const [age, setAge] = useState(25);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("Delivery");

    const updateName = () => {
        setName("arda");
    }

    function updateAge(event: React.ChangeEvent<HTMLInputElement>) {
        setAge(Number(event.target.value));
    }

    function updateComment(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setComment(event.target.value);
    }

    function updatePayment(event: React.ChangeEvent<HTMLSelectElement>) {
        setPayment(event.target.value);
    }

    function updateShipping(event: React.ChangeEvent<HTMLInputElement>) {
        setShipping(event.target.value);
    }
    return (
        <>
            <button className="button_default" onClick={updateName}>Set Name</button>
            <p>Name: {name}</p>
            <input type="number" value={age} onChange={updateAge} />
            <p>Age: {age}</p>
            <textarea value={comment} onChange={updateComment} placeholder="Enter your instructions" />
            <p>Comment: {comment}</p>

            <select value={payment} onChange={updatePayment}>
                <option value="">Select Payment Method</option>
                <option value="credit_card">Credit Card</option>
                <option value="paypal">PayPal</option>
                <option value="bank_transfer">Bank Transfer</option>
            </select>
            <p>Payment Method: {payment}</p>

            <label>
                <input type = "radio" value = "Pick Up"
                checked = {shipping === "Pick Up"}
                onChange={updateShipping} />
                Pick Up
            </label><br/>
            <label>
                <input type = "radio" value = "Delivery"
                checked = {shipping === "Delivery"}
                onChange={updateShipping} />
                Delivery
            </label>
            <p>Shipping Method: {shipping}</p>
        </>

    );
}

export default MyComponent;