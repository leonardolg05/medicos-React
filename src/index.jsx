import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ContextProvide from './Components/Context/global.context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /* <React.StrictMode>
       <App/>
   </React.StrictMode>*/

  <BrowserRouter>
    <ContextProvide>
      <App />
    </ContextProvide>
  </BrowserRouter>
);


