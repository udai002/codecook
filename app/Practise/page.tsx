'use client'
import Problem from "@/components/practise/Problem";
import { useEffect } from "react";

function Practice(){

    function getCourses(){
        fetch('/api/courses')
        .then(res=>res.json())
        .then(data=>console.log(data))
    }
    useEffect(()=>{
        getCourses()
    },[])
    return <div>
        <Problem/>
    </div>
}
export default Practice;