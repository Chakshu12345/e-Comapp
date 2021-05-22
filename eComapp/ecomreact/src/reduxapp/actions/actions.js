export const ADD_DEPT = 'ADD_DEPT'; 
 export const DEL_DEPT = 'DEL_DEPT';
// export const MOD_DEPT = 'MOD_DEPT';
//##
export const addDept=(dept)=>{
    console.log(`Action Dispatch Request is received ${JSON.stringify(dept)}`);

    dept.DeptName = dept.DeptName.toUpperCase();
    return {
        type: ADD_DEPT, // the output action
        payload:dept // output from then output action
    };
}
export const delDept=(index)=>{
    console.log(`Action Dispatch del Request is received ${index}`);

    //dept.DeptName = dept.DeptName.toUpperCase();
        
    return {
        type: DEL_DEPT, // the output action
        payload:index // output from then output action
    };
}
// export const modDept=(index)=>{
//     console.log(`Action Dispatch Request is received ${index}`);

//     //dept.DeptName = dept.DeptName.toUpperCase();
        
//     return {
//         type: ADD_DEPT, // the output action
//         payload:index // output from then output action
//     };
//}
