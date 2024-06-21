import { useContext } from 'react';
import { textContext } from './Context';

function Summary() {
  const { state } = useContext(textContext);

  const wordCount = state.text.split(" ").filter( word => word.length > 0).length;
  const readingTime = (wordCount / 200).toFixed(2);
 
  return (
  <>
   <div className="summary-container">
     <h3>Summery Of Your Text</h3>
     <p>Number of words : {wordCount}</p>
     <p>Number of Character :{state.text.length}</p>
     <p>Reading Time : {readingTime} minutes</p>
   </div>
  </>
  )
}

export default Summary