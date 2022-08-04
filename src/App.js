
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import {books} from "./data"
import BookDetails from "./pages/BookDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Route path="/" exact component={Home}/>
        <Route path="/books" exact render={()=> <Books books={books}/>}/>
        <Route path="/books/:id" exact render={()=><BookDetails books= {books}/>}/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
