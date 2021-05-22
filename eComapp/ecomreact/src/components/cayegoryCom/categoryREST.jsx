import React, { Component } from 'react'
import CatService from './../../services/catservice';
import TableComponent from './../reusableCom/tablecom';

class CategoryREST extends Component {
    constructor(props) {

        super(props);

        this.state = {  
            catID:0,
            RowID:'',
            catName:'',
            Categories:[],
            validation: {
                catID: {
                    maxLength: 5,
                    error: true,
                    msg: ""
                },
                catName: {
                    maxLength: 12,
                    error: true,
                    msg: ""
                }
            },
            flag:'A',
        }

        this.serv = new CatService('http://127.0.0.1:9002/api/category');
    }

    handleChange(evt){
        const maxlength=this.state.validation[evt.target.name].maxLength
        let tempObj = { ...this.state.validation }
        //console.log(maxlength)
        if(evt.target.value.length>maxlength)
        {
            this.setState({
                validation:{
                    ...tempObj,
                    [evt.target.name]: {
                    ...tempObj[evt.target.name],
                        msg: "Maximum is " + maxlength,
                        error: true
                    
                    }
                }
            })
        }
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
                CategoryName:this.state.catName,
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
        //console.log(evt.target.value)
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
                this.setState({RowID:v['RowID']});
                let val = {val:v['RowID']}
                console.log(val)
               // v['CategoryId'] = <input type="text" name="CategoryId" value={this.state.CategoryId} onChange={this.handleChange.bind(this)} className="form-control"/>
                //v['CategoryName'] = <input type="text" name="CategoryName" value={this.state.CategoryName} onChange={this.handleChange.bind(this)} className="form-control"/>
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
             <br></br>
             <h2>Create New Category</h2>
            <div className="container">
                <div className="form-group">
                    <label>Category ID</label>
                    <input type="text" name="catID" value={this.state.catID} onChange={this.handleChange.bind(this)}  className="form-control"/>
                    <div><span >{this.state.validation['catID'].msg}</span></div>
                </div>

                <div className="form-group">
                    <label>Category Name</label>
                    <input type="text" name="catName" value={this.state.catName} onChange={this.handleChange.bind(this)}  className="form-control"/>
                    <div><span >{this.state.validation['catName'].msg}</span></div>
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

export default CategoryREST;