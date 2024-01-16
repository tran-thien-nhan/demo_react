import logo from './logo.svg';
import './App.css';
import ClickableButton from './components/ClickableButton';
import ClickWithParameter from './components/ClickWithParameter';
//import DateTimeClick from './components/DateTimeClick';
import Counter from './components/Counter';
import ListManager from './components/QuanLyDanhSach';
import SearchFeature from './components/SearchFeature';
import TodoList from './components/ToDoList';

function App() {
  return (
    <div className="App">
      <ClickableButton />
      <ClickWithParameter />
      {/* <DateTimeClick /> */}
      <Counter />
      <ListManager />
      <SearchFeature />
      <TodoList />
    </div>
  );
}

export default App;
