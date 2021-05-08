import React, {useContext} from 'react';
import {DataContext} from '../datacontext';

const TableComponentContextEvent=()=>{ 
    const subscriber = useContext(DataContext); 
    const dataSource  = subscriber[Object.keys(subscriber)[0]]; // array
    const event = subscriber[Object.keys(subscriber)[1]]; // event

    if(dataSource === undefined ||dataSource.length === 0){
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
                    {/* event(rows) will pass the selected row's data with event callback and it will be emitted to the parent coponent */}
                     {
                         dataSource.map((rows,index)=>(
                            <tr key={index} onClick={()=>event(rows)}>
                                {
                                  Object.keys(dataSource[0]).map((col,idx)=>(
                                    <th key={idx}>{rows[col]}</th>
                                ))  
                                }
                            </tr>
                         ))
                     }       
                </tbody>
            </table>
        </div>
       
      );
   }
};

export default TableComponentContextEvent;