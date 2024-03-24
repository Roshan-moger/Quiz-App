import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import PythonQuiz from "./Pages/Quiz/PythonQuiz";
import Footer from "./Components/ErrorMessage/Footer"
import './App.css'
import Home from "./Pages/Home/Home";
import JavaQuiz from "./Pages/Quiz/JavaQuiz";
import  AptitudeQuiz from "./Pages/Quiz/AptitudeQuiz"





function App() {
  const [name, setName] = useState("");
  const [clg, setClg] = useState('');
 
  

  return (
    <BrowserRouter>
      <div className="App" style={{backgroundImage:"url(ques1.png)", color:'black'}}>
        <Header />
        <Routes>
          <Route path='/' element={<Home name={name} setName={setName} 
          clg={clg} setClg={setClg}/>} />
          <Route path="/quiz/python" element={<PythonQuiz name={name} clg={clg}/>} />
        <Route path="/quiz/java" element={<JavaQuiz  name={name} clg={clg}/>} />
        <Route path="/quiz/aptitude" element={<AptitudeQuiz name={name} clg={clg} />} />
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;