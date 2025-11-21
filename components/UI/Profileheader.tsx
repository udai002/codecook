import React from 'react'

function Profileheader() {
    return (
        <div className='min-h-screen bg-gray-100 p-6 flex justify-center'>
            <div className='w-full max-w-4xl bg-white rounded-2xl p-6'>
                <div className="flex items-center gap-4">
                    <div className="w-20 h-20 bg-gray-200 rounded-full">
                        <img src="" alt="Profile" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-semibold">Supriya</h1>
                    </div>
                </div>
                <div>
                    <p className="text-[#444444] text-md">Username: supriya</p>
                    <p className="text-[#444444] text-md">Email: kodurusupriya@gmail.com</p>
                    <p className="text-[#444444] text-md">Company/College: college</p>
                </div>
            </div>
        </div>
    )
}

export default Profileheader
