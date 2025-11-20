import {createContext, SetStateAction, useState} from 'react'

interface contextProps{
    userDetails:any ;
    loading:boolean  ;
    setLoading:React.Dispatch<SetStateAction<boolean>> ;
    isAuth:boolean
}

const AppDataContext = createContext<contextProps | null>(null)

const AppContextProvier = ()=>{
    const [loading , setLoading] = useState(true)
    const [userDetails , setUserDetails] = useState(null)
    const [isAuth , setIsAuth] = useState(false)

    // fetch login details 


    //login user
    const loginUser = async (data:any)=>{
        
    }

    //register user
    

    return <AppDataContext.Provider value={{loading  , setLoading }}>

    </AppDataContext.Provider>
}