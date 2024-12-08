import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Intro from './Intro';
import Point1 from './Point1';
import Point2 from './Point2';
import Point3 from './Point3';
import Conclusion from './Conclusion';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro /> 
      <Point1 />
      <Point2 />
      <Point3 />
      <Conclusion />
      <Footer />
    </div>
  );
}

export default App;
