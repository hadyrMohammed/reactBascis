import { useState } from "react"

export default function Home(){
    let [counter , setCounter] = useState(0)
    function increase(param){
       setCounter(param + counter)
    }
    return (
      <>
      <div className="container py-5">
        <div className="card p-3">
          <h3 className="mb-3">if you solve a problem click the button </h3>
         <button className="btn btn-info" onClick={function(){increase(1)}}>
            another problem solved
         </button>
         <h4 className="mb-3">
            you solved {counter} problem
         </h4>

         <div className= {counter >= 10 ? 'alert alert-success d-block' : 'd-none'}>
            Congratulations ! 🎉 you reached the top today
         </div>
        </div>
      </div>
      </>
    )
}