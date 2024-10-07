import { useState } from 'react';
import './App.css';
import Lottery from './Lottery.jsx';
import Wallet from './wallet.jsx';
function App() {
  let [money, setMoney] = useState(100);
  return (
    <>
      <Lottery setMoney={setMoney} money={money}/>
      <Wallet money={money}/>
    </>
  )
}

export default App
