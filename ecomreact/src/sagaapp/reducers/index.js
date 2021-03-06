const reducer=(state=[],action)=>{
    switch(action.type){
        // initial action dispatched from UI
        case 'GET_DEPARTMENTS':
            return {...state};
        case 'GET_DEPARTMENTS_SUCCESS':
            // action dispatched from the SAGA Middleware as success
             console.log(`In Success of Get Action with result  =${JSON.stringify(action.departments)}`);
               return {...state, departments:action.departments};     
        case 'ADD_DEPARTMENT':
             return {...state};
         case 'ADD_DEPARTMENT_SUCCESS':
             return {...state, department: action.department};                
        
              
        case 'GET_CATEGORY':
            return {...state};
        case 'GET_CATEGORY_SUCCESS':
            // action dispatched from the SAGA Middleware as success
             console.log(`In Success of Get Action with result  =${JSON.stringify(action.category)}`);            
               return {...state, category:action.category};     
        case 'ADD_CATEGORY':
             return {...state};
         case 'ADD_CATEGORY_SUCCESS':
            //console.log(`red22222222:${action.category}`)
             return {...state, category: action.category};                
        default:
              return state;
    };
}
// note: if a single reducer function object is used for all actions 
// those are dispactehd from UI or from middleware
// then this single reducer can be directly loaded into createStore()
// the createStore() will internally use it as 'combineReducer' 
export default reducer;