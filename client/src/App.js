import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Main from "./Components/Main";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="flex">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default App;
