import React from 'react';
import { connect } from "react-redux";

const ListDepartmentsComponent=({departments})=>


    departments?(
        <div className="container">
            <h2>List of Departments</h2>
            <strong> {JSON.stringify(departments)}</strong>
            <h2>List of Departmentsaaaaaaaaaa</h2>
            <hr />
            
        </div>
    
     ):null
    
     const mapStateToProps=state=>({
        // props: the state from the redux store
        departments: state.departments 
        
    });


    export default connect(mapStateToProps, null)(ListDepartmentsComponent);