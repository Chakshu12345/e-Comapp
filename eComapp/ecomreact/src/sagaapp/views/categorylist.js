import React from 'react';

import TableComponent from './../../reduxapp/views/tablereduxCom';

const ListCatsComponent=(props)=>{
    //console.log(props.depts)
    

    if(props.depts===undefined || props.depts.length === 0){
        return (<div>No records</div>);
    } else {
        //console.log(props.depts)
       return ( <TableComponent dataSource={props.depts}></TableComponent>)
    }
};

export default ListCatsComponent;