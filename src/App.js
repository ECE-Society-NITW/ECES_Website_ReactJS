import './App.css';
import Sidebar from './sidebar';
import EventComponent from './eventCard';

function App() {
  return (
    <div>
      <div className="sidebar">
        <Sidebar />
      </div>
      <div class="event-container">
        <EventComponent />
        <EventComponent />
        <EventComponent />
        <EventComponent />
      </div>
    </div>
    
    
  );
  
}

export default App;
