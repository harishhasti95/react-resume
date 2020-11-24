import './App.css';

import { Header } from './components/Header.js';
import { Academics } from './components/Academics.js';
import { Left } from './components/left.js';
import { Right } from './components/right.js';

function App() {
  return (
    <div>
      <Header />
      <Academics />
      <Left />
      <Right />
    </div>

  );
}

export default App;
