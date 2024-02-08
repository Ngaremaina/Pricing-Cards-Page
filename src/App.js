import './App.css';
import CardList from './components/CardList';

function App() {

  return (
    <div className="flex flex-col h-screen max-h-screen bg-gray-900">
      
      <div className = "flex-grow overflow-y-auto bg-page text-default-text">  
        <CardList/>
      </div>
    </div>
  );
}

export default App;
