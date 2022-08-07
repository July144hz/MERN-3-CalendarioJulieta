import React, { useEffect, useState } from 'react'
import '../styles/AddButton.css'
import AddTask from './AddTask'


function AddButton(props) {
 const [show, setShow] = useState(false)

 useEffect(() => {
   setShow(false)
 }, [])
 
 const toggleShow = ()=>{
  setShow(!show)
 }


  return (
    <>
    <div className='AddButton' onClick={toggleShow}>
        <img src="plus.svg"/>
    </div>
        {show ? <AddTask dia={props.day} show={toggleShow}></AddTask> : ""}
    </>
  )
}

export default AddButton