import React from 'react';
import DepartmentActionsomponent from './views/departmentsactions';
import ListDepartmentsComponent from './views/ListDepartments';
const MainSagaComponent=()=>{
    return (
        <div className="container">
            <DepartmentActionsomponent></DepartmentActionsomponent>
            <hr />
            <ListDepartmentsComponent></ListDepartmentsComponent>
            {/* <ListDeptsComponent depts={departments}></ListDeptsComponent> */}
        </div>
    );
};

export default MainSagaComponent;