import React, {useEffect, useState} from "react";

function App() {
  const [count, setCount] = useState(0)
  const [input, setInput] = useState('')
  const [user, setUser] = useState({name: 'andy', age: 20})
  // Run After Every Render
  // useEffect(()=>{
  //   console.log('useEffect1 run...')
  // }, [])

  // Run only first time
  // useEffect(()=>{
  //   console.log('useEffect2 run...')
  // }, [count])

  // useEffect(()=>{
  //   console.log('useEffect3 run...')
  // }, [input])

  // useEffect(()=>{
  //   console.log('useEffect4 run...')
  // }, [input, count])
  
  useEffect(()=>{
    console.log('useEffect5 run...name change')
  }, [user.name])

  useEffect(()=>{
    console.log('userEffect6 run...age + 1')
  }, [user.age])

  console.log('App run')
  return (
    <>
      {console.log('in JSX')}
      <h1>Hello React, Codecamp Academy 01</h1>
      <input type="text" value={input} onChange={e=>{setInput(e.target.value)}} />
      <button onClick={()=>setCount(count+1)}>Count : {count}</button>
      <button onClick={()=>setUser(prv => ({...prv, name: 'bobby'}))}>Name : {user.name}</button>
      <button onClick={()=>setUser(prv => ({...prv, age: prv.age+1}))}>Age : {user.age}</button>
    </>
  )
};

export default App;
