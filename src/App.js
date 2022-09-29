import logo from './logo.svg';
import Adress from './Address.js'
import ProfilePhoto from './ProfilePhoto';
import FullName from './FullName';
import './App.css';

function App() {
  return (
    <div className="App">
      <ProfilePhoto/>
      <Adress/>
      <FullName/>
    </div>
  );
}

export default App;
