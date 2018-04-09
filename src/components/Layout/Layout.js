import React,{Fragment } from 'react';
//instead of creating aux I am using Fragment
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
const layout = ( props) => (
    <Fragment>
    <Toolbar />
     <main className={classes.content}>
         {props.children}
    </main>
    </Fragment>
);

export default layout;
