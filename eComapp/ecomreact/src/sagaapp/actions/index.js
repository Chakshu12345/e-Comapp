export const getDepartments=()=>{
    return {
        type:'GET_DEPARTMENTS'
    };
};

// write action

export const  addDepartment=(department)=>{
    return {
        type: 'ADD_DEPARTMENT',
        payload: department // the input parameter send by the UI and will be returned by the action creator
    };
};

export const getCategory=()=>{
    return {
        type:'GET_CATEGORY'
    };
};

export const  addCategory=(category)=>{
    
    return {
        type: 'ADD_CATEGORY',
        payload: category // the input parameter send by the UI and will be returned by the action creator
    };
};


export const  delCategory=(index)=>{
    //console.log(index)
    return {
        type: 'DEL_CATEGORY',
        payload: index // the input parameter send by the UI and will be returned by the action creator
    };
};
