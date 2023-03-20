import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';


function Productdetails() {
    const { Datas } = useSelector((state) => state);
    const { id } = useParams();
    const [productdetails, setProductdetails] = useState({});
    useEffect(() => {
        setProductdetails(
            Datas.find((ele) => {
                return ele.id === +id;
            })
        );
    }, []);

    console.log(productdetails, "hello")
    return (
        <>
            {productdetails && (
                <div  style={{width:'100%',height:'90vh',display:'flex',alignItems:'center',justifyContent:'center' }}>
                    <div style={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',width:'80%',height:'70%'}} >
                        <div style={{background:'green',height:'20%',display:'flex',alignItems:'center',width:'100%',justifyContent:'center'}}>

                            <h2>{productdetails.category} Category</h2>
                        </div>
                        <div  style={{display:'flex',gap:'20px'}}>
                            <div  style={{padding:'20px'}}>
                                <img src={productdetails.image} alt="" height='300'/>

                            </div>
                            <div style={{padding:'20px'}}>
                                <div >
                                    <h3>Product Name</h3>
                                    <p>{productdetails.title}</p>
                                </div>
                                <div >
                                    <h3>Product Price</h3>
                                    <p>${productdetails.price}</p>
                                </div>
                                <div >
                                    <h3>Product Description</h3>
                                    <p>{productdetails.description}</p>
                                </div>
                                <div >
                                    <h3>Product Rating</h3>
                                    <p>{productdetails.rating && productdetails.rating.rate}</p>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            )}
        </>
    )
}

export default Productdetails