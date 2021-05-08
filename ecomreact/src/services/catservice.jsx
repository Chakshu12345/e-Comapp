import axios from 'axios'

class CatService {
    constructor(val){
        this.url =val ;
    }

    getData(){
        let response = axios.get(this.url);
        return response;
    }

    getDataById(id){
        let response = axios.get(`${this.url}/${id}`);
        return response;
    }
    postData(cat){
        console.log(cat)
        let response = axios.post(this.url,cat, {
            headers:{
                'Content-Type':'application/json'
            }
        });
        return response;
    }
    putData(id,cat){
        console.log(cat)
        console.log(id)
        let response = axios.put(`${this.url}/${id}`,cat, {
            headers:{
                'Content-Type':'application/json'
            }
        });
        return response;
    }

    deleteData(id){
        let response = axios.delete(`${this.url}/${id}`);
        return response;
    }

    //upload file
    uploadFile(url,formData){
        //console.log(url)       
        
        return  axios.post(url, formData)
    }

}

export default CatService;