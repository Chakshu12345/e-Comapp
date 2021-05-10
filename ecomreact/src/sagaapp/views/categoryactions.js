import React from 'react';
import { connect } from "react-redux";
import { getDepartments, addDepartment } from "./../actions/index";

export const CategoryActionscomponent=(props)=>{
    

return ( 
    <div className="container">
     <div className="form-group">
         <br></br>
         <h2>Create New Category</h2>
        <div className="container">
            <div className="form-group">
                <label>Category ID</label>
                <input type="text" name="catID" value={cats.catID} onChange={(evt)=>setCat({...cats, catID:parseInt(evt.target.value)})}  className="form-control"/>
                <div><span >{this.state.validation['catID'].msg}</span></div>
            </div>

            <div className="form-group">
                <label>Category Name</label>
                <input type="text" name="catName" value={cats.catName} onChange={(evt)=>setCat({...cats, catName:parseInt(evt.target.value)})}  className="form-control"/>
                <div><span >{this.state.validation['catName'].msg}</span></div>
            </div>

            <div className="form-group">
                <input type="button" value="Clear" className="btn btn-primary"
                 onClick={clear.bind(this)}/>
                <input type="button" value="Save" className="btn btn-success"
                 onClick={save.bind(this)}/>
            </div>
    </div>
</div>
<hr/>
<h4>List of Categories</h4>

<TableComponent dataSource={this.state.Categories}
//depprop={this.del}
></TableComponent>
</div>


);

}