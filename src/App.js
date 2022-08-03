import Discounted from "./components/Discounted";
import Explore from "./components/Explore";
import Featured from "./components/Featured";
import Highlights from "./components/Highlights";
import Landing from "./components/Landing";
import Nav from "./components/Nav";


function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Landing></Landing>
      <Highlights></Highlights>
      <Featured></Featured>
      <Discounted></Discounted>
      <Explore></Explore>
    </div>
  );
}

export default App;
