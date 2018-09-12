import React from 'react';
import ReactDOM from 'react-dom'; //React used for websites 
import { Provider, connect } from 'react-redux'; 
import { createStore, applyMiddleware, combineReducers } from 'redux'; 
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk'; 
import './index.css'; //React allows us to add css for multiple components 
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker'; 
import { searchRobots, requestRobots } from './reducers';
import 'tachyons';

//middleware 
const logger = createLogger(); 

//combines all reducers into rootReducer 
const rootReducer = combineReducers({requestRobots, searchRobots}); 

//object that describes state of our App 
//searchRobots: param is main reducer of our App
//eventually, combine all reducers to create one rootReducer...for now use the one reducer we do have called searchRobots
//store can now be accessed and passed down through App
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
        //Provider component passes down the store to all of the components in the App 
        <Provider store = {store}>
                 <App />
        </Provider>, 
        document.getElementById('root'));
registerServiceWorker();
