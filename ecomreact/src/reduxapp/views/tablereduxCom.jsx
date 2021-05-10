import React from 'react';
import {useSelector,useDispatch} from "react-redux"
import { delDept} from './../actions/actions'
const TableComponent=(props)=>{
const dispatcher= useDispatch()


 
       //let parseData= JSON.parse(dataSource)
       //console.log()
        if(props.dataSource === undefined || props.dataSource.length === 0){
            return (
                <div className="container">No Recrds to showaaaa</div>
            );
        } else {
            console.log(props.dataSource[0])
           
        return (  
            <div className="container">
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            {
                                Object.keys(props.dataSource[0]).map((col,idx)=>(
                                    <th key={idx}>{col}</th>
                                ))
                               
                            }
                            
                        </tr>
                    </thead>
                    <tbody>
                         {
                             props.dataSource.map((rows,index)=>(
                               
                                <tr key={index}>
                                    {
                                      Object.keys(props.dataSource[0]).map((col,idx)=>(
                                        
                                        <td key={idx}>{rows[col]}</td>
                                        

                                    ))  
                                    }
                                  <td ><button class="button button-danger" onClick={dispatcher(delDept(index))}>Delete</button>
                                 {/* <button onClick={dispatcher(modDept(index))}>Modify</button> */}
                                 </td>  
                                       
                                </tr>

                                

                             ))
                         }       
                    </tbody>
                </table>
            </div>
           
          );
       }
    

}

export default TableComponent;