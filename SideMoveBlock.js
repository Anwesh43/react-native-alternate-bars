import React from 'react'
import {useAnimatedScale, useStyle} from './hooks'
import {View} from 'react-native'

const SideMoveBlock = ({i, scale, x, y, size, d}) => {
    const {sidemoveblock} = useStyle(scale, i, x, y, size, d)
    return <View style = {sidemoveblock}>
    </View>
    
}

const SideMoveBlockContainer = ({x, y, size, d}) => {
    const {scale, start} = useAnimatedScale(0.02, 20)
    return <View onTouchEnd = {start}>
        {[0, 1].map(i => <SideMoveBlock i = {i} x = {x} y = {y + i * size / 5} size = {size} d = {d} scale = {scale}/>)}
    </View>
} 

export default SideMoveBlockContainer