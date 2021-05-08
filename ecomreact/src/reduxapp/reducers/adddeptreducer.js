import * as actions from './../actions/actions';


export const initialState = {
    departments:[]
};

export const addDeptReducer=(state=[], action)=>{
    switch(action.type) {
        case actions.ADD_DEPT: {
               console.log(`In ADD_DEPT ${JSON.stringify(action.payload)}`); 
            return [...state,action.payload] } // update the state with the new departments state by ading newly received record
        default:
               return state; // return the default state     
    }
};