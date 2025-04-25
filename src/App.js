import logo from './logo.svg';
import './App.css';
import './styles.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';

function App() {
  return (
    <div className="App">

      <div className='container'>
        <Header></Header>
        <Form></Form>
      </div>
        
        
      <Footer></Footer>
      
    </div>
  );
}

export default App;
