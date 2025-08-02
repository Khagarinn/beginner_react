function Button() {

const handleClick = () => {
    alert("Button was clicked! Check the console for more details.");
}
const handleClick2 = (name: string) => {
  console.log(name + ' clicked me');
}

    return(<button className="button_default" onClick={() => handleClick2("admin")}>Click Me!</button>);
}

export default Button;