import React,{Fragment } from 'react';
//instead of creating aux I am using Fragment
import classes from './Layout.css';
const layout = ( props) => (
    <Fragment>
    <div>Toolbar , SideDrawer , Backdrop</div>
     <main className={classes.Content}>
         {props.children}
    </main>
    </Fragment>
);

export default layout;
