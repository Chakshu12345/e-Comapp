import * as actions from './../actions/index';

const initialState = {
    userdata: {},
}



const reducer=(state=initialState,action)=>{


    switch(action.type){
        case 'GET_PRODUCTS':
            return {...state};
        case 'GET_PRODUCTS_SUCCESS':
            // console.log(`In Success of Get Action with result  =${JSON.stringify(action.Products)}`);
               return {...state, products:action.Products}; 
        
        case 'SEARCH_PRODUCTS':
                return {...state};
        case 'SEARCH_PRODUCTS_SUCCESS':
                 console.log(`In Success of Get Action with result  =${JSON.stringify(action.Products)}`);
                   return {...state, serachPrd:action.SearchData};

        case 'AddCART_PRD':
            if(state.cartprd){
                //console.log(state.cartprd['qty'])
                const prdCount = state.pCount + parseInt(action.payload.qty) 
                state.pCount = prdCount
                state.cartprd.push(action.payload)
                //console.log(temp_cartprd)

                return {...state}
             }     
             else{
                const Cart = []
                Cart.push(action.payload)
                console.log(action.payload)
                const prdCount = parseInt(action.payload.qty)
                return {...state,cartprd:Cart,pCount:prdCount}
            
             }   
       // return {...state,cartprd:action.payload};
       case 'AddUSER_DATA':
        console.log(`In Success of Get Action with result  =${JSON.stringify(action.payload)}`);
        return {...state, userdata:action.payload};

        case 'ClearUser':
            return {...state,userdata:initialState.userdata};

               default:
                return state;
      };

      
      

  }
  export default reducer;