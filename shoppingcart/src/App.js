import "./App.css";
import Header from "./components/header";
import Home from "./pages/home";
import Footer from "./components/footer";
import Topfold from "./components/topfold/topfold";


function App() {
  return (
    <div>
      <Header/>
      <Topfold/>
      <Home/>
      <Footer/>
      </div>
  );
}

export default App;
