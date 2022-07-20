import React from 'react';
import Navbar from './NavbarAndHeader/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './HomePage'
import About from '../About/AboutUs';
import Gym from '../Gym/Gym';
import Lessons from '../Lessons/Lessons';
import { MainCompDiv } from '../../Elements/Main/NavbarAndHeaderElements';
import ArticlePage from '../Articles/ArticlePage';
import Footer from './Footer/Footer';
import Facilities from '../CenterFacilities/Facilities';
import Schedule from '../Lessons/Schedule/Schedule';
import ArticlesPage from '../Articles/ArticlesCards';
import Staff from '../Our Staff/Staff';
import PictureAndTextMod from '../SiteModification/Bars/WorkerCard';
import Login from '../userAcces/Login/LoginPage'
import Register from '../userAcces/Register/Register'
import { useEffect } from 'react';
import {logout} from '../../features/userAccess';




const Index = () => {

  useEffect(()=>{

  },[])

    return (
        <MainCompDiv >
          <Router>
            <Navbar />
            <Switch >
              <Route path='/' exact component={Home} />
              <Route path='/about_us' component={About} />
              <Route path='/staff' component={Staff} />
              <Route path='/schedule' component={Schedule} />
              <Route path='/gym' component={Gym} />
              <Route path='/articles' component={ArticlesPage} />
              <Route path='/articlepage' component={ArticlePage} />
              <Route path='/facilities' component={Facilities} />
              <Route path='/lessons' component={Lessons} />
              <Route path='/serverCheck' component={PictureAndTextMod} />
              <Route path='/login' component={Login} />
              <Route path='/register' component={Register}/>
            </Switch>
            <Footer/>
          </Router>
        </MainCompDiv>
    );
};

export default Index;