"use client"

import { Code2, Trophy, BookOpen, User, Search, Bell } from 'lucide-react';
import Button from './UI/Button';
import { useRouter } from 'next/navigation';
import { useAppData } from '@/context/AuthContext';
import { useState } from 'react';
import { IoIosLogOut } from "react-icons/io";

interface HeaderProps {
  currentPage: 'home' | 'problems' | 'blogs' | 'profile';
  onNavigate: (page: 'home' | 'problems' | 'blogs' | 'profile') => void;
}

function Header() {

    const router = useRouter()
    const {isAuth , logout} = useAppData()
    const [hoverProfile , setHoverProfile] = useState(false)
    
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/55 border-b border-blue-500/20 px-10">
      <div className="max-w-7xl mx-auto ">
        <div className="flex  justify-between gap-4 h-16">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0"></div>
              <Code2 className="relative w-8 h-8 text-blue-500" />
            </div>
            <span className=" text-blue-500">Codecook</span>
            <nav className="hidden md:flex items-center gap-1 text-black">
            <button
              onClick={()=>router.push("/")}
              className={`px-4 py-2 rounded-lg transition-all hover:bg-blue-500/10`}
            >
              Home
            </button>
            <button
              onClick={()=>router.push("/problem")}
              className={`flex items-center gap-1 px-4 py-2 rounded-lg transition-all hover:bg-blue-500/10`}
            >
              <Trophy className="w-4 h-4" />
              Problems
            </button>
            <button
             
              className={`flex items-center gap-1 px-4 py-2 rounded-lg transition-all hover:bg-blue-500/10`}
            >
              <BookOpen className="w-4 h-4" />
              Blogs
            </button>
            <button
              onClick={()=>router.push("/coursespage")}
              className={`flex items-center gap-1 px-4 py-2 rounded-lg transition-all hover:bg-blue-500/10`}
            >
              <BookOpen className="w-4 h-4" />
              Courses
            </button>
            <button
              onClick={()=>router.push("/compiler")}
              className={`flex items-center gap-1 px-4 py-2 rounded-lg transition-all hover:bg-blue-500/10`}
            >
              <BookOpen className="w-4 h-4" />
              Compiler
            </button>
          </nav>
          </div>

          

          <div className="flex items-center gap-3">
            <button className="p-2 text-black hover:text-blue-300 hover:bg-blue-500/10 rounded-lg transition-all">
              <Search className="w-5 h-5" />
            </button>
            {/* <button className="p-2 text-slate-400 hover:text-blue-300 hover:bg-blue-500/10 rounded-lg transition-all relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-blue-500 rounded-full"></span>
            </button> */}
            {isAuth?<button 
            onMouseEnter={()=>setHoverProfile(true)}
            onMouseLeave={()=>setHoverProfile(false)}
                className='text-black flex items-center gap-1'
            >
              <User className="w-6 h-6 "  />
               {hoverProfile&&<div className='absolute transition-all ease-in-out '>
                <ul className='relative top-12 bg-white right-4 rounded-md border-2 border-black/45'>
                  <li className='px-4 py-1 hover:bg-blue-500/10 transition-all ease-in'><button onClick={()=>router.push("/profile")}>Profile</button></li>
                  <li className='px-4 py-1 hover:bg-blue-500/10 transition-all ease-in flex gap-1 items-center'> <button onClick={()=>logout()}>logout</button></li>
                </ul>
              </div>}
              
            </button>:

            <div className='flex gap-3'>
                <Button intent='secondary' size='small' title='Login' onClick={()=>router.push("/login")}/>
                {/* <Button intent='primary' size='small' title='signup'/> */}
            </div>}
           
          </div>
        </div>
      </div>

      <div className="md:hidden border-t border-blue-500/20 px-4 py-2 flex items-center justify-around">
        <button
         
        >
          Home
        </button>
        <button
          
        >
          <Trophy className="w-4 h-4" />
          Problems
        </button>
        <button
          
        >
          <BookOpen className="w-4 h-4" />
          Blogs
        </button>
      </div>
    </header>
  );
}

export default Header
