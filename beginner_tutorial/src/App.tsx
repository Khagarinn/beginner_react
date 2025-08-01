import Header from "./Header"
import Card from "./Card";
import UserGreeting from "./UserGreeting";

function App() {
  // this will serve as the root of the application
  // we will add components here later
  return (
    <>
      <UserGreeting isLoggedIn={true} username="MertCan"/>
      <Header />
      <Card name = "Mert Can" length={21}/>
      <Card name = "Doruk" length={1}/>
      <Card name = "Arda" length={3}/>
    </>
  );
}

export default App