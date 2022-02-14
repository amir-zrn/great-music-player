import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import RedirectPage from '../pages/RedirectPage';
import Dashboard from '../pages/Dashboard';
import Search from '../pages/Search';
import Library from '../pages/Library';
import NotFoundPage from '../pages/NotFoundPage';
import Layout from '../components/Layout';

const AppRouter = (props) => {
  return (
    <BrowserRouter>
    <Route render={(props)=>(
    //Layout and sidebar can now receive props
        <Layout {...props}>
            <Switch>
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/home" component={Home}/>
                <Route path="/redirect" component={RedirectPage}/>
                <Route path="/search" component={Search}/>
                <Route path="/library" component={Library}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </Layout>
    )}/>
</BrowserRouter>
    );
}
export default AppRouter;