import React, { useEffect, useState, useRef } from 'react'
import Seek from "../assets/seek.jpg"

function Modal() {
  const [showModal, setShowModal] = useState(true)
  const divRef = useRef(null);

  const closeModal = (e) => {
    setShowModal(false);
  }

  const handleClickOutSide =(e)=>{
    if(divRef.current && !divRef.current.contains(e.target)){
      setShowModal(false);
    }
  }

  useEffect(()=>{
    document.addEventListener("click",handleClickOutSide )


    return()=>{
      document.removeEventListener("click", handleClickOutSide)
    }
  },[])

  if (showModal){
  return (
    <>
    <div ref={divRef} className='news-modal-overlay fixed top-28 left-20 right-0 bottom-10
     w-5/6 mx-auto rounded-xl bg-gray-900/80 '>
      <div className="news-modal-body flex flex-col gap-4 m-4">
        <h1 className='text-4xl font-bold mx-auto'>Breaking News!</h1>
        
        <p className='text-xl text-center'>
        Hello, I am actively looking for my first 
        job after having validated my web-developer/web-integrator diploma in July, specialized in front-end
        </p>
        <img src={Seek} alt="seek.jpg" width={600} height={400}
        className='mx-auto'  />
        <button
        onClick={closeModal} 
        className='text-2xl bg-red-500 p-2 w-2/5 mx-auto rounded-xlS'>
          Close
        </button>
     </div>
    </div>

    </>
  )
 }else{
  return ""
 }
}

export default Modal