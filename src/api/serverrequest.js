
import axios from 'axios';
import AppConstants from '../AppConstants';


export async function getProuctCategories() {

}

export async function validateOTP(mobileno,optvalue,pwd) {
    

    let data = {
        "mobile":mobileno,
        "otp":optvalue,
        "pwd":pwd

    }

    let url = AppConstants.dev_URL + "/validatecustomerotp/";

    let userdata = await axios.post(
        url,
        data,
        {timeout:AppConstants.axiosTimeout}
      );
    
      return userdata;

}

export async function registerCustomer(data) {

    let url = AppConstants.dev_URL + "/registercustomer/";

    let userdata = await axios.post(
        url,
        data,
        {timeout:AppConstants.axiosTimeout}
      );
    
      return userdata;
}

export async function userLogin(login,password) {
    
    let url = AppConstants.dev_URL + "/logincustomer/";

    const loginData ={
        loginid: login,
        pwd: password 
    }

    let userdata = await axios.post(
        url,
        loginData,
        {timeout:AppConstants.axiosTimeout}
      );
    
      return userdata;
    
}


