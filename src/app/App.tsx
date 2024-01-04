import React from 'react';
import {Link} from "react-router-dom";
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/helpers/classNames/classNames";

import './styles/index.scss';
import {AppRouter} from "app/providers/router";


export const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (

        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Theme</button>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About</Link>
            <AppRouter/>
        </div>

    );
};

