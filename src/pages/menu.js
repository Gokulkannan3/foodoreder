import React, { useState} from 'react';
import Navi from '../components/anav';
import cc from '../images/cc.png';
import plus from '../images/plus.png';
import minus from '../images/minus.png';
import pp from '../images/pp.jpg';
import rr from '../images/rr.jpg';
import './menu.css';
import axios from 'axios'
import brownie from '../images/brownie.jpg'
import cake from '../images/cake.jpg'

export default function Menu() {
  const [cartCounts, setCartCounts] = useState([0, 0, 0, 0, 0, 0]);
  const [user,setUser]=useState('');
  const [address,setAddress]=useState('');


  const handleRemoveFromCart = (index) => {
    if (cartCounts[index] > 0) {
      const newCartCounts = [...cartCounts];
      newCartCounts[index] -= 1;
      setCartCounts(newCartCounts);
    }
  };

  const handleAddToCart = (index) => {
    const newCartCounts = [...cartCounts];
    newCartCounts[index] += 1;
    setCartCounts(newCartCounts);
  };

  const placeOrder = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('https://fbackend-6fbo.onrender.com/order', {
        user: user,
        address: address,
        coffee: cartCounts[0],
        pasta: cartCounts[1],
        rosemilk: cartCounts[2],
        brownie: cartCounts[3],
        cake: cartCounts[4],
      });
  
      if (response.status === 200) {
        console.log('Order placed successfully!');
        setCartCounts([0, 0, 0, 0, 0, 0]);
      } else {
        alert('Order Failed')
        console.error('Order failed:', response.statusText);
      }
    } catch (error) {
      console.error('Order failed:', error.message);
    }
  };
  

  return (
    <div>
      <Navi/>
      <div className='car flex justify-center items-center mt-10 gap-10 mb-10'>
        <div className="card card-compact w-96 h-96 bg-red-200 shadow-2xl">
          <figure><img className='cc' src={cc} alt="cc"/></figure>
          <div className="card-body">
            <h2 className="card-title">Coffee!</h2>
            <p>Feelig tired? Have some coffeee</p>
            <div className="bu card-actions flex justify-end ">
              <button className='btn flex bg-red-500 hover:bg-red-500'>
                <img src={minus} alt='plus' className='plus cursor-pointer' onClick={()=>handleRemoveFromCart(0)}/>
                <p className='font-black'>{cartCounts[0]}</p>
                <img src={plus} alt='plus' className='minus cursor-pointer' onClick={()=>handleAddToCart(0)}/>
              </button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 h-96 bg-red-200 shadow-2xl">
          <figure><img className='pp' src={pp} alt="pp" /></figure>
          <div className="card-body">
            <h2 className="card-title">Pastas!</h2>
            <p>Feels hungry? Teste some yummy pastas</p>
            <div className="bu card-actions flex justify-end ">
              <button className='btn flex bg-red-500 hover:bg-red-500'>
                <img src={minus} alt='plus' className='minus cursor-pointer' onClick={()=>handleRemoveFromCart(1)}/>
                <p className='font-black'>{cartCounts[1]}</p>
                <img src={plus} alt='plus' className='plus cursor-pointer' onClick={()=>handleAddToCart(1)}/>
              </button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 h-96 bg-red-200 shadow-2xl">
          <figure><img src={rr} className='rr' alt="rr" /></figure>
          <div className="card-body">
            <h2 className="card-title">Rose Milk!</h2>
            <p>Get chilled with some Rose Milk!!</p>
            <div className="bu card-actions flex justify-end ">
              <button className='btn flex bg-red-500 hover:bg-red-500'>
                <img src={minus} alt='plus' className='minus cursor-pointer' onClick={()=>handleRemoveFromCart(2)}/>
                <p className='font-black'>{cartCounts[2]}</p>
                <img src={plus} alt='plus' className='plus cursor-pointer' onClick={()=>handleAddToCart(2)}/>
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className='ca flex justify-center items-center mt-10 gap-10 mb-20'>
        <div className="card card-compact w-96 h-96 bg-red-200 shadow-2xl">
          <figure><img className='cc' src={brownie} alt="cc"/></figure>
          <div className="card-body">
            <h2 className="card-title">Melting Brownie!</h2>
            <p>Get melted with yummie brownies!!!</p>
            <div className="bu card-actions flex justify-end ">
              <button className='btn flex bg-red-500 hover:bg-red-500'>
                <img src={minus} alt='plus' className='plus cursor-pointer' onClick={()=>handleRemoveFromCart(3)}/>
                <p className='font-black'>{cartCounts[3]}</p>
                <img src={plus} alt='plus' className='minus cursor-pointer' onClick={()=>handleAddToCart(3)}/>
              </button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 h-96 bg-red-200 shadow-2xl">
        <figure><img className='cake w-full' src={cake} alt="pp" /></figure>
          <div className="card-body">
            <h2 className="card-title">Vegan Cake!</h2>
            <p>Are you a vegan?Try out this delicious Vegan Cake!!</p>
            <div className="bu card-actions flex justify-end ">
              <button className='btn flex bg-red-500 hover:bg-red-500'>
                <img src={minus} alt='plus' className='minus cursor-pointer' onClick={()=>handleRemoveFromCart(4)}/>
                <p className='font-black'>{cartCounts[4]}</p>
                <img src={plus} alt='plus' className='plus cursor-pointer' onClick={()=>handleAddToCart(4)}/>
              </button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 h-96 bg-red-200 shadow-2xl">
        <figure><img src={rr} className='rr' alt="rr" /></figure>
          <div className="card-body">
            <h2 className="card-title">Rose Milk!</h2>
            <p>Get chilled with some Rose Milk!!</p>
            <div className="bu card-actions flex justify-end ">
              <button className='btn flex bg-red-500 hover:bg-red-500'>
                <img src={minus} alt='plus' className='minus cursor-pointer' onClick={()=>handleRemoveFromCart(5)}/>
                <p className='font-black'>{cartCounts[5]}</p>
                <img src={plus} alt='plus' className='plus cursor-pointer' onClick={()=>handleAddToCart(5)}/>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='te flex justify-center'>
        <div className='in bg-gray-200 rounded-2xl w-1/2 h-52 flex justify-center'>
          <form className='in flex justify-center gap-x-8 items-center'>
                <div>
                  <label for="first-name" class="block text-lg font-medium leading-6 text-gray-900">Name of user to receive this</label>
                    <div class="mt-4">
                      <input type="text" required onChange={(e)=>{setUser(e.target.value);}} name="first-name" id="first-name" autocomplete="given-name" class="block w-80 rounded-md border-2 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-black focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6" />
                    </div>
                </div>
                <div>
                  <label for="first-name" class="block text-lg font-medium leading-6 text-gray-900">Current Address</label>
                    <div class="mt-2">
                      <textarea type="text" required onChange={(e)=>{setAddress(e.target.value);}} class="block w-96 rounded-md border-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-black focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6" />
                    </div>
                </div>
          </form>
        </div>
      </div>
      <div className='flex justify-center mt-5 mb-10'>
        <button onClick={placeOrder} className='btn btn-success'>Place Order</button>
      </div>
    </div>
  )
}
