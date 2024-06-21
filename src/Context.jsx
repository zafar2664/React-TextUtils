import { createContext, useReducer } from "react"


const initialState ={
     text:''
}

function textReducer(state,action){
    switch(action.type){
        case 'SET_TEXT':
            return {...state , text: action.payload};
        case 'CLEAR_TEXT':
            return {...state , text : ''};
        case 'TEXT_UPPERCASE':
            return {...state , text : state.text.toUpperCase()};
        case 'TEXT_LOWERCASE':
            return {...state , text : state.text.toLowerCase()};
        case 'REMOVE_SPACES':
            return {...state , text : state.text.split(" ").filter((text,index)=>{return text.length > 0}).join(" ").trim()};
        default :
          return state;
    }
}


export const textContext = createContext()

function Context({children}) {
 const [state,dispatch] = useReducer(textReducer,initialState);

  return (
    <>
     <textContext.Provider value={{state,dispatch}}>
      {children}
     </textContext.Provider>
    </>
  )
}

export default Context