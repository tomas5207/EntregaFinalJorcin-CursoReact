import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';



function App (){
  return (
  <div style={{width: '100vw' , height: '100vh'}}>
      <NavBar/>
      <ItemListContainer greeting="Bienvenido a E-card.com"/>
  </div> 
      
  )
}

export default App
