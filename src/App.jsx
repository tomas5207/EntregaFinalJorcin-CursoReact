import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MainRouter from './router/MainRouter';
import ItemListContainer from './components/ItemListContainer';
import {useGetProducts} from './hooks/useProducts';


function App (){

  const {productsData} = useGetProducts();

  return (
  <div style={{width: '80vw' , height: '300vh'}}>
      <ItemListContainer greeting="Bienvenido a E-card.com" productsData={productsData}/>
      {/*<MainRouter/>*/}
  </div> 
      
  )
}

export default App
