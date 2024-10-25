import { useState, useEffect } from 'react';
import NavigatorBar from '../../components/navbar'
import Layout from '../../components/layout'

export default function Game() {
    const [score, setScore] = useState(0);
    const [hp, setHp] = useState(10);
    const [gamingOrbs, setGamingOrbs] = useState([]);
    const [isGameOver, setIsGameOver] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);
    const [intervalTime, setIntervalTime] = useState(500); 

    useEffect(() => {
        if (hp === 0 && !isGameOver) {
            setGamingOrbs([]);
            setIsGameOver(true);
            return; // Stop the game when HP hits 0
        }

       const interval = setInterval(() => {
            if (isGameOver || !hasStarted) return;

            const x = Math.random() * 90; // Random left position (0-90%)
            const y = Math.random() * 85; // Random top position (0-90%)
            const id = Date.now();

            setGamingOrbs((prevOrbs) => [
                ...prevOrbs,
                {
                    id,
                    style: {
                        top: `${y}%`,
                        left: `${x}%`,
                        transform: 'scale(0)',
                        transition: 'transform 5s linear, background-color 1s 4s, opacity 0.5s ease-in-out 5.5s', // Change color immediately, grow linearly
                    }
                },
            ]);

            // Trigger the growth and color change after the orb is added
            setTimeout(() => {
                setGamingOrbs((prevOrbs) =>
                    prevOrbs.map((orb) =>
                        orb.id === id
                            ? { ...orb, style: { ...orb.style, transform: 'scale(1)', backgroundColor: 'red', opacity: 1 } }
                            : orb
                    )
                );
            }, 10);

            // Remove orbs
            setTimeout(() => {
                setGamingOrbs((prevOrbs) => {
                    const orb = prevOrbs.find((orb) => orb.id === id);
                    if (orb) {
                        setHp((prevHp) => Math.max(prevHp - 1, 0));
                    }
                    return prevOrbs.filter((orb) => orb.id !== id)
                });
            }, 6000);
        }, intervalTime);

        return () => clearInterval(interval); 
    }, [hp, gamingOrbs, isGameOver, hasStarted]);

    const handleOrbClick = (id) => {
        setGamingOrbs((prevOrbs) => prevOrbs.filter((orb) => orb.id !== id));
        setScore((prevScore) => prevScore + 1);
        if(score % 3 == 0){
            setIntervalTime((prevTime) =>
                Math.max(prevTime * 0.95, 50) // Cap minimum interval time
            );
        }
    };

    const resetGame = () => {
        setIntervalTime(500);
        setHp(10);
        setIsGameOver(false);
        setScore(0);
    };

    return (
        <Layout>
            <NavigatorBar />

            <div id="content" className="bg-gray-200" />
            <div className="px-2 md:px-4 lg:px-12 pt-32 pb-1 md:pb-4 lg:pb-12 bg-gray-200 min-h-screen h-screen">
                <div className="border-2 border-green-700 rounded-t-3xl h-full w-full m-0 p-0 relative bg-gray-300">
                    <div className="absolute left-4 font-bold text-green-700 text-3xl">Click the orbs</div>
                    <div className="absolute right-4 font-bold text-green-700 text-3xl">Score: {score}</div>
                    <div className="absolute bottom-0 health-bar bg-gray-400 h-6 w-full mt-4">
                        <div className="bg-red-500 h-full" style={{ width: `${hp * 10}%` }} />
                    </div>
                    {isGameOver && (
                        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40 rounded-t-3xl text-green-800 text-5xl z-50">
                            <div className="text-center">
                                <p className='py-2 font-bold'>Game Over</p>
                                <p className='py-2'>Score: {score}</p>
                                <button onClick={() => resetGame()} className='bg-green-900 text-gray-100 rounded-xl py-2 px-6 my-8 text-xl hover:bg-green-600'>Play again</button>
                            </div>
                        </div>
                    )}
                    {!hasStarted && (
                        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40 rounded-t-3xl text-green-800 text-5xl z-50">
                            <div className="text-center">
                                <button onClick={() => setHasStarted(true)} className='bg-green-900 text-gray-100 rounded-xl py-2 px-6 my-8 text-xl hover:bg-green-600'>Start the game</button>
                            </div>
                        </div>
                    )}
                    <div className="gaming-zone h-full w-full m-0 p-0 relative">
                        {gamingOrbs.map((orb) => (
                            <div
                                key={orb.id}
                                className="rounded-full bg-green-700 w-24 h-24 absolute cursor-pointer"
                                style={orb.style}
                                onClick={() => handleOrbClick(orb.id)}
                                onDragStartCapture={() => handleOrbClick(orb.id)}
                                onTouchStartCapture={() => handleOrbClick(orb.id)}
                            >
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
}