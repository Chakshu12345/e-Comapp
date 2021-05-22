import React from 'react';
import { connect } from "react-redux";
import TableComponent from './../../reduxapp/views/tablereduxCom';

const ListDepartmentsComponent=({departments})=>


    departments?(
        <div className="container">
            <h2>List of Departments</h2>
            <TableComponent dataSource={departments} ></TableComponent>
           
            
            <hr />
            
        </div>
    
     ):null
    
     const mapStateToProps=state=>({
        // props: the state from the redux store
        departments: state.departments 
        
    });


    export default connect(mapStateToProps, null)(ListDepartmentsComponent);