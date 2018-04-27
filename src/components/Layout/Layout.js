import React,{Fragment,Component } from 'react';
//instead of creating aux I am using Fragment
import classes from './Layout.css';
import Toolbar from '../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../components/Navigation/SideDrawer/SideDrawer';
class Layout extends Component {
  state = {
    showSideDrawer: true
  }
  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer:false});
  }

sideDrawerToggleHandler = () => {
  this.setState((prevState)=> {
    return {showSideDrawer:!prevState.showSideDrawer};
  });
}
  render() {
    return(
    <Fragment>
    <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
    <SideDrawer
      open={this.state.showSideDrawer}
      closed={this.sideDrawerClosedHandler}/>
     <main className={classes.content}>
         {this.props.children}
    </main>
    </Fragment>
  )
  }
}


export default Layout;
