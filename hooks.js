import {useState} from 'react'
import {StyleSheet} from 'react-native'
import {sinify, divideScale} from './util'
export const useAnimatedScale = (scGap = 0.02, delay = 20) {
    const [scale, setScale] = useState(0)
    const [animated, setAnimated] = useState(false)
    
    return {
        scale,
        start() {
            if (!animated) {
                setAnimated(true)
                let currScale = scale 
                const interval = setInterval(() => {
                    currScale += scGap 
                    setScale(currScale)
                    if (currScale > 1) {
                        setScale(0)
                        setAnimated(false)
                        clearInterval(interval)
                    }
                }, delay)
            }
        }
    }
}

export const useStyle = (scale, i, x, y, size, d) => {   
    const sf = sinify(scale)
    const sfi = divideScale(sf, i, 3)
    return StyleSheet.create({
        sidemoveblock: {
            width : size,
            height : size / 5,
            position: 'absolute',
            top : x - d * (1 - 2 * i) * sfi,
            left : y,
            backgroundColor: 'green'
        }
    })
}