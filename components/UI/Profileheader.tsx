"use client"

import { useAppData } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

function Profileheader() {
    const {userDetails, isAuth} = useAppData()
    const router = useRouter()

    useEffect(()=>{
        console.log(userDetails)
        if(!isAuth && !userDetails)router.replace("/login")
    } , [])

    return (
        <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
            <div className="w-full max-w-4xl rounded-2xl bg-white shadow-lg border border-gray-200 p-8">
                
                {/* Header */}
                <div className="flex items-center gap-6 border-b pb-6">
                    {/* Avatar */}
                    <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-300 shadow">
                        <img
                            src="/default-avatar.png" 
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* User Info */}
                    <div className="flex-1">
                        <h1 className="text-3xl font-bold text-gray-900">{userDetails?.username}</h1>

                        {/* Badges */}
                        <div className="flex gap-3 mt-2">
                            <span className="px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-full font-medium">
                                ★ Developer
                            </span>
                            <span className="px-3 py-1 text-sm bg-green-100 text-green-600 rounded-full font-medium">
                                ✔ Verified User
                            </span>
                        </div>
                    </div>
                </div>

                {/* Details Section */}
                <div className="mt-6 space-y-3 text-gray-700">
                    <div className="flex justify-between">
                        <p className="font-medium">Username</p>
                        <p className="text-gray-600">{userDetails?.username}</p>
                    </div>

                    <div className="flex justify-between">
                        <p className="font-medium">Email</p>
                        <p className="text-gray-600">{userDetails?.email}</p>
                    </div>

                    <div className="flex justify-between">
                        <p className="font-medium">Company / College</p>
                        <p className="text-gray-600">{userDetails?.company}</p>
                    </div>
                </div>

                {/* Stats */}
                <div className="mt-8 grid grid-cols-3 gap-4">
                    <div className="bg-gray-50 rounded-xl p-4 text-center shadow-sm border">
                        <p className="text-2xl font-bold text-blue-600">135</p>
                        <p className="text-sm text-gray-500">Problems Solved</p>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-4 text-center shadow-sm border">
                        <p className="text-2xl font-bold text-purple-600">12</p>
                        <p className="text-sm text-gray-500">Badges Earned</p>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-4 text-center shadow-sm border">
                        <p className="text-2xl font-bold text-green-600">5</p>
                        <p className="text-sm text-gray-500">Streak Days</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Profileheader;
