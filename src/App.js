import { Redirect, Route, Switch } from 'react-router';
import ProductList from './components/productList';
import ProductDetail from './components/productDetail';
import Navbar from './components/Navbar/Navbar';
import NotFound from './components/not-found';
import MyCart from './components/carte';
import Modal from './components/modal'
import Footer from './components/footer/footer';
import Copyright from './components/footer/copyright';
import Home from './components/home/Home';
import About from './components/About';
import FavoritePicks from './components/home/FavoritePicks/favoritePicks';
import Login from './components/Authentication/login';
import SignUp from './components/Authentication/signUp';
import ForgotPassword from './components/Authentication/ForgotPassword';
import PrivateRoute from './components/Authentication/PrivateRoute';
import './App.css';

function App() {
  return (
      <div className="App">
         <Navbar />
         <Switch >
           <Redirect  exact from='/' to='/home' />
           <Route path='/home' component = {Home} />
           <Route path='/favorite-picks' component = {FavoritePicks} />
           <Route path='/productList' component = {ProductList} />
           <Route  path='/productDetail' component = {ProductDetail} />
           <PrivateRoute  path='/myCart' component = {MyCart} />
           <Route  path='/about' component = {About} />
           <Route  path='/login' component = {Login} />
           <Route  path='/signup' component = {SignUp} />
           <Route  path='/forgot-password' component = {ForgotPassword} />
           <Route  path='/not-found' component = {NotFound} />
           <Route component = {NotFound} />
         </Switch>
         <Modal />
         <Footer />
         <Copyright />
      </div>
  );
}

export default App;
