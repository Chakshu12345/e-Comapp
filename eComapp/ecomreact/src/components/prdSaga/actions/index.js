


export const getProducts=()=>{
    return {
        type:'GET_PRODUCTS'
    };
};
export const searchProducts=(val)=>{
    return {
        type:'Search_PRODUCTS'
    };
};

export const addCart=(val)=>{
   // console.log(val)
    return {
        
            type: 'AddCART_PRD', 
            payload:val 
        
    };
};

export const addUser=(val)=>{
    // console.log(val)
     return {
         
             type: 'AddUSER_DATA', 
             payload:val 
         
     };
 };

 export const clearU=()=>{
    // console.log(val)
     return {
         
             type: 'ClearUser', 
             payload:{}
         
     };
 };