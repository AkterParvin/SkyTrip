
import { useEffect } from 'react';
import { useState } from 'react';
import Confetti from 'react-confetti'
import { FaMoneyBillAlt } from 'react-icons/fa';

const ReactConfetti = () => {
    const [windowSize, setWindowSize] = useState({ window: window.innerWidth, height: window.innerHeight })
    const [showEffect, setShowEffect] = useState(false);
    const detectSize = () => {
        setWindowSize({ window: window.innerWidth, height: window.innerHeight });
    }

    useEffect(() => {
        window.addEventListener("resize", detectSize);
        return () => {
            window.removeEventListener("resize", detectSize);
        }
    }, []);
    const handleEffect = () => {
        setShowEffect(true);
        setTimeout(() => {
            setShowEffect(false)
        }, 6000);
    };
    return (
        <div>
            <button onClick={handleEffect} className="relative  items-center justify-start inline-block px-5 py-2 overflow-hidden font-medium transition-all bg-[#60724d] rounded-xl hover:bg-white group">
                <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-300 transition-all border-[#946667] rounded-xl"></span>
                <span className="relative w-full text-sm text-left text-gray-100 transition-colors duration-500 ease-in-out group-hover:text-white flex items-center justify-center gap-1 font-semibold">
                    <FaMoneyBillAlt color='#fff' size="20px" /> <p>Apply</p></span>
            </button>
            {/* <button onClick={handleEffect}> Confettie Run</button> */}
            {showEffect && (<Confetti
                width={windowSize.width}
                height={windowSize.height}
                tweenDuration={1000}
            />)}
        </div>
    );
};

export default ReactConfetti;