import "./App.css";
import AddStudent from "./components/AddStudent";
import Calender from "./components/Calender";
import Header from "./components/Header";

function App() {
  return (
    <div className=" flex flex-col justify-between items-center h-screen bg-white ">
      <Header />
      <Calender />
      <AddStudent />
    </div>
  );
}

export default App;
