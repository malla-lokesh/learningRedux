const redux = require('redux');

const reducerFunction = (state = { counter: 0 }, action) => {
    if (action.type === 'incrementBy5') {
        return {
            counter: state.counter + 5
        }
    }
    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1
        }
    }
}

const centralState = redux.createStore(reducerFunction);

centralState.subscribe(() => {
    const latestState = centralState.getState();
    console.log(latestState);
})

centralState.dispatch({ type: 'incrementBy5' })

centralState.dispatch({ type: 'decrement' })