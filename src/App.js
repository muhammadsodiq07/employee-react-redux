import { useState } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

function App() {

  let [search, setSearch] = useState([]);

  const [pagnitionCount, setPagnitionCount] = useState(5)
  const [pagnitionID, setPagnitionID] = useState(1)
  
  return (
    
    <div className="App">
        <Header/>
        <Hero
         pagnitionID={pagnitionID}
         setPagnitionID={setPagnitionID}
         pagnitionCount={pagnitionCount}
         setPagnitionCount={setPagnitionCount}
         search={search}
         setSearch={setSearch}
        />
    </div>  
  );
}

export default App;
