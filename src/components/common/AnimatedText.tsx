import { keyframes } from '@emotion/react'
import React, { useEffect, useState } from 'react'

const blendAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateX(50%);
  }
  50% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(-50%);
  }
`

const AnimatedString = ({ x }) => {

    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                const nextIndex = (prevIndex + 1) % x.length
                return nextIndex
            })
        }, 5000) // Change the duration as per your preference

        return () => {
            clearInterval(intervalId)
        }
    }, [x])

    return (
        <div>
            {x.map((element, index) => (
                <span
                    key={index}
                    style={{
                        animation: index === currentIndex ? `${blendAnimation} 2s ease-in-out` : 'none',
                        display: index === currentIndex ? 'inline' : 'none',
                    }}
                >
                    {element}
                </span>
            ))}
        </div>
    )
}

export default AnimatedString
