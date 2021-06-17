import React, { useState } from 'react'

export default function App() {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [phone,setPhone]=useState('')
  const [imageUrl,setImageUrl]=useState('')
  const [data,setData]=useState({
    name,
    email,
    phone,
    imageUrl
  })
  const [array,setArray]=useState([{}])
  const handleSubmit=()=>{
    // setImageUrl(imageUrl);
    // setName(name);
    // setPhone(phone);
    // setEmail(email);
    // {name:name},{email:email},{phone:phone},{imageUrl:imageUrl}
    setData({name,email,phone,imageUrl})
    setArray({...data})
    console.log(array)
  }
  const handleName=(e)=>{
    setName(e.target.value)
  }
  const handleEmail=(e)=>{
    setEmail(e.target.value)
  }
  const handlePhone=(e)=>{
    setPhone(e.target.value)
  }
  const handleimageUrl=(e)=>{
    setImageUrl(e.target.value)
  }
  return (
    <div>
      <div style={{display:'flex',width:'100%',height:'100%',flexDirection:'column'}}>
        <input 
        placeholder="Name"
        value={name}
        onChange={handleName}
        />
        <input 
        placeholder="Email Id"
        value={email}
        onChange={handleEmail}
        />

        <input 
        placeholder="Phone No."
        value={phone}
        onChange={handlePhone}
        />
        <input 
        placeholder="Image Url"
        value={imageUrl}
        onChange={handleimageUrl}
        />
        <button style={{backgroundColor:'skyblue',fontSize:'20px',margin:'20px',letterSpacing:'2px',color:'white'}} onClick={handleSubmit}>Submit</button>
      </div>
      <div style={{display:'flex',width:'100%'}}>
        <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Email ID</td>
          <td>Phone No.</td>
          <td>Image</td>
        </tr>
      </thead>
      <tbody>
      <td>{data.name}</td>
        <td>{data.email}</td>
        <td>{data.phone}</td>
        <td>{data.imageUrl}</td>
      </tbody>  
      </table>
      </div>
    </div>
  )
}
