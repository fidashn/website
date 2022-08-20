import './App.css';
import Footer from './Components/Footer';
import Sidebar from './Components/Sidebar';
import Main from './Components/Main';


function App() {
  return (
    <div className="App">
     <div className='page-container'>
     <Sidebar />
      <Main />
      </div>
     <Footer />
    </div>
  );
}

export default App;
