import React from 'react';
import { Route, Switch} from 'react-router-dom';

import HomePage from '../pages/HomePage';
import WheelsPage from '../pages/WheelsPage';
import GalleryPage from '../pages/GalleryPage';
import AboutUsPage from '../pages/AboutUsPage';
import SignInPage from '../pages/SignInPage';
import SignUpPage from '../pages/SignUpPage';

import '../css/page.css';


const Page = () => {
    return(
        <>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/wheels" exact component={WheelsPage} />
                <Route path="/gallery" exact component={GalleryPage} />
                <Route path="/about" exact component={AboutUsPage} />
                <Route path="/signup" exact component={SignUpPage} />
                <Route path="/signin" exact component={SignInPage} />
            </Switch>
        </>
    );
}

export default Page;