import { useRef, useState} from "react";

export function useTimer(){
    const [timer,setTimer] = useState(0);
    const [isRunning,setIsRunning] = useState(false)
    const count = useRef();

    function startTimer(){
        if (!isRunning) {
            setIsRunning(true);
            count.current = setInterval(() => {
                setTimer(prev => prev + 1);
            }, 1000);
        }
    };
    function stopTimer(){
        clearInterval(count.current);
        setIsRunning(false);
    };

    function resetTimer(){
        clearInterval(count.current);
        setTimer(0)
        setIsRunning(false);
    };
    
    return[timer,isRunning,startTimer,stopTimer,resetTimer];

}