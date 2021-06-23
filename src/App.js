import logo from './logofs.png';
import './App.css';
import img from './food.jpeg';

function App() {
  return (
    <div className="container">
   

<img alt='' class="logo" src={logo} />

 <h3 className="title">
     Inicio │ Registro │ Login │ Configuración │ Pago 
     <br/>
     Pedidos por día │ Admin Config 
   </h3>
 


<br/>
<hr/><hr/>

<br/><br/>

<img alt='ceviche peruano' class="img" src= {img} />

 <h3 className="title">
     Comprar │ Agregar a carrito │ Poner reseña ★★★★★
   </h3>

<br/><br/>
<hr/>

<br/><br/>

</div>
  );
}

export default App;

