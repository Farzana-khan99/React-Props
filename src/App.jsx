import "./App.css";
import Navbar from "./component/Navbar";
import Button from "./component/Button";
import Description from "./component/Description";

function App() {
  return (
    <>
      <div style={{ padding: "20px 50px" }}>
        <Navbar />
        <Description />
        <div style={{ display: "flex", gap: "30px", flexWrap: "wrap" }}>
          <Button Bgcolor="#646cff" color="white" text="Click Me" />
          <Button Bgcolor="#646cff" color="white" text="Read More" />
          <Button icon="🎉" Bgcolor="#ebebef" text="View More" />
        </div>
      </div>
    </>
  );
}

export default App;
