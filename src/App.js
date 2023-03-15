import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
import Home from "./components/Home"

function App() {
    return (
        <div className="App">
            <Header/>
            <Home/>
            <Footer/>
        </div>
    );
}

export default App;
