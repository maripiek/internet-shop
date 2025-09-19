import { useState } from 'react';
import './App.css';
import data from './data.json';

function App() {
  const [cart, setCart] = useState([] as string[]);

  console.log(cart);

  return (
    <>
      {data.ciagniki.map(traktor => {
        return (
            <div key={traktor.model} style={{margin: "10px"}}>
              <>{traktor.model}</>
              <button onClick={() => setCart([...cart, traktor.model])}  style={{marginLeft: "10px"}}>Buy</button>
            </div>
        );
      })}

      <div style={{borderTop: "1px solid", marginTop: "100px"}}>Cart: {cart.map(item => (
        <div key={item} style={{margin: "20px"}}>
          <>{item}</>
          <button style={{marginLeft: "10px"}} onClick={() => setCart(cart.filter(i => i !== item))}>Remove</button>
        </div>
      ))}
      </div>
      <button style={{background: "green"}}>Place order</button>
    </>
  )
}

export default App
