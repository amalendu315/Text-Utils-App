
import './App.css';
import About from './components/About'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'

function App() {
  return (
      <>
        <Navbar title="TextUtils"/>
        <div className="container my-3">
          <TextForm heading='Enter a text to analyse below'/>
        </div>
        <About/>
        <div className="footer">
          <Footer/>
        </div>
      </>
  );
}

export default App;
