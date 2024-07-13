import React from 'react'
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { StyleSheet, Image, Platform } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";

const account = () => {
    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
            headerImage={<Ionicons size={310} name="account" style={styles.headerImage} />}>
        </ParallaxScrollView >
    );
}

const styles = StyleSheet.create({
    headerImage: {
        color: '#808080',
        bottom: -90,
        left: -35,
        position: 'absolute',
    },
    titleContainer: {
        flexDirection: 'row',
        gap: 8,
    },
});

export default account