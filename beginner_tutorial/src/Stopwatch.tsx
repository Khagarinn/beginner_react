import { useState } from "react";

function Stopwatch() {

const [count, setCount] = useState(0);

function increment() {
    setCount(count + 1);
}

function decrement() {
    setCount(count - 1);
}

function reset() {
    setCount(0);
}

    return (
        <>
            <div className="sw">
                <h1 className="sw-title">The Counter</h1>
                <p className="sw-text">{count}</p>
                <div className="sw-buttons">
                    <button className = "sw-buttontype1" onClick={increment}>Increse</button>
                    <button className = "sw-buttontype1" onClick={decrement}>Decrease</button>
                    <button className = "sw-buttontype2" onClick={reset}>Reset</button>
                </div>
            </div>
        </>
    )
}

export default Stopwatch;