import { ReactNode, useEffect } from 'react'
import axios from 'axios';
import { createContext, SetStateAction, useContext, useState } from 'react'
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

interface contextProps {
    userDetails: any;
    loading: boolean;
    setLoading: React.Dispatch<SetStateAction<boolean>>;
    isAuth: boolean;
    loginUser: (data: any) => Promise<void>;
    registerUser: (data: any) => Promise<void>;
    error: boolean;
    fetchUser: () => Promise<void>;
    logout: () => void;
}

const AppDataContext = createContext<contextProps | null>(null)

export const AppContextProvier = ({ children }: any) => {
    const [loading, setLoading] = useState(true)
    const [userDetails, setUserDetails] = useState(null)
    const [isAuth, setIsAuth] = useState(false)
    const [error, setError] = useState(false)

    const router = useRouter()

    // fetch login details 
    const fetchUser = async () => {
        try {
            setLoading(true)
            const response = await axios.get("/api/me")
            setUserDetails(response.data.data)
            setLoading(false)
            console.log(response)
            setIsAuth(true)
            toast.success(response.data.message)
        } catch (error) {
            console.log("Error in fetching the details...", error)
            setError(true)
        }
    }

    useEffect(() => {
        fetchUser()
    }, [])


    //login user
    const loginUser = async (payload: any) => {
        try {
            setLoading(true)
            const response = await axios.post("/api/login", payload)
            const { data: responseData } = response
            console.log("this is from context when we login", responseData)
            setUserDetails(responseData)
            toast.success(responseData.message)
            setIsAuth(true)
            fetchUser()
            router.replace("/")
        } catch (error: any) {
            toast.error(error.response.data.message)
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    //register user
    const registerUser = async (payload: any) => {
        try {
            setLoading(true)
            const response = await axios.post("/api/authentication", payload)
            const { data: responseData } = response
            console.log("this is from context when we login", responseData)
            setUserDetails(responseData.data)
            toast.success(responseData.message)
            setIsAuth(true)
            router.replace("/login")

        } catch (error: any) {
            toast.error(error.response.data.message)
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    //logout 
    const logout = async () => {
        try {
            await axios.delete("/api/me")
            setIsAuth(false)
            setUserDetails(null)
            router.push("/login")
        } catch (error) {
            console.log("Error in loggin out...", error)
        }

    }


    return <AppDataContext.Provider value={{ loading, setLoading, loginUser, isAuth, userDetails, registerUser, error, fetchUser, logout }}>
        {children}
    </AppDataContext.Provider>
}

export const useAppData = () => {
    const context = useContext(AppDataContext)
    if (!context) throw new Error("App context not found")
    return context
}