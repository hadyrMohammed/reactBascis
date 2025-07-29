import React from 'react'

export default function Child(props) {
  return (
    <>
      <h1 className='text-warning mt-5'>
        welcome, {props.data}
      </h1>
    </>
  )
}
