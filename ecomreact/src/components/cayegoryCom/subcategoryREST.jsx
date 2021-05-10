import React, { Component } from 'react'
import CatService from './../../services/catservice';
import TableComponent from './../reusableCom/tablecom';
import DropDownComponent from './../reusableCom/dropdownComp';

class SubCategoryREST extends Component {
    constructor(props) {

        super(props);

        this.state = {  
            catID:0,
            RowID:'',
            subcatName:'',
            subcatId:0,
            Categories:["Electronics", "Electrical", "Food"],
            SubCategories:[],
            flag:'A',
            
            message:''
        }
        //this.servcat = new CatService('http://127.0.0.1:9002/api/category');

        this.serv = new CatService('http://127.0.0.1:9002/api/subcategories');
    }

    handleChange(evt){
        //console.log(evt.target.value)
        this.setState({[evt.target.name]:evt.target.value});
    }

    clear=()=>{
        this.setState({catID:0});
        this.setState({catName:''});
        
    }
    save=()=>{
        if(this.state.flag==='A'){
            let cat = {  
                CategoryId:this.state.catID,
                SubCategoryId:this.state.subcatId,
                SubCategoryName:this.state.subcatName,
            };
            this.serv.postData(cat).then((response)=>{
                this.setState({message:`Department is posted successfully`});
            }).catch((error)=>{
                this.setState({message:`Error Occured in loading Data ${error}`});
            });
        }
        if(this.state.flag==='M'){
            let cat = {  
                CategoryId:this.state.catID,
                CategoryName:this.state.catName,
            };
            this.serv.putData(this.state.RowID,cat).then((response)=>{
                this.setState({message:`Department is posted successfully`});
            }).catch((error)=>{
                this.setState({message:`Error Occured in loading Data ${error}`});
            });
        }
        
    }

    del=(evt)=>{
        //console.log("hi")
        console.log(evt.target.value)
        this.serv.deleteData(evt.target.value).then((response)=>{
            this.setState({message:`Department is posted successfully`});
        }).catch((error)=>{
            this.setState({message:`Error Occured in loading Data ${error}`});
        });
        //console.log(val)
    }

    mod=(evt)=>{
        this.serv.getDataById(evt.target.value).then((response)=>{
            this.setState({catID:response.data.rows.CategoryId});
            this.setState({catName:response.data.rows.CategoryName});
            this.setState({flag:'M'});
            
        }).catch((error)=>{
            this.setState({message:`Error Occured in loading Data ${error}`});
        });

    }
    

    componentDidMount=()=>{

        this.serv.getData().then((response)=>{
            var result = response.data.rows.filter((v,k)=>{
                this.setState({RowID:v['RowId']});
                let val = {val:v['RowId']}
                console.log(val)
               
                v['Delete'] = <button className="btn btn-danger" value = {val.val} onClick={this.del.bind(this)}>Delete</button>
                v['Update'] = <button className="btn btn-secondary" value = {val.val} onClick={this.mod.bind(this)} >Update</button>
                return v
                //console.log(v)
            });
           
            this.setState({Categories:result},()=>{
                //console.log(result)
                this.setState({message:`Data is Loaded Successfully `});
            });
        }).catch((error)=>{
            this.setState({message:`Error Occured in loading Data ${error}`});
        });

    }




render() { 
    return ( 
        <div className="container">
         <div className="form-group">
        <div className="container">
             
        <div className="form-group">
                    <label>Category ID</label>
                    <input type="text" name="catID" value={this.state.catID} onChange={this.handleChange.bind(this)}  className="form-control"/>
                </div>


                <div className="form-group">
                    <label>SubCategory ID</label>
                    <input type="text" name="subcatId" value={this.state.subcatId} onChange={this.handleChange.bind(this)}  className="form-control"/>
                </div>

                <div className="form-group">
                    <label>SubCategory Name</label>
                    <input type="text" name="subcatName" value={this.state.subcatName} onChange={this.handleChange.bind(this)}  className="form-control"/>
                </div>

                <div className="form-group">
                    <input type="button" value="Clear" className="btn btn-primary"
                     onClick={this.clear.bind(this)}/>
                    <input type="button" value="Save" className="btn btn-success"
                     onClick={this.save.bind(this)}/>
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

}

export default SubCategoryREST;