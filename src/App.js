import React ,{useState} from 'react'
import "./App.css"

const App = () => {

  const [result , setresult]  = useState("");


  // button click display
  const clickhandler =(event)=>{
    setresult(result.concat(event.target.value))
  }

  // display clear
  const cleardisp=()=>{
    setresult(" ");
  }

  //calculata

  const calcul=()=>{
    setresult(eval(result).toString());
  }

    return (
      <>
      <h1 className='handing'> Abhishek Calculator </h1>
    <div className='calc'>
      <input  type={Text} placeholder="0" id="ans" value={result}/>
      <input type={'button'} value="9" className='button' onClick={clickhandler}/>
      <input type={'button'} value="8" className='button'onClick={clickhandler}/>
      <input type={'button'} value="7" className='button'onClick={clickhandler}/>
      <input type={'button'} value="6"className='button'onClick={clickhandler}/>
      <input type={'button'} value="5"className='button'onClick={clickhandler}/>
      <input type={'button'} value="4"className='button'onClick={clickhandler}/>
      <input type={'button'} value="3"className='button'onClick={clickhandler}/>
      <input type={'button'} value="2"className='button'onClick={clickhandler}/>
      <input type={'button'} value="1"className='button'onClick={clickhandler}/>
      <input type={'button'} value="0"className='button'onClick={clickhandler}/>

      <input type={'button'} value="*"className='button'onClick={clickhandler}/>
      <input type={'button'} value="-"className='button'onClick={clickhandler}/>
      <input type={'button'} value="+"className='button'onClick={clickhandler}/>
      <input type={'button'} value="/"className='button'onClick={clickhandler}/>
      <input type={'button'} value="."className='button'onClick={clickhandler}/>
      <input type={'button'} value="C"className='button' onClick={cleardisp}/>
      <input type={'button'} value="="className='button1' onClick={calcul}/>


    </div>
    </>
  )
}

export default App
