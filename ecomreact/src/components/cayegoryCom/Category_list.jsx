import React, { Component } from 'react'
import CatService from './../../services/catservice';
import TableComponent from './../reusableCom/tablecom';

class CategoryList extends Component {
    constructor(props) {

        super(props);

        this.state = {  
            
            Categories:[],
            
        }

        this.serv = new CatService('http://127.0.0.1:9002/api/category');
    }

    componentDidMount=()=>{

        this.serv.getData().then((response)=>{
     
           
            this.setState({Categories:response.data.rows},()=>{
                console.log(this.state.Categories)

                this.setState({message:`Data is Loaded Successfully `});
            });
        }).catch((error)=>{
            this.setState({message:`Error Occured in loading Data ${error}`});
        });

    }

    render() { 
        return (
            <div>
                <br></br>
                <div className='container'>
                <h2 >All category Details</h2>
                <TableComponent dataSource={this.state.Categories}
                //depprop={this.del}
                ></TableComponent>
                </div>
            </div> 
        )
    }
}

export default CategoryList;