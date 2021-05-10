import React,{useState, useEffect} from 'react';
import { connect } from "react-redux";
import {useSelector,useDispatch} from "react-redux"
//import { addCategory} from './../actions/index'
import { getDepartments, addCategory } from "./../actions/index";
import TableComponent from './../../reduxapp/views/tablereduxCom';

export const DepartmentActionsomponent=(props)=>{
    const dispatcher= useDispatch()
    const [cats,setCat]=useState({CategoryId:0,CategoryName:''});

    useEffect(() => {
        props.getDepts()
        
      });

    const save=()=>{
        console.log(cats)
        dispatcher(addCategory(cats));

    }

    return(
        <div className="container">
           
              <div className="form-group">
         <br></br>
         <h2>Create New Category</h2>
        <div className="container">
            <div className="form-group">
                <label>Category ID</label>
                <input type="text" name="catID" value={cats.CategoryId} onChange={(evt)=>setCat({...cats, CategoryId:parseInt(evt.target.value)})}  className="form-control"/>
                
            </div>

            <div className="form-group">
                <label>Category Name</label>
                <input type="text" name="catName" value={cats.CategoryName} onChange={(evt)=>setCat({...cats, CategoryName:evt.target.value})}  className="form-control"/>
                 
            </div>

            <div className="form-group">
                {/* <input type="button" value="Clear" className="btn btn-primary"
                 onClick={clear.bind(this)}/> */}
                <input type="button" value="Save" className="btn btn-success"
                 onClick={save}/>
            </div>
        </div>
            </div>
            <hr />
            
            {/* <input type="button" value="Add Department" 
             className="btn btn-success"
              onClick={()=>props.addDept({
                  DeptNo:901,DeptName:'Dept_901', Location: 'Pune', Capacity:8000
              })}/> */}

            
            




              <hr />
              <div><TableComponent dataSource={props.dept} ></TableComponent></div>
              <strong>
                    Inserted data : {JSON.stringify(props.dept)}
              </strong>
            

        </div>
    );
};







// create an object that will map the dispatch of action from UI
// to the action creator using connect() method

const mapDispatchToProps={
    // props:action methdot to dispatch
    getDepts:getDepartments,
    //addCat:addCategory()
};

const mapStateToProps= state=>({
    dept:state.department
});

// connect the Component to the Redux Action Dispatcher
// using the connect() method
export default connect(mapStateToProps, mapDispatchToProps)(DepartmentActionsomponent);
// export default DepartmentActionsomponent;