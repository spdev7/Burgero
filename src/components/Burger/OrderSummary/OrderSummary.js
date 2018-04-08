import React  from 'react';
import {Fragment} from 'react';

const OrderSummary = (props) => {
      const ingredientSummary = Object.keys(props.ingredients)
               .map(igKey => {
                 return (<li>
                 <span style={{textTransform: 'capitalize'}}>{igKey}</span>:{props.ingredients[igKey]}
                 </li>);
               });

   return (
     <Fragment>
           <h3>Your Order</h3>
           <p>delicious burger  the following ingredients</p>
          <ul>
              {ingredientSummary}
          </ul>
          <p>Continue to Checkout?</p>
     </Fragment>
   );
};

export default OrderSummary;
