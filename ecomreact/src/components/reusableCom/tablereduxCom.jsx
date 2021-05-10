
import {useSelector,useDispatch} from "react-redux"

import { delDept,modDept } from './../../reduxapp/actions/actions';



const TableComponent=(dataSource)=>{



     
        //console.log(this.props.dataSource)
        if(dataSource === undefined || dataSource.length === 0){
            return (
                <div className="container">No Recrds to show</div>
            );
        } else {
        return (  
            <div className="container">
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            {
                                Object.keys(dataSource[0]).map((col,idx)=>(
                                    <th key={idx}>{col}</th>
                                ))
                               
                            }
                            
                        </tr>
                    </thead>
                    <tbody>
                         {
                             dataSource.map((rows,index)=>(
                               
                                <tr key={index}>
                                    {
                                      Object.keys(dataSource[0]).map((col,idx)=>(
                                        
                                        <td key={idx}>{rows[col]}</td>
                                        

                                    ))  
                                    }
                                 <td ><button onClick={dispatcher(delDept(index))}>Delete</button><button onClick={dispatcher(modDept(index))}>Modify</button></td> 
                                       
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