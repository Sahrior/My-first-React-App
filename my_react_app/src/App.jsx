import React from 'react'

const App = () => {


  let marks = 75;
  const city = ['dhaka','london','delhi','kolkata']

  return (
    <>


      {/* JSX basic */}


      <h5 style={
        {color:'red'}
      } >Hello Afifa</h5>
      <h5>Hello Sahrior</h5>
      <h5>{2+2}</h5>

      <div>
        <button onClick={()=>alert('Hello')} >Submiit</button>
      </div>


      {/* if else */}

      <div>
        {
          marks>80?
          <h5>Good</h5>:
          <h5>Average</h5>
        }
      </div>

      {/* immediately invoked function */}

      <div>

        {(()=>{

          if(marks>80 && marks<100){
            return "Got between 80 - 100"
          }else{
            return "below 80"
          }

          })()}


      </div>


      {/* Loops */}

      <div>

          <ul>
            {
              city.map((item,i)=>{
                return  ( <li key={i.toString()} >{item}</li> )
              })
            }
          </ul>

      </div>



      
    </>
  )
}

export default App
