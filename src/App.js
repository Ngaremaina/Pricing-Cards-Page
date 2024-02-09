import './App.css';
import CardList from './components/CardList';
import { useState } from 'react'
import Header from './components/Header';
import Toggle from './components/Toggle';

function App() {
  // set toggle state to false
  const [toggle, setToggle] = useState(false)

  // function that handles the toggle state
  const handleToggle = () => {
      setToggle(!toggle)
  }

  return (
    <div className="flex flex-col h-screen max-h-screen bg-gray-900">
      <div className = "flex-grow overflow-y-auto bg-page text-default-text">  
      {/* import all the components */}
        <Header/>
        <Toggle handleToggle={handleToggle}/>
        <CardList toggle={toggle}/>
      </div>
    </div>
  );
}

export default App;
