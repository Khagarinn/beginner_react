function Button() {

let count = 0;

const handleClick = (e: any) => {
  count++;
  e.target.textContent = count;
}

const handleClick2 = (e: any) => {
  e.target.textContent = 'You double clicked me!';
}

const handleClick3 = (name: string) => {
  if (count < 3) {
    count++;
    console.log(name + ' clicked me ' + count + ' time(s)');
  }
  else {
    console.log('You cannot click me anymore!');
    return; // Exit the function if the count exceeds 3
  }
}

    return(<button className="button_default" onDoubleClick={(e) => handleClick2(e)} onClick={(e) => handleClick(e)}>Click Me!</button>);
}

export default Button;