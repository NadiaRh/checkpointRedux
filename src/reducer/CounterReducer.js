import { INCREMENT, DECREMENT } from '../actions/types'

let initState = {
    counter: 0,
    loading: true,
    isAuth: true

}
const CounterReducer = (state = initState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                counter: state.counter + action.payload
            }
        case DECREMENT:
            return {
                ...state,
                counter: state.counter - action.payload
            }
        default:
            return state
    }
}
export default CounterReducer;