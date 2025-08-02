function Button() 
{
    let count = 0;
    const tiklama = () => {
        count++;
        console.log("Button clicked " + count + " times");
    };
    return(<button className="button_default" onClick={() => tiklama()}>Click Me!</button>);
}

export default Button;