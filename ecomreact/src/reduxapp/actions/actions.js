export const ADD_DEPT = 'ADD_DEPT'; //##
export const addDept=(dept)=>{
    console.log(`Action Dispatch Request is received ${JSON.stringify(dept)}`);

    dept.DeptName = dept.DeptName.toUpperCase();
    return {
        type: ADD_DEPT, // the output action
        payload:dept // output from then output action
    };
}