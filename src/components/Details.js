import React, { useEffect, useState } from 'react'

export default function Details() {

    const [detail, setDetail] = useState();

    const handlegetcart = async (e) => {

        try {
            const response = await fetch(`http://localhost:8000/api/getuser`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"

                }

            });
            const json = await response.json();

            if (json.success) {
                setDetail(json.detail);
            }
            else {
                alert("fail");

            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        handlegetcart();
    },[])




    return (
        <div className='mt-4'>
            <div className='bg-blue-400 py-2 grid grid-cols-9 items-center mb-4  '>
                <div class="flex items-center justify-center">
                    <input type="checkbox" id="myCheckbox" class="h-5 w-5 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500" />

                </div>

                <div className='text-center'>
                    Sr.No
                </div>
                <div className='text-center'>
                    Full Name
                </div>
                <div className='text-center'>
                    Email ID
                </div>
                <div className='text-center'>
                    Mobile No
                </div>
                <div className='text-center'>
                    City
                </div>
                <div className='text-center'>
                    CRM User
                </div>
                <div className='text-center'>
                    Status
                </div>
                <div className='text-center'>
                    Action
                </div>
            </div>

            {
                detail && detail.map((item,index) => {
                    return (
                        <div key={item.id} className='grid grid-cols-9 items-center mb-4 '>
                            <div class="flex items-center justify-center">
                                <input type="checkbox" id="myCheckbox" class="h-5 w-5 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500" />

                            </div>

                            <div className='text-center'>
                                {index+1}
                            </div>
                            <div className='text-center'>
                                {item.full_name}
                            </div>
                            <div className='text-center overflow-hidden'>
                                {item.email_id}
                            </div>
                            <div className='text-center'>
                                {item.mobile_number}
                            </div>
                            <div className='text-center capitalize'>
                                {item.city}
                            </div>
                            <div className='text-center capitalize'>
                                {item.crm_user}
                            </div>
                            <div className='flex justify-center'>
                                <label class="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" class="sr-only peer" />
                                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>

                                </label>
                            </div>
                            <div className='flex justify-center text-center'>
                                <svg class="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
                                    <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                                </svg>
                            </div>
                        </div>
                    )
                })
            }







        </div>
    )
}
