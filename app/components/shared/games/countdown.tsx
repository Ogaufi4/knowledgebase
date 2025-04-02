import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import timeConverter from '@/app/utils/time/timeConverter'

const Countdown = ({ countdowntime, timerOver, setTimeTaken, completed }) => {
    const totaltime = countdowntime * 1000
    const [timerTime, setTimerTime] = useState(totaltime)
    const seconds = Math.floor((timerTime % 60000) / 1000)
    const milliseconds = Math.floor((timerTime % 1000) / 10)

    useEffect(() => {
        if (completed) return // Stop the timer if the quiz is completed

        const timer = setInterval(() => {
            const newTime = timerTime - 10

            if (newTime >= 0) {
                setTimerTime(newTime)
            } else {
                clearInterval(timer)
                timerOver()
            }
        }, 10)

        return () => {
            clearInterval(timer)
            setTimeTaken(totaltime - timerTime)
        }
    }, [timerTime, completed])

    return (
        <div className="flex items-center space-x-2">
            <div className="text-center">
                <div className="text-sm font-medium">Seconds</div>
                <div className="text-lg font-bold">{seconds}</div>
            </div>
            <div className="text-center">
                <div className="text-sm font-medium">Milliseconds</div>
                <div className="text-lg font-bold">{milliseconds}</div>
            </div>
        </div>
    )
}

Countdown.propTypes = {
    countdowntime: PropTypes.number.isRequired,
    timerOver: PropTypes.func.isRequired,
    setTimeTaken: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
}

export default Countdown