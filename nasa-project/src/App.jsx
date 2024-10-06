import { useEffect, useState } from 'react'
import Footer from './components/Footer'
import Main from './components/Main'
import Sidebar from './components/Sidebar'
function App() {
  const [showModal,setShowModal]=useState(false);
  const [data,setData] = useState(null);
  const [loading,setLoading] = useState(false);
 
  useEffect(()=>{
      async function fetchDataApi(){
        const api_Key=import.meta.env.VITE_NASA_API_KEY;
        const url="https://api.nasa.gov/planetary/apod?"+`api_key=${api_Key}`
      try{
        const response=await fetch(url);
        const apiData =await response.json();
        setData(apiData);
        setLoading(true);
        }
        catch(error)
        {
          console.log(error.message);
        }
      }
   fetchDataApi();   
  },[])
  function handleToggleModal(){
    setShowModal(!showModal);
  }
  return (
    <>
      {loading?<Main data={data}/>:<div className='loadingState'><i className="fa fa-spinner" aria-hidden="true"></i></div>}
      {showModal?<Sidebar data={data} handleToggleModal={handleToggleModal}/>:''}
      {loading?<Footer data={data} handleToggleModal={handleToggleModal}/>:''}
    </>
  )
}

export default App
