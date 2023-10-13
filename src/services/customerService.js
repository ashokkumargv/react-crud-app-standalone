import axios from "axios";
class CustomerService {
    //const headerUrl  = "http://localhost:3000/";
    getAll() {
        return axios.get(`http://localhost:4000/customer`);
    }

    addCustomer(formData) {
        const customer = JSON.stringify(formData);
        // const customConfig = {
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // };
        return axios.post(`http://localhost:4000/customer`,  customer );
    }

    updateCustomer(formData) {
        const customer = JSON.stringify(formData);
        // const customConfig = {
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // };
        return axios.put(`http://localhost:4000/customer/${customer.id}`,  customer );
    }
    
    DeleteCustomer(id) {
        return axios.delete(`http://localhost:4000/customer/deletecustomer/${id}`);
    }
}


export default new CustomerService();