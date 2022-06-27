import { useRouter } from "next/router";
import axios from "axios";
import { useState, useContext, createContext } from "react";

const NavContext = createContext();

const useSystemMessanger = (event, defaultMessage = "Something went wrong") => {
    const [message, setMessage] = useState(defaultMessage);
    
    useEffect(async () => {
        const sendEventToAnalytics = async (event) => {
            const BASE_ANAYLTICS_API = process.env.BASE_ANAYLTICS_API
            
            let response = {
                message: "Something went wrong"
            }
        
            try {
                response = axios.post(`${BASE_ANAYLTICS_API}`,{
                    data: event
                });
        
            } catch (error) {
                
            }
        
            return response;
        }

        
        try {
            const analyticsResponse = await sendEventToAnalytics(event);
            setMessage('success, -->', analyticsResponse);
        } catch (error) {
            const analyticsResponse = await sendEventToAnalytics({...event, error: error});
            setMessage('failure, -->', analyticsResponse);
        }
    }, [event]);

    return message;
}


export const SystemMessangerProvider = (chidren) => {
    const message = useSystemMessanger();
    return (
    <NavContext.Provider value={message}>
        {children}
    </NavContext.Provider>
    )
}

export default function useSystemMessanger() {
    return useContext(NavContext);
}