import './App.css';
import { Route, Routes } from "react-router-dom";
import Landing from './Views/Landing/Landing';
import Home from './Views/Home/Home';
import Detail from './Views/Detail/Detail';
import Form from './Views/Form/Form';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/countries/:id" element={<Detail />}/>
        <Route path="/create" element={<Form />}/>
      </Routes>
    </div>
  );
}

export default App;
