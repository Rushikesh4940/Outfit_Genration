
import './App.css';
import React,{useEffect,useState} from 'react'
import axios from 'axios'
import New from './New'
import Header from './Header'



function App() {
  const [users,setUsers]=useState([])
  const [select,setSelect]=useState([])


  useEffect(()=>{
    axios.get('http://localhost:3001/getUsers')
    .then(users=>{
      setUsers(users.data)
      console.log(users.data)
    })
    .catch(err=>console.log(err))
 },[])

 useEffect(()=>{
  let max=users.length;
  let min =3;
  //change
  let val=Math.floor(Math.random() * (max - min) ) + min;
  setSelect([...users.slice(val,val+min+1)])
  console.log(select)

 },[users])



 


if(select.length===0){return (
<div>
  <Header />
  
  
</div>)
}


  return (
    <>
    <Header />
    
    <New  select={users.slice(0,9)} mainid={"Topdeals"}/>
    <New  select={users.slice(9,31)} mainid={"Shirts"}/>
    <New  select={users.slice(31,51)} mainid={"Pants"}/>
    </>

    
  );
}

export default App;
