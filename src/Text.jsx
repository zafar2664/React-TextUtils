
import Button from '@mui/material/Button';
import { useContext } from 'react';
import { textContext } from './Context';
function Text() {
    
  const { state , dispatch} = useContext(textContext);


  return (
    <>
      <div className="text-container">
         <h1>TextUtils - Word Counter, Character Counter, Remove Extra Space</h1>

         <p>Enter Your Text Here:</p>

          <div className="text-area">
          <textarea name="" id="" rows={7} value={state.text} onChange={(e)=>{dispatch({type:'SET_TEXT' , payload : e.target.value})}} ></textarea>
          </div>

          <div className="button-group">
          <Button variant="contained" onClick={()=>dispatch({type:'TEXT_UPPERCASE'})}>Convert UpperCase</Button>
          <Button variant="contained" onClick={()=>dispatch({type:'TEXT_LOWERCASE'})}>Convert LowerCase</Button>
          <Button variant="contained" style={{backgroundColor:"#E37781"}} onClick={()=>dispatch({type:'CLEAR_TEXT'})}>Clear Text</Button>
          <Button variant="contained" style={{backgroundColor:"#64AC8B"}} onClick={()=>navigator.clipboard.writeText(state.text)}>Copy to Clipboard</Button>
          <Button variant="contained" onClick={()=>dispatch({type:'REMOVE_SPACES'})}>Remove Extra Spaces</Button>
          </div>
      </div>
    </>
  )
}

export default Text