import React from 'react';
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/helpers/classNames/classNames";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";


import './styles/index.scss';
import {Sidebar} from "widgets/Sidebar";

export const App = () => {
    const {theme} = useTheme()

    return (

        <div className={classNames('app', {}, [theme])}>
            <Navbar/>
            <div className="content-page">
                <Sidebar/>
                <AppRouter/>
            </div>

        </div>

    );
};

