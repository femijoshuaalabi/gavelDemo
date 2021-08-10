import React from 'react';
import { Pressable as NativePressable, Animated } from 'react-native';

function Pressable({ style, children, ...props }) {
    const animatedValue = new Animated.Value(1);

    const handlePressIn = () => {
        Animated.spring(animatedValue, {
            toValue: 0.98,
            useNativeDriver: true,
        }).start();
    };

    const handlePressOut = () => {
        Animated.spring(animatedValue, {
            toValue: 1,
            useNativeDriver: true,
        }).start();
    };

    const animatedStyle = {
        transform: [{ scale: animatedValue }],
    };

    return (
        <Animated.View style={[animatedStyle]}>
            <NativePressable style={style} onPressIn={handlePressIn} onPressOut={handlePressOut} {...props}>
                {children}
            </NativePressable>
        </Animated.View>
    );
}

export default React.memo(Pressable);
