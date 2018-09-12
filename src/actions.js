
import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING, 
    REQUEST_ROBOTS_SUCCESS, 
    REQUEST_ROBOTS_FAILED 
} from './constants.js'; 

//setSearchField - action to filter the robots 
//return an object 
//type - constant 
//payload - sends data that user entered to reducer 
export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD, //constant is capitalized 
    payload: text
})

//
//requestRobots - aynch call to get list of robot users 
//needs dispatch method to make call that fetches the users and receives a response 
//success with payload of the users 
//failure with payload of the error 
//requestRobots is higher order function provides dispatch function to second order function...allowed by redux-Thunk 
export const requestRobots = () => (dispatch) => {
    dispatch({ type: REQUEST_ROBOTS_PENDING })
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data}))
        .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error}))
}
