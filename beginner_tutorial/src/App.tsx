import Header from "./Header"
import Card from "./Card";
import UserGreeting from "./UserGreeting";
import Button from "./Button";

function App() {
  // this will serve as the root of the application
  // we will add components here later
  return (
    <>
      <UserGreeting isLoggedIn={true} username="Admin" />
      <Header />
      <Button />
      <Card name="arda" length={20} />
      <Card name="Darfa" length={1} />
      <Card name="Arda" length={3} />
    </>
  );
}

export default App