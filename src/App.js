import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
   <Navbar title="Taxtutils" abouttext="About us"/>
   <div className="container">
    <TextForm heading= "TextUtils change to Upperase"/>
   </div>
   
    </>
  );
}

export default App;
