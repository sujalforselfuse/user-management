import React from 'react'
import { useState } from 'react'
import { Image } from 'cloudinary-react';

import Navbar from './Navbar'
import Detailsheader from './Detailsheader'
import Pagination from './Pagination'
import Details from './Details'
import sample from '../assets/upload.png';
export default function Right2() {

    const [url,setUrl]=useState();
    const [selectedValues, setSelectedValues] = useState({
        department: '',
        crm_user: '',
        role: '',
        assign_caller_id: '',
        country: '',
        state: '',
        city: '',
        salary_basis: '',
        pf_contribution: '',
        payment_type: '',
        employee_pf_rate: '',
        additional_rate: '',
        esic_contribution: '',
        employee_esic_rate: '',
        additional_rate2: ''

        // Add more select elements here if needed
    });

    const [credentials, setCredentials] = useState({
        full_name: "", mobile_number: "", email_id: "", date_of_birth: "", date_of_birth2: "", position: "", address: "", salary_amount: "", pf_number: "", total_rate: "", total_rate2: "", esic_number: ""
    });

    const { full_name, mobile_number, email_id, date_of_birth, date_of_birth2, position, address, salary_amount, pf_number, total_rate, total_rate2, esic_number } = credentials;



    const { department, crm_user, employee_pf_rate, additional_rate, esic_contribution, employee_esic_rate, additional_rate2, role, assign_caller_id, country, state, city, salary_basis, pf_contribution, payment_type } = selectedValues;

    const handleSelectChange = (event, selectName) => {
        const value = event.target.value;
        setSelectedValues({
            ...selectedValues,
            [selectName]: value,
        });
    };

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(credentials);
        console.log(selectedValues);
        try {
            const response = await fetch(
                `http://localhost:8000/api/adduser`,
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        url,department, crm_user, employee_pf_rate, additional_rate, esic_contribution, employee_esic_rate, additional_rate2, role, assign_caller_id, country, state, city, salary_basis, pf_contribution, payment_type, full_name, mobile_number, email_id, date_of_birth, date_of_birth2, position, address, salary_amount, pf_number, total_rate, total_rate2, esic_number
                    }),
                }
            );

            const json = await response.json();
            console.log(json);
            if (json.success) {
                console.log(json);
                alert("success")
            } else {
                alert("fail");
                /* props.showAlert("Invalid Credentials", "danger"); */
            }
        } catch (error) {
            console.log(error);
        }

    };

    const [image, setImage] = useState('');

    const handleImageUpload = async (event) => {
        const files = event.target.files;
        const formData = new FormData();
        formData.append('file', files[0]);
        formData.append('upload_preset', 'aowwz6ns'); // Replace with your Cloudinary upload preset

        // Use Cloudinary's API to upload the image
        const response = await fetch('https://api.cloudinary.com/v1_1/dmix1720n/image/upload', {
            method: 'POST',
            body: formData,
        });

        const data = await response.json();
        
        setUrl(data.url);
        setImage(data.secure_url); // Set the uploaded image URL in state
    };

    return (
        <div className='w-full h-[100vh] overflow-y-scroll' style={{ 'background': 'radial-gradient(circle, rgba(45,28,148,1) 51%, rgba(35,4,88,1) 100%)' }}>
            <Navbar></Navbar>

            <div className='px-8'>

                <h1 className='text-white text-2xl'>Add Users</h1>


                <nav class="flex mt-2" aria-label="Breadcrumb">
                    <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                        <li class="inline-flex items-center">
                            <a href="#" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">

                                Dashboard
                            </a>
                        </li>
                        <li>
                            <div class="flex items-center">
                                <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                </svg>
                                <a href="#" class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">User Management</a>
                            </div>
                        </li>

                    </ol>
                </nav>

                <form onSubmit={handleSubmit} className='mt-6 text-white  bg-indigo-700 p-8'>
                    <h1 className='font-semibold text-xl'>Basic Information</h1>
                    <div className='my-4'>
                        <div className='mt-4 mb-8 flex items-center gap-12'>


                            <div>
                                {
                                    image ? <Image className='w-60 h-60' cloudName="dmix1720n" publicId={image} /> : <img className='w-60 h-60' src={sample} alt="" srcset="" />

                                }
                            </div>
                            <div className='border p-4'>

                                <form class="max-w-lg mx-auto">

                                    <input onChange={handleImageUpload} name="file" class="block w-full text-sm text-white  rounded-lg cursor-pointer focus:outline-none" aria-describedby="user_avatar_help" id="user_avatar" type="file" />

                                </form>

                            </div>
                        </div>

                        <div className='grid grid-cols-4 gap-12'>

                            <div class="mb-5">
                                <label for="full_name" class="block text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
                                <input onChange={handleChange} name="full_name" type="full_name" id="full_name" class="border-b border-gray-300 bg-transparent text-white text-sm rounded-none focus:ring-0 outline-none block w-full  py-1" placeholder="Michael Jackson" required />
                            </div>
                            <div class="mb-5">
                                <label for="mobile_number" class="block text-sm font-medium text-gray-900 dark:text-white">Mobile Number</label>
                                <input onChange={handleChange} name="mobile_number" type="mobile_number" id="mobile_number" class="border-b border-gray-300 bg-transparent text-white text-sm rounded-none focus:ring-0 outline-none block w-full  py-1" placeholder="9009732863" required />
                            </div>
                            <div class="mb-5">
                                <label for="email_id" class="block text-sm font-medium text-gray-900 dark:text-white">Email Id</label>
                                <input onChange={handleChange} name="email_id" type="email_id" id="email_id" class="border-b border-gray-300 bg-transparent text-white text-sm rounded-none focus:ring-0 outline-none block w-full  py-1" placeholder="sujalforselfuse@gmail.com" required />
                            </div>
                            <div class="mb-5">
                                <label for="date_of_birth" class="block text-sm font-medium text-gray-900 dark:text-white">Date of Birth</label>
                                <input onChange={handleChange} name="date_of_birth" type="date_of_birth" id="date_of_birth" class="border-b border-gray-300 bg-transparent text-white text-sm rounded-none focus:ring-0 outline-none block w-full  py-1" placeholder="01/11/2003" required />
                            </div>



                        </div>

                        <div className='grid grid-cols-4 gap-12'>
                            <div class="mb-5">
                                <label for="position" class="block text-sm font-medium text-gray-900 dark:text-white">Position</label>
                                <input onChange={handleChange} name="position" type="position" id="position" class="border-b border-gray-300 bg-transparent text-white text-sm rounded-none focus:ring-0 outline-none block w-full  py-1" placeholder="Enter position" required />
                            </div>
                            <div class="mb-5">
                                <label for="department" class="block text-sm font-medium text-gray-900 dark:text-white">Department</label>
                                <select id="department" value={selectedValues.department} onChange={(e) => handleSelectChange(e, 'department')} class=" border-b border-gray-300 text-black text-sm  bg-transparent block w-full py-1 ">

                                    <option selected>-Select-</option>
                                    <option value="Human resource">Human Resource</option>
                                    <option value="technical">Technical</option>
                                    <option value="finance">Finance</option>
                                    <option value="r&d">R&D</option>
                                </select>
                            </div>
                            <div class="mb-5">
                                <label for="crm_user" class="block text-sm font-medium text-gray-900 dark:text-white">CRM User</label>
                                <select id="crm_user" value={selectedValues.crm_user} onChange={(e) => handleSelectChange(e, 'crm_user')} class=" border-b border-gray-300 text-black text-sm  bg-transparent block w-full py-1 ">

                                    <option selected>-Select-</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>

                                </select>
                            </div>
                            <div class="mb-5">
                                <label for="role" class="block text-sm font-medium text-gray-900 dark:text-white">Role</label>
                                <select id="role" value={selectedValues.role} onChange={(e) => handleSelectChange(e, 'role')} class=" border-b border-gray-300 text-black text-sm  bg-transparent block w-full py-1 ">

                                    <option selected>-Select-</option>
                                    <option value="Web Developer">Web Developer</option>
                                    <option value="HR">HR</option>
                                    <option value="UX Designer">UX Designer</option>
                                    <option value="Content Writer">Content Writer</option>
                                </select>
                            </div>
                        </div>

                        <div className='grid grid-cols-4 gap-12'>
                            <div class="mb-5">
                                <label for="assign_caller_id" class="block text-sm font-medium text-gray-900 dark:text-white">Assign Caller ID</label>
                                <select id="assign_caller_id" value={selectedValues.assign_caller_id} onChange={(e) => handleSelectChange(e, 'assign_caller_id')} class=" border-b border-gray-300 text-black text-sm  bg-transparent block w-full py-1 ">

                                    <option selected>-Select-</option>
                                    <option value="100">100</option>
                                    <option value="200">200</option>
                                    <option value="300">300</option>

                                </select>
                            </div>
                            <div class="mb-5">
                                <label for="country" class="block text-sm font-medium text-gray-900 dark:text-white">Country</label>
                                <select id="country" value={selectedValues.country} onChange={(e) => handleSelectChange(e, 'country')} class=" border-b border-gray-300 text-black text-sm  bg-transparent block w-full py-1 ">

                                    <option selected>-Select-</option>
                                    <option value="US">United States</option>
                                    <option value="India">India</option>

                                </select>
                            </div>
                            <div class="mb-5">
                                <label for="state" class="block text-sm font-medium text-gray-900 dark:text-white">State</label>
                                <select id="state" value={selectedValues.state} onChange={(e) => handleSelectChange(e, 'state')} class=" border-b border-gray-300 text-black text-sm  bg-transparent block w-full py-1 ">

                                    <option selected>-Select-</option>
                                    <option value="madhya pradesh">MP</option>
                                    <option value="uttar pradesh">UP</option>
                                    <option value="Maharashtra">MH</option>
                                    <option value="delhi">Delhi</option>
                                </select>
                            </div>
                            <div class="mb-5">
                                <label for="city" class="block text-sm font-medium text-gray-900 dark:text-white">City</label>
                                <select id="city" value={selectedValues.city} onChange={(e) => handleSelectChange(e, 'city')} class=" border-b border-gray-300 text-black text-sm  bg-transparent block w-full py-1 ">

                                    <option selected>-Select-</option>
                                    <option value="khargone">Khargone</option>
                                    <option value="gwalior">Gwalior</option>
                                    <option value="raipur">Raipur</option>
                                    <option value="mumbai">Mumbai</option>
                                </select>
                            </div>
                        </div>

                        <div className='grid grid-cols-4 gap-12'>
                            <div class="mb-5">
                                <label for="address" class="block text-sm font-medium text-gray-900 dark:text-white">Address</label>
                                <input onChange={handleChange} name="address" type="address" id="address" class="border-b border-gray-300 bg-transparent text-white text-sm rounded-none focus:ring-0 outline-none block w-full  py-1" placeholder="Enter Address" required />
                            </div>
                            <div class="mb-5">
                                <label for="date_of_birth2" class="block text-sm font-medium text-gray-900 dark:text-white">Date of Birth</label>
                                <input onChange={handleChange} name="date_of_birth2" type="date_of_birth2" id="date_of_birth2" class="border-b border-gray-300 bg-transparent text-white text-sm rounded-none focus:ring-0 outline-none block w-full  py-1" placeholder="01/11/2003" required />
                            </div>
                        </div>
                    </div>

                    <h1 className='font-semibold text-xl'>Basic Salary Information</h1>
                    <div className='my-4'>
                        <div className='grid grid-cols-3 gap-16'>
                            <div class="mb-5">
                                <label for="salary_basis" class="block text-sm font-medium text-gray-900 dark:text-white">Salary Basis</label>
                                <select id="salary_basis" value={selectedValues.salary_basis} onChange={(e) => handleSelectChange(e, 'salary_basis')} class=" border-b border-gray-300 text-black text-sm  bg-transparent block w-full py-1 ">

                                    <option selected>-Select-</option>
                                    <option value="Intern">Intern</option>
                                    <option value="Parttine">Parttime</option>
                                    <option value="Fulltime">Fulltime</option>
                                    <option value="Contract">Contract</option>
                                </select>
                            </div>
                            <div class="mb-5">
                                <label for="salary_amount" class="block text-sm font-medium text-gray-900 dark:text-white">Salary Amount</label>
                                <input onChange={handleChange} name="salary_amount" type="salary_amount" id="salary_amount" class="border-b border-gray-300 bg-transparent text-white text-sm rounded-none focus:ring-0 outline-none block w-full  py-1" placeholder="Enter Position" required />
                            </div>
                            <div class="mb-5">
                                <label for="payment_type" class="block text-sm font-medium text-gray-900 dark:text-white">Payment Type</label>
                                <select id="payment_type" value={selectedValues.payment_type} onChange={(e) => handleSelectChange(e, 'payment_type')} class=" border-b border-gray-300 text-black text-sm  bg-transparent block w-full py-1 ">

                                    <option selected>-Select-</option>
                                    <option value="Cash">Cash</option>
                                    <option value="Cheque">Cheque</option>
                                    <option value="Bank Rollout">Bank Rollout</option>
                                    <option value="Bank transfer">Bank Transfer</option>
                                </select>
                            </div>

                        </div>
                    </div>

                    <h1 className='font-semibold text-xl'>PR Information</h1>
                    <div className='my-4'>
                        <div className='grid grid-cols-3 gap-16'>
                            <div class="mb-5">
                                <label for="pf_contribution" class="block text-sm font-medium text-gray-900 dark:text-white">PF Contribution</label>
                                <select id="pf_contribution" value={selectedValues.pf_contribution} onChange={(e) => handleSelectChange(e, 'pf_contribution')} class=" border-b border-gray-300 text-black text-sm  bg-transparent block w-full py-1 ">

                                    <option selected>-Select-</option>
                                    <option value="5%">5%</option>
                                    <option value="10%">10%</option>
                                    <option value="15%">15%</option>

                                </select>
                            </div>
                            <div class="mb-5">
                                <label for="pf_number" class="block text-sm font-medium text-gray-900 dark:text-white">PF Number</label>
                                <input onChange={handleChange} name="pf_number" type="pf_number" id="pf_number" class="border-b border-gray-300 bg-transparent text-white text-sm rounded-none focus:ring-0 outline-none block w-full  py-1" placeholder="Enter PF Number" required />
                            </div>


                        </div>
                        <div className='grid grid-cols-3 gap-16'>
                            <div class="mb-5">
                                <label for="employee_pf_rate" class="block text-sm font-medium text-gray-900 dark:text-white">Employee PF Rate</label>
                                <select id="employee_pf_rate" value={selectedValues.employee_pf_rate} onChange={(e) => handleSelectChange(e, 'employee_pf_rate')} class=" border-b border-gray-300 text-black text-sm  bg-transparent block w-full py-1 ">

                                    <option selected>-Select-</option>
                                    <option value="5%">5</option>
                                    <option value="10%">10</option>
                                    <option value="14%">14</option>

                                </select>
                            </div>

                            <div class="mb-5">
                                <label for="additional_rate" class="block text-sm font-medium text-gray-900 dark:text-white">Addtional Rate</label>
                                <select id="additional_rate" value={selectedValues.additional_rate} onChange={(e) => handleSelectChange(e, 'additional_rate')} class=" border-b border-gray-300 text-black text-sm  bg-transparent block w-full py-1 ">

                                    <option selected>-Select-</option>
                                    <option value="5%">5</option>
                                    <option value="10%">10</option>
                                    <option value="15%">15</option>

                                </select>
                            </div>
                            <div class="mb-5">
                                <label for="total_rate" class="block text-sm font-medium text-gray-900 dark:text-white">Total Rate</label>
                                <input onChange={handleChange} name="total_rate" type="total_rate" id="total_rate" class="border-b border-gray-300 bg-transparent text-white text-sm rounded-none focus:ring-0 outline-none block w-full  py-1" placeholder="Enter Total Rate" required />
                            </div>

                        </div>

                    </div>

                    <h1 className='font-semibold text-xl'>ESIC Information</h1>
                    <div className='my-4'>
                        <div className='grid grid-cols-3 gap-16'>
                            <div class="mb-5">
                                <label for="esic_contribution" class="block text-sm font-medium text-gray-900 dark:text-white">ESIC Contribution</label>
                                <select id="esic_contribution" value={selectedValues.esic_contribution} onChange={(e) => handleSelectChange(e, 'esic_contribution')} class=" border-b border-gray-300 text-black text-sm  bg-transparent block w-full py-1 ">

                                    <option selected>-Select-</option>

                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>

                                </select>
                            </div>
                            <div class="mb-5">
                                <label for="esic_number" class="block text-sm font-medium text-gray-900 dark:text-white">ESIC No.</label>
                                <input onChange={handleChange} name="esic_number" type="esic_number" id="esic_number" class="border-b border-gray-300 bg-transparent text-white text-sm rounded-none focus:ring-0 outline-none block w-full  py-1" placeholder="Enter ESIC Number" required />
                            </div>


                        </div>
                        <div className='grid grid-cols-3 gap-16'>
                            <div class="mb-5">
                                <label for="employee_esic_rate" class="block text-sm font-medium text-gray-900 dark:text-white">Employee ESIC Rate</label>
                                <select id="employee_esic_rate" value={selectedValues.employee_esic_rate} onChange={(e) => handleSelectChange(e, 'employee_esic_rate')} class=" border-b border-gray-300 text-black text-sm  bg-transparent block w-full py-1 ">

                                    <option selected>-Select-</option>

                                    <option value="5">5</option>
                                    <option value="10">10</option>
                                    <option value="15">15</option>
                                </select>
                            </div>

                            <div class="mb-5">
                                <label for="additional_rate2" class="block text-sm font-medium text-gray-900 dark:text-white">Additional Rate</label>
                                <select id="additional_rate2" value={selectedValues.additional_rate2} onChange={(e) => handleSelectChange(e, 'additional_rate2')} class=" border-b border-gray-300 text-black text-sm  bg-transparent block w-full py-1 ">

                                    <option selected>-Select-</option>
                                    <option value="5">5</option>
                                    <option value="10">10</option>
                                    <option value="15">15</option>

                                </select>
                            </div>
                            <div class="mb-5">
                                <label for="total_rate2" class="block text-sm font-medium text-gray-900 dark:text-white">Total Rate</label>
                                <input onChange={handleChange} name="total_rate2" type="total_rate2" id="total_rate2" class="border-b border-gray-300 bg-transparent text-white text-sm rounded-none focus:ring-0 outline-none block w-full  py-1" placeholder="Enter Total Rate" required />
                            </div>

                        </div>
                    </div>

                    <button type='submit' class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Submit</button>

                </form>

            </div>
        </div>
    )
}
