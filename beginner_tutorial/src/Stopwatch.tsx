import { useState } from "react";

function Stopwatch() {

const [count, setCount] = useState(0);

function increment() {
    setCount(count + 1);
}

function increment_2() {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    // This increments the count by 1 also
    // because React batches state updates
    // in the same event loop tick.
}

function increment_3() {
    setCount(c => c + 1);
    setCount(c => c + 1);
    setCount(c => c + 1);
    // This way you can increment three times
    // good practice to use functional updates
    // when the new state depends on the previous state.
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
                    <button className = "sw-buttontype1" onClick={increment_3}>Increse</button>
                    <button className = "sw-buttontype1" onClick={decrement}>Decrease</button>
                    <button className = "sw-buttontype2" onClick={reset}>Reset</button>
                </div>
            </div>
        </>
    )
}

export default Stopwatch;