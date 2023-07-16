import {useState, useEffect, useContext, createContext} from 'react';


export const IsMobile = createContext(null);


export const MobileProvider = ({children})=>{
    const [isMobile,setIsMobile] = useState(false);
    useEffect(()=>{
        const mediaQuery = window.matchMedia('(max-width:767px)');
    
        setIsMobile(mediaQuery.matches);
        
        const handleMediaQueryChange = (event)=>{
            setIsMobile(event.matches);
        }
        mediaQuery.addEventListener('change',handleMediaQueryChange);

        return ()=> mediaQuery.removeEventListener('change',handleMediaQueryChange)
            
    },[]);
    

    return (
        <>
            <IsMobile.Provider value={isMobile}>
                {children}
            </IsMobile.Provider>
        </>
    )
}

