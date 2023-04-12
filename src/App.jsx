import axios from 'axios'
import React, { useEffect,useState } from 'react'
import ShoppingCart from './components/ShoppingCart'


const App = () => {
  
  const [showData, setShowData] = useState([])

  useEffect(() => {
  

        try {

          const getData = async () => {
         
            const response = await axios.get('https://fakestoreapi.com/products')
       
            const data = await response.data
       
            setShowData(data);

            console.log(data);

                  
            }
            getData()
          
        } catch (error) {
           console.log(error);
        }

  }, [])
  
  return (
    <>
      {
        showData.length > 0 ? <ShoppingCart data={showData} /> : <h1 className='loading'>Loading....</h1> 
      }

    </>
  )
}

export default App