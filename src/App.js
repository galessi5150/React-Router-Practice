import { BrowserRouter } from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import Header from './Header';
import About from './About';
import Home from './Home';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = { <Home /> }></Route>
        <Route path='/about' element ={ <About />}></Route>
      </Routes>

      <div className="App">
        <Header />
      </div>
    </BrowserRouter>
  );
}

export default App;
