import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import AddEmployeeComponent from './components/AddEmployeeComponent';
// import hcbgImage from 'https://thumbs.dreamstime.com/b/blog-information-website-concept-workplace-background-text-top-view-above-139560679.jpg'
function App() {
  return (
    <div >
      <Router>
        <HeaderComponent />
        <div >
          <Switch>
              <Route exact path = "/" component = {ListEmployeeComponent}></Route>
              <Route path = "/employees" component = {ListEmployeeComponent}></Route>
              <Route path = "/add-employee" component = {AddEmployeeComponent} ></Route>
              <Route path = "/edit-employee/:id" component = {AddEmployeeComponent}></Route>
            </Switch>
        </div>
       
        </Router>
    </div>
  );
}

export default App;
