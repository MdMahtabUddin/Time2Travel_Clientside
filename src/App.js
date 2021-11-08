import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import NotFound from './components/NotFound/NotFound';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Header from './components/Header/Header';
import AddPackage from './components/AddPackage/AddPackage';
import Login from './components/Login/Login/Login';
import PackageDetail from './components/PackageDetail/PackageDetail';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import AuthProvider from './contexts/AuthProvider';
import AllBooking from './components/Booking/AllBooking/AllBooking';
import MyBooking from './components/Booking/MyBooking/MyBooking';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <ScrollToTop>
            <Header></Header>
            <Switch>

              <Route exact path="/">
                <Home></Home>
              </Route>

              <Route path="/home">
                <Home></Home>
              </Route>

              <PrivateRoute path="/packages/:packageId">
                <PackageDetail></PackageDetail>
              </PrivateRoute>

              <PrivateRoute path="/addPackage">
                <AddPackage></AddPackage>
              </PrivateRoute>

              <PrivateRoute path="/myBooking">
                <MyBooking></MyBooking>
              </PrivateRoute>

              <PrivateRoute path="/allBooking">
                <AllBooking></AllBooking>
              </PrivateRoute>

              <Route path="/login">
                <Login></Login>
              </Route>

              <Route path="*">
                <NotFound></NotFound>
              </Route>

            </Switch>

            <Footer></Footer>
          </ScrollToTop>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
