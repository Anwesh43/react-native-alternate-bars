import React, {useEffect} from 'react'
import {useAnimatedScale, useStyle} from './hooks'
import {View} from 'react-native'

const SideMoveBlock = ({i, scale, x, y, size, d, onTap}) => {
    const {sidemoveblock} = useStyle(scale, i, x, y, size, d)
    // if (scale > 0.5 && scale < 0.55) {
    //     alert(JSON.stringify(sidemoveblock) + "" + d);
    // }
    return <View style = {sidemoveblock} onTouchStart = {onTap}>
    </View>
    
}

const SideMoveBlockContainer = ({x, y, size, d}) => {
    const {scale, start} = useAnimatedScale(0.02, 20)
    
    console.log(scale)
    return <View>
        {[0, 1].map(i => <SideMoveBlock onTap = {start} key = {`sidemove_${i}`} i = {i} x = {x} y = {y + i * size / 5} size = {size} d = {d} scale = {scale}/>)}
    </View>
} 

export default SideMoveBlockContainer