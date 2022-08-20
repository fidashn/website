import './App.css';
import Footer from './Components/Footer';
import Sidebar from './Components/Sidebar';


function App() {
  return (
    <div className="App">
      <header className='item-a'></header>
      <main className='item-b'></main>
     <Sidebar className='item-c'/>
     <Footer className='item-d' />
    </div>
  );
}

export default App;
