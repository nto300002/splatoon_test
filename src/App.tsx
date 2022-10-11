import './component/button.scss'
import './App.scss'

import Home from './Home';
import { useState } from 'react';

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import Header from './component/Header';
import { useNavigate } from 'react-router-dom';

// export const isHome = atom({
//   key: 'isHome', // unique ID (with respect to other atoms/selectors)
//   default: true, // default value (aka initial value)
// });
function App() {
  const navigate = useNavigate();
  const [isHomeComming, setIsHomeComming] = useState(true);
  const homeHandler = () => {
    setIsHomeComming(false)
  }
  const homeCommingHandler = () => {
    navigate('/')
    setIsHomeComming(true)
  }
  return (
    <>
      <div className='container' onClick={homeHandler}>
        {isHomeComming && <Home/>}
      </div>
      {!isHomeComming && <p onClick={homeCommingHandler}>HOMEに戻る</p>}
    </>
  );
}

export default App;


