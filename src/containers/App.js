import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
//import actions 
import { setSearchField, requestRobots } from '../actions'; 
// import ErrorBoundry from '../components/ErrorBoundry'


//tell me what state i need to listen to and send on as props 
const mapStateToProps = state => {
    return {
        //searchField from initialState in reducers.js
        //searchField we return will be used as props by App component 
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

//tell me what props i should listen to that are actions that need to get dispatched 
//used to send actions
const mapDispatchToProps = (dispatch) => {
    return {
        //event - received from user 
        //make reducers aware of object setSearchField with the text value
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}


//STATE = object that describes your application; able to change the value 
//PROPS = things that come out of state 
//parent tells what the state is and child receives the props 

//LIFE CYCLE HOOKS ...get run everytime a component does something; include in class component no need to call 
//smart component because it has state; smart components tend to have class syntax 
//mounting = index.html in public file is replaced by App component as root 
    //first checks for constructor, componentWillMount, render(), componentDidMount 
//updating = whenever a component changes; run render again 
//unmounting = when a component is removed from a page p

class App extends Component {
    
    //use Redux-Thunk to handle asynchronous calls 
    componentDidMount() {
        this.props.onRequestRobots(); 
    }

    render() {
       
        const { searchField, onSearchChange, robots, isPending} = this.props; 
        console.log(robots);
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })

        return (
            <div className='tc'>
              <h1 className='f1'>RoboFriends</h1>
              <SearchBox searchChange={onSearchChange}/>
              <Scroll>
                { isPending ? <h1>Loading</h1> :
                    <CardList robots={filteredRobots} />
                }
              </Scroll>
            </div>
        );

    }
    
}

//App will now subscribe to any state changes in the redux store 
//connect is a higher order function...a function that returns another function which will run with the App 
//mapStateToProps - what state should I listen to? 
//mapDispatchToProps - what action should I listen to? 
//props will be given to App
export default connect(mapStateToProps, mapDispatchToProps)(App); 