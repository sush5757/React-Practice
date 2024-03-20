import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";

function App() {
  
  return (
    <div className="App">
     <Header/>
     <div id ="content">
      <p>  Hey This is {2**2}   </p>
     </div>
     <Footer/>
    </div>

  );
}

export default App;
