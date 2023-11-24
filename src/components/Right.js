import React from 'react'
import Navbar from './Navbar'
import Detailsheader from './Detailsheader'
import Pagination from './Pagination'
import Details from './Details'
export default function Right() {
    return (
        <div className='w-full h-[100vh]' style={{ 'background': 'radial-gradient(circle, rgba(45,28,148,1) 51%, rgba(35,4,88,1) 100%)' }}>
            <Navbar></Navbar>

            <div className='px-8'>

                <h1 className='text-white text-2xl'>Users</h1>


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

                <div className='mt-6 text-white bg-indigo-700 p-8'>
                    <Detailsheader></Detailsheader>
                    <Details></Details>
                    <Pagination></Pagination>
                </div>

            </div>
        </div>
    )
}
