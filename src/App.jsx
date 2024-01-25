import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MainRouter from './router/MainRouter';
import { CartProvider } from './context/CartContext';



function App (){


  return (
  <div>
    <CartProvider>
      <MainRouter/>
    </CartProvider>
  </div> 
      
  )
}

export default App
