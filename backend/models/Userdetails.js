const mongoose = require("mongoose");
const { Schema } = mongoose;
//brand->model->

const userdetail = new Schema(
    {
        url: {
            type: String,            
        }, 
         full_name: {
            type: String,
            required:true
        },
        mobile_number: {
            type: Number,
            required:true
        },
        email_id: {
            type: String,
            required:true
        },
        date_of_birth: {
            type: String,
            required:true
        },
        position: {
            type: String,
            required:true
        }, 
        department: {
            type: String,
            required:true
        },
        crm_user: {
            type: String,
            required:true
        } ,
        role: {
            type: String,
            required:true
        },
        assign_caller_id: {
            type: String,
            required:true
        },
        country: {
            type: String,
            required:true
        },
        state: {
            type: String,
            required:true
        },
        city: {
            type: String,
            required:true
        },
        address: {
            type: String,
            required:true
        },
        date_of_birth2: {
            type: String,
            required:true
        },
        salary_basis: {
            type: String,
            required:true
        },
        salary_amount: {
            type: Number,
            required:true
        },
        payment_type: {
            type: String,
            required:true
        },
        pf_contribution: {
            type: String,
            required:true
        },
        pf_number: {
            type: Number,
            required:true
        },
        employee_pf_rate: {
            type: String,
            required:true
        },
        additional_rate: {
            type: String,
            required:true
        },
        total_rate: {
            type: Number,
            required:true
        },
        esic_contribution: {
            type: String,
            required:true
        },
        esic_number: {
            type: Number,
            required:true
        },
        employee_esic_rate: {
            type: String,
            required:true
        },
        additional_rate2: {
            type: String,
            required:true
        },
        total_rate2: {
            type: Number,
            required:true
        } 
    }
)
const Userdetail = mongoose.model('details', userdetail);

module.exports = Userdetail;