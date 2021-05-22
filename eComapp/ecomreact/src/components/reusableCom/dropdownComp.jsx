import React, {useContext} from 'react';
import {DataContext} from './../datacontext';
const DropDownComponent=(props)=> {
    const dataSource = useContext(DataContext); 
    console.log(dataSource)

    const handleChange=(evt)=>{

        // props.selectedValue(evt.target.value);
    } 
        return (
            <select value={props.stateProperty} className='form-control' onChange={handleChange(this)}>
                {dataSource.map((opt,idx)=>(
                    <option key={idx} value={opt}>{opt}</option>
                ))
                }
                
            </select>
        );
    

}

export default DropDownComponent;