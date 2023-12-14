import './App.css';
import Sidebar from './sidebar';
import EventComponent from './eventCard';
import CategoryCard from './categoryCard';

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
      <div className='event-cat-container'>
        <CategoryCard wordOfTheDay="Workshop"/>
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
    </div>
    
    
  );
  
}

export default App;
