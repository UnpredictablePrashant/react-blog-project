import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Aboutus from './components/aboutus/aboutus';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
      <Header></Header>
        <Routes>
          {/* <Route path="/" element={<Home/>}></Route> */}
          <Route path='/aboutus' element={<Aboutus />}> </Route>
          {/* <Route path='/blog' element={<Blog/>}>
            <Route path='' element={<Posts/>}></Route>
            <Route path=':postSlug' element={<Post/>}></Route>
          </Route> */}
        </Routes>
        <Footer></Footer>


      </Router>

    </>
  );
}

export default App;
