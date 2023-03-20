import React, { useEffect, useState } from 'react'
import './user.css'

function Users() {
    const [Data, setData] = useState([])
    const [gender, setgender] = useState("all")
    useEffect(() => {
        fetc()
    }, [gender])

    async function fetc() {
        const response = await fetch("https://randomuser.me/api/?results=20")
        const data = await response.json()
        // setData(data)
        console.log(gender, 'kkkkk');
        gender == 'male' || gender == "female" ? setData(data.results.filter((e) => e.gender === gender)) : setData(data.results)
    }


    function change(ele) {
        console.log(ele.target.value);
        setgender(ele.target.value)
    }
    console.log(Data);
    return (
        <div>
            <h1 style={{padding:'20px 5%'}}>User Details</h1>
            <p style={{padding:'10px 5%'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam quo ipsam, iure harum quibusdam enim qui veritatis fugit voluptate voluptatibus optio totam quasi nostrum quod voluptatum corporis similique? Iusto vero, consequuntur ut blanditiis laboriosam earum cumque itaque, nihil maxime molestias illum atque hic. Officia facere at, architecto cum illum autem ea totam sunt molestias laboriosam fugiat repudiandae enim minus dolor doloremque facilis, excepturi numquam, placeat corrupti. Laborum sunt in omnis, aut modi ex neque nulla sint natus commodi aspernatur obcaecati perspiciatis necessitatibus totam repudiandae consequatur id iusto. Sed assumenda officia earum necessitatibus, reprehenderit architecto pariatur quam, exercitationem cum dolorum maiores.</p>
            <div>
                <div className="inp" onChange={(ele) => change(ele)} style={{ paddingLeft: '5%', display: "flex", gap: '20px' }} >
                    <label style={{ display: "flex", gap: '5px' }}>
                        <input type="radio" name="gender" id="" value='all' defaultChecked />
                        All
                    </label>
                    <label style={{ display: "flex", gap: '5px' }}>
                        <input type="radio" name="gender" id="" value='male' />Male
                    </label>
                    <label style={{ display: "flex", gap: '5px' }}>
                        <input type="radio" name="gender" id="" value='female' />Female
                    </label>
                </div>
                {/* <div className="bots" style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <div className="head" style={{ width: '90%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 30px', background: 'black', color: 'white' }}>
                        <p>Image</p>
                        <p>Name</p>
                        <p>Email</p>
                        <p>Gender</p>
                    </div>

                    <div className="div" style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',gap:'20px'}}>
                        {
                            Data.map((ele) => {
                                return (<div className='box'  style={{ display: 'flex',alignItems:'center',justifyContent:'space-between',width:'90%',padding:'10px',boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
                                    <img src={ele.picture.large} alt="" />
                                    <div className="name" style={{ display: 'flex', gap: '10px' }}>

                                        <p>{ele.name.title}</p>
                                        <p>{ele.name.first}</p>
                                        <p>{ele.name.last}</p>
                                    </div>
                                    <p>{ele.email}</p>
                                    <p>{ele.gender}</p>
                                </div>)


                            })
                        }

                    </div>
                </div> */}
                <div className='tab'>
                <table className='table'>
                    <tr >
                        <th>
                            Image
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Email
                        </th>
                        <th>
                            Gender
                        </th>
                    </tr>
                    {Data.map((ele) => {
                        return(
                        <tr>
                            <td>
                                <img src={ele.picture.large} alt="" />
                            </td>
                            <td>
                                <div className="name">

                                    <p>{ele.name.title}</p>
                                    <p>{ele.name.first}</p>
                                    <p>{ele.name.last}</p>
                                </div>
                            </td>
                            <td>
                            {ele.email}
                            </td>
                            <td>
                            {ele.gender}
                            </td>
                        </tr>)
                    })}

                </table>
                </div>
            </div>
        </div>
    )
}

export default Users