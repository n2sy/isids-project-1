


import React, { useEffect, useReducer } from 'react'

function ExpReducer() {

    // const initialState = {
    //     count: 0
    // }

    // function reducer(state, action) // nom de la fonction aléatoire
    // {
    //     switch (action.type) {
    //         case 'increment': return { count: ++state.count }
    //         case 'decrement': return { count: --state.count }
    //     }
    // }

    // const [state, dispatch] = useReducer(reducer, initialState)

    // return (
    //     <div>
    //         <h3> {state.count} </h3>
    //         <button onClick={() => { dispatch({ type: 'increment' }) }}>+</button>
    //         <button onClick={() => { dispatch({ type: 'decrement' }) }}>-</button>
    //     </div>
    // )

    const initialState = {
        count: 0,
        isRunning: false
    }

    function reducer(state, action) {
        switch (action.safa) {
            case 'start': return { isRunning: true, count: state.count };
            case 'stop': return { ...state, isRunning: false };
            case 'reset': return { isRunning: false, count: 0 };
            case 'step': return { ...state, count: ++state.count };
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);
    var timeId;
    useEffect(() => {
        console.log("IsRunning", state.isRunning);
        if (state.isRunning) {

            timeId = setInterval(() => {
                dispatch({ safa: 'step' })
            }, 1000);
            console.log('TimeId', timeId);
        }

        return () => {
            console.log('TimeId', timeId);
            clearInterval(timeId);
        }

    }, [state.isRunning])



    return (
        <div>
            <h3> {state.count} </h3>
            <button onClick={() => { dispatch({ safa: 'start' }) }} className='btn btn-primary'>start</button>
            <button onClick={() => { dispatch({ safa: 'stop' }) }} className='btn btn-success'>stop</button>
            <button onClick={() => { dispatch({ safa: 'reset' }) }} className='btn btn-danger'>reset</button>
        </div>
    )


}

export default ExpReducer