
import React from 'react'
import { useContext } from 'react';
import { textContext } from './Context';
function Preview() {
  const {state } = useContext(textContext);

  return (
    <>
     <div className="preview-container">
       <h4>Preview Document</h4>

       <div className="preview-area">
         <textarea name="" id="" disabled value={state.text}></textarea>
       </div>
     </div>
    </>
  )
}

export default Preview