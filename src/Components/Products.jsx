import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
function Products() {
  
  const [product, setproduct] = useState([])
  const [catg, setcatg] = useState("electronics")
  const [lists, setlists] = useState([])
  async function fetchs() {
    const response = await fetch("https://fakestoreapi.com/products/categories")
    const data = await response.json()
    setproduct(data)

  }
  async function catfetch() {
    const response = await fetch(`https://fakestoreapi.com/products/category/${catg}`)
    const data = await response.json()
    console.log(data)
    setlists(data)

  }
  useEffect(() => {
    fetchs()
    catfetch()
  }, [catg])



  return (
    <div style={{display:"flex",height:'80vh',width:'80%',alignItems:'center',justifyContent:'center',padding:'50px'}} >
      <div className="sidebar" style={{background:'black',width:'20%',display:'flex',alignItems:'center',justifyContent:"space-evenly",flexDirection:'column',height:'100%',fontSize:'1.5rem'}}>
        {
          product.map((e) => {
            return <div className='buttonlink'>
              <Link to={e} onClick={() => {
                setcatg(e)
              }} >{e && e}</Link>
            </div>
          })
        }
      </div>
      <div className='product' style={{width:'80%',display:'flex',justifyContent:'center',padding:'80px',height:'100%'}} >
            <ul>
            {lists.map((ele)=>{
              return <Link to={`/productdetails/${ele.id}`}><li style={{color:'black'}} >{ele && ele.title}</li></Link> 
            })}
            </ul>

        
        </div>
    </div>
  )
}

export default Products