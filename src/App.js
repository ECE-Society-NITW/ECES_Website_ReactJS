import './App.css';
import Sidebar from './sidebar';
import EventComponent from './eventCard';

function App() {
  return (
    <div>
      <div className='title'>
        ECES
      </div>
      <div className="sidebar">
        <Sidebar />
      </div>
      <div class="event-container">
        <EventComponent />
        <EventComponent />
        <EventComponent />
        <EventComponent />
        <EventComponent />
        <EventComponent />
        <EventComponent />
        <EventComponent />
        <EventComponent />
      </div>
      <div className='title-2'>
        Event Categories
      </div>
    </div>
    
    
  );
  
}

export default App;
