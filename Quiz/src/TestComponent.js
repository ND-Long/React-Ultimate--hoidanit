import React, { useState, useEffect } from 'react';

const roadWidth = 400;
const carWidth = 50;
const carHeight = 100;
const obstacleWidth = 50;
const obstacleHeight = 50;

function Game() {
    const [carX, setCarX] = useState(0);
    const [obstacleX, setObstacleX] = useState(0);
    const [obstacleY, setObstacleY] = useState(0);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft') {
                setCarX((x) => x - 10);
            } else if (e.key === 'ArrowRight') {
                setCarX((x) => x + 10);
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    useEffect(() => {
        const updateObstacle = () => {
            setObstacleY((y) => y + 10);
        };

        const obstacleInterval = setInterval(() => {
            updateObstacle();
        }, 50);

        return () => {
            clearInterval(obstacleInterval);
        };
    }, []);

    useEffect(() => {
        const checkCollision = () => {
            if (obstacleX < carX + carWidth && obstacleX + obstacleWidth > carX && obstacleY < carHeight) {
                setGameOver(true);
            }
        };

        checkCollision();
    }, [obstacleX, obstacleY, carX]);

    useEffect(() => {
        if (!gameOver) {
            const scoreInterval = setInterval(() => {
                setScore((score) => score + 1);
            }, 100);

            return () => {
                clearInterval(scoreInterval);
            };
        }
    }, [gameOver]);

    useEffect(() => {
        if (gameOver) {
            alert(`Game over! Your score is ${score}.`);
        }
    }, [gameOver, score]);

    const handleRestart = () => {
        setCarX(0);
        setObstacleX(Math.floor(Math.random() * (roadWidth - obstacleWidth)));
        setObstacleY(0);
        setScore(0);
        setGameOver(false);
    };

    return (
        <div>
            <div style={{ position: 'relative', width: roadWidth, height: 600, border: '1px solid black' }}>
                <div style={{ position: 'absolute', left: carX, bottom: 0, width: carWidth, height: carHeight, backgroundColor: 'red' }}></div>
                {!gameOver && (
                    <div
                        style={{
                            position: 'absolute',
                            left: obstacleX,
                            top: obstacleY,
                            width: obstacleWidth,
                            height: obstacleHeight,
                            backgroundColor: 'green',
                        }}
                    ></div>
                )}
            </div>
            <div style={{ marginTop: 20 }}>
                <div>Score: {score}</div>
                {gameOver && (
                    <div>
                        <div>Game over!</div>
                        <button onClick={handleRestart}>Restart</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Game;