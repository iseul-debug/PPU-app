import {
    Dimensions,
    StyleSheet,
    View,
    SafeAreaView,
    TouchableOpacity,
    Text,
    Alert,
    useColorScheme,
} from "react-native";
import React, { useEffect, useRef } from "react";
import MapView, { Marker, Callout } from "react-native-maps";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Ionicons } from '@expo/vector-icons';

import { markers } from "../assets/markers";


const INITIAL_REGION = {
    latitude: 10.0299,
    longitude: 105.7699,
    latitudeDelta: 0.01,
    longitudeDelta:
        0.01 * (Dimensions.get("window").width / Dimensions.get("window").height),
};


export default function MapScreen({ navigation }) {
    const mapRef = useRef<MapView>();
    const theme = useColorScheme() ?? 'light';
    const backgroundColor = theme === 'light' ? "#fff" : "#000";
    const iconColor = theme === 'light' ? "#294B29" : "#EBF1DE";

    const focusMap = () => {
        const CTU = {
            latitude: 10.0299,
            longitude: 105.7699,
            latitudeDelta: 0.01,
            longitudeDelta:
                0.01 *
                (Dimensions.get("window").width / Dimensions.get("window").height),
        };
        mapRef.current?.animateToRegion(CTU);
    };
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ width: "100%", height: 22, position: "absolute", top: 0, backgroundColor: backgroundColor }}>
            </View>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                <View>
                    <Ionicons name="arrow-back" size={30} color={iconColor} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={focusMap}
                style={{
                    position: "absolute",
                    width: 70,
                    height: 70,
                    right: 10,
                    bottom: 20,
                    zIndex: 1000,
                    borderRadius: 100,
                    backgroundColor: "transparent",
                }}
            >
                <View style={{ padding: 15 }}>
                    <FontAwesome6 name="location-crosshairs" size={35} color={iconColor} />
                </View>
            </TouchableOpacity>
            <MapView
                style={styles.map}
                initialRegion={INITIAL_REGION}
                showsUserLocation={true}
                showsCompass={true}
                ref={mapRef}
            >
                {markers.map((marker, index) => (
                    <Marker key={index} coordinate={marker}>
                        <Callout>
                            <View style={{ padding: 10 }}>
                                <Text style={{ fontSize: 14 }}>{marker.name}</Text>
                            </View>
                        </Callout>
                    </Marker>
                ))}
            </MapView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: "100%",
        height: "100%",
    },
    backButton: {
        position: "absolute",
        top: 30,
        left: 5,
        zIndex: 10000,
        width: 35,
        height: 30,
    },
});