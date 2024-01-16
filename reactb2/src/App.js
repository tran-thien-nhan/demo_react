import logo from './logo.svg';
import './App.css';
import UserList from './components/UserList';
import AnotherUlist from './components/AnotherUlist';
import AgeRangeUser from './components/AgeRangeUser';
import AgeRangeUserSorting from './components/sorting';

function App() {
  return (
    <div className="App">
      <UserList />
      <AnotherUlist />
      <AgeRangeUser />
      <AgeRangeUserSorting />
    </div>
  );
}

export default App;
