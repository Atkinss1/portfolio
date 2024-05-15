import Hero from "./components/Hero/Hero";
import { BrowserRouter } from "react-router-dom";

function App() {

  return (
    <>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Hero />
    </BrowserRouter>
    </>
  )
}

export default App
    
