const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

function App() {
    const [counter, setCounters] = React.useState([{id: 1, number: 0}])
    let total = counter.reduce((a, el) => a + el.number, 0)
    console.log(total)
    
    const hdlAddCounter = () => setCounters([...counter, {
        id: counter.length === 0 ? l : counter.at(-1).id +1 , 
        number: 0}
    ])

    // const hdlUpdate = (id, num) => {
    //     const cloneCounters = [...counter]
    //     let idx = cloneCounters.findIndex(el => el.id === id)
    //     if(cloneCounters[idx].number + num < 0) {
    //         return
    //     }
    //     cloneCounters[idx].number += num
    //     setCounters(cloneCounters)
    // }

    const hdlUpdate = (id, num) => {
        const newState = counter.map(el => {
            return {...el, number: (el.id === id && el.number + num >= 0) ? el.number + num : el.number}
        })
        setCounters(newState)
    }
        // console.log(newItem)
        // let cloneCounter = [...counter]
        // cloneCounter.push(newItem)
        // console.log(cloneCounter)
        // setCounters(cloneCounter)

        // ...ย่อ...
        //setCounters([...counter, newItem])
    const hdlDelCounter = (id) => {
        const cloneCounters = [...counter]
        let idx = cloneCounters.findIndex(el => el.id === id)
        cloneCounters.splice(idx, 1)
        setCounters(cloneCounters)
    }
        // ให้ทำ hdlDelCounter ผลลัพธ์เดียวกัน : ไม่เกิน 2 บรรทัด
    // const hdlDelCounter = (id) => {
    //    let newState = counters.filter(el => el.id !== id)
    //    setCounters(newState)
    //}
    return (
        <>
            <h1 className="text-center">Codecamp Academy 01</h1>
            <button className="text-center" onClick={hdlAddCounter}>Add Counter</button>
            <SumInfo total = {total}/>
            {/* {counter.map( el => {
                let output = <Counter key = {el.id} item = {el} />
                return output
            })} */}
            {counter.map( el => <Counter key = {el.id} item = {el} hdlUpdate = {hdlUpdate} hdlDelCounter = {hdlDelCounter}/> )}
        </>
    );
}

function SumInfo(props) {
    return (
        <div className="suminfo">
            <h1>Sum = {props.total}</h1>
        </div>
    );
}

function Counter(props) {
    return (
        <div className="counter">
            <button onClick = {()=> props.hdlUpdate(props.item.id, -1)}>-</button>
            <h3>{props.item.number}</h3>
            <button onClick = {()=> props.hdlUpdate(props.item.id, 1)}>+</button>
            <button onClick = {()=> props.hdlUpdate(props.item.id, -props.item.number)}>C</button>
            <button onClick={()=> props.hdlDelCounter(props.item.id)}>X</button>
        </div>
    );
}