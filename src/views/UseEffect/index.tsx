import React, { useState, useEffect } from 'react'

let count: number = 0

const User: React.FC = props => {
  const [name, setName] = useState<string>('pingm')

  useEffect(() => {
    count += 1
  }, [name])

  useEffect(() => {
    const handler = (e: any): void => {
      console.log(e)
    }
    window.addEventListener('click', handler, true)
    return () => {
      window.removeEventListener('click', handler, true)
    }
  }, [])

  return (
    <div>
      <p>Name: {name}</p>
      <p>Count: {count}</p>
      <button onClick={() => setName('Jack')}>Jack</button>
      <button onClick={() => setName('Tom')}>Tom</button>
    </div>
  )
}

const Result: React.FC = () => {
  return (
    <>
      <User />
    </>
  )
}

export default Result
