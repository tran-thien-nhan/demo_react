import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Calculator from './components/calculator';
import MyName from './components/myname';

function App() {
  return (
    <div className="App">
      <Header/>
      <Calculator/>
      <MyName/>
    </div>
  );
}

export default App;
