import '../../App.css';

import Navbar from '../Navbar';
import Heading from './Heading';
import Card from './Card';
import Gallery from './Gallery';
import About from './About';

function HomePage() {
  return (
    <div className="App">

      <header className="App-header">
        <div className='app__hero'>
          <Navbar />
          <Heading />
        </div>
        <Card />
        <Gallery />
        <About />
      </header>
      
    </div>
  );
}

export default HomePage;