import React from 'react';
import { Route, Switch} from 'react-router-dom';

import HomePage from '../pages/HomePage';
import WheelsPage from '../pages/WheelsPage';
import GalleryPage from '../pages/GalleryPage';
import AboutUsPage from '../pages/AboutUsPage';
import SignInPage from '../pages/SignInPage';
import SignUpPage from '../pages/SignUpPage';


const Page = () => {
    return(
        <>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/wheels" exact component={WheelsPage} />
                <Route path="/gallery" exact component={GalleryPage} />
                <Route path="/about" exact component={AboutUsPage} />
                <Route path="/signin" exact component={SignInPage} />
                <Route path="/signup" exact component={SignUpPage} />
            </Switch>
        </>
    );
}

export default Page;