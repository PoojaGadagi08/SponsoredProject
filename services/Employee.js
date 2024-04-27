import axios from 'axios';


const mylink="http://localhost:8080/demo/getData";


class Employee{

    getEmployee(){
        return axios.get(mylink);
    }

    createEmployee(employee){
        return axios.post("http://localhost:8080/demo/postData", employee);
    }
}


export default new Employee();