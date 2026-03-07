import React from "react";
import { View, StyleSheet, Text } from "react-native";
import MapView, { UrlTile } from "react-native-maps";

export default function Map() {
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 42.6977,
                    longitude: 23.3219,
                    latitudeDelta: 0.02,
                    longitudeDelta: 0.02,
                }}
            >
                <UrlTile
                    urlTemplate="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
                    maximumZ={19}
                    subdomains={["a", "b", "c", "d"]}
                />

            </MapView>
            <Text
                style={{
                    position: "absolute",
                    bottom: 5,
                    right: 5,
                    fontSize: 10,
                    backgroundColor: "rgba(255,255,255,0.7)",
                    padding: 2
                }}
            >
                © OpenStreetMap contributors
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    },
    map: {
        flex: 1,
    },
});