import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING, 
    REQUEST_ROBOTS_SUCCESS, 
    REQUEST_ROBOTS_FAILED 
} from './constants.js'; 

//initial object in the redux store 
const initialStateSearch  = { 
    searchField: ''
}


//reducer is a pure function 
//state - state of our application; initialState is default param 
//action - what action just happened; {} is empty object default param 
//if the reducer cares about the action it receives, it will act upon the state 
export const searchRobots = (state = initialStateSearch, action = {}) => {
    switch(action.type) {
        //create a new object if the action.type is CHANGE_SEARCH_FIELD otherwise return same state 
        case CHANGE_SEARCH_FIELD: 
        //returning a new state with updated searchField property
            return Object.assign({}, state, { searchField: action.payload });  
        default: 
            return state; 
    }
}

const initialStateRobots = {
    isPending: true,
    robots: [],
    error: ''
}

export const requestRobots = (state = initialStateRobots, action ={}) => {
    switch(action.type) {
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({}, state, {isPending: true})
        case REQUEST_ROBOTS_SUCCESS: 
            return Object.assign({}, state, {robots: action.payload, isPending: false})
        case REQUEST_ROBOTS_FAILED: 
            return Object.assign({}, state, {error: action.payload})
        default: 
            return state
    }
}