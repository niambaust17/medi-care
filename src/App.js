import { createContext, useState } from 'react';
import './App.css';
import
{
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Service from './components/Service/Service';
import ServiceDetail from './components/ServiceDetail/ServiceDetail';
import AboutUs from './components/AboutUs/AboutUs';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App()
{
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/services">
            <Service />
          </Route>
          <PrivateRoute exact path="/service/:id">
            <ServiceDetail />
          </PrivateRoute>
          <Route exact path="/about-us">
            <AboutUs />
          </Route>
          <Route exact path="/faq">
            <FAQ />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </UserContext.Provider>
  );
}

export default App;
