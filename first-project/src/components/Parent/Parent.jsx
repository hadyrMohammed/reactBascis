//rfc
import React, { useState } from 'react'
import Child from '../Child/Child'

export default function Parent() {
  let [user, setUser ] = useState("Hadeer")
  return (
    <>
      <div className='text-center bg-light py-5 '>
        <h1 className='text-primary'>welcome to my websit</h1>
        <Child data = {user} />
      </div>
    </>
  )
}
