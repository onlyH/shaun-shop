import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Home from './page/home'
import Layout from './component/layout'
import Login from "./page/login";

class App extends React.Component{
  render() {
    return (
        <Router>
          <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/" render={props=>(
                <Layout>
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route  path="/product" component={Home} />
                    <Route  path="/product-category" component={Home} />
                    <Redirect from="*" to="/" />
                  </Switch>
                </Layout>
            )}/>
          </Switch>

        </Router>
    );
  }
}

export default App;
