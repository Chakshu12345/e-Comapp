
import React from 'react';

import { useDispatch,useSelector } from "react-redux";

import { addDept } from "./actions/actions";

import CreateDeptComponent from './views/CreateDeptComponent';
import ListDeptsComponent from './views/ListDeptsComponent';

const MainReduxContainerComponent=()=>{

    let dispatch= useDispatch();
    let departments = useSelector(state=>state.departments)

    return(
        <div className='container'>
            <h1>Application </h1>
            <CreateDeptComponent AddDepartment={(dept)=>dispatch(addDept(dept))}></CreateDeptComponent>
            <hr />
            <ListDeptsComponent depts={departments}></ListDeptsComponent>
        </div>
    
        );

}

export default MainReduxContainerComponent;