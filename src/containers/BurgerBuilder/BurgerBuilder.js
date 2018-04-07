import React, { Component,Fragment } from 'react';

import Burger from '../../components/Burger/Burger';
class BurgerBuilder extends Component {
  //  constructor(props){
    //  super(props);
    //  this.state = {...}
  //  }
    state = {
        ingredients : {
          salad: 1,
          bacon: 1,
          Cheese: 2,
          meat: 2
        }
    }
    render() {
       return (
         <Fragment>
               <Burger ingredients={this.state.ingredients}/>
               <div>Build Controls</div>
         </Fragment>
       );
     }
}

export default BurgerBuilder;
