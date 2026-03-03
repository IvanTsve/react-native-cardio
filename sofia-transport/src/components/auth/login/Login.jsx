import React from 'react';
import { View, Text, TextInput } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ImageBackground } from 'react-native-web';


export default function LoginScreen() {

    return (
        <View style={global.commonStyles.container}>
            <View style={{ alignItems: 'center', marginTop: 40, marginBottom:20 }}>
                <View style={{ backgroundColor: '#93c5fd', borderRadius: 85, padding: 15, marginBottom: 20 }}>
                    <MaterialCommunityIcons name="bus" size={150} color="#1d4ed8" />
                </View>
                <Text numberOfLines={1} style={global.commonStyles.title}>Sofia Transport</Text>
            </View>
            <View style={[global.commonStyles.inputWrapper, { marginLeft: 20, gap: 15 }]}>
                <View>
                    <Text style={global.commonStyles.inputLabel}>Email</Text>
                    <TextInput
                        style={global.commonStyles.input}
                        placeholder="you@example.com"
                        placeholderTextColor="#93c5fd"
                    />
                </View>
                <View>
                    <Text style={global.commonStyles.inputLabel}>Password</Text>
                    <TextInput
                        secureTextEntry={true}
                        placeholder="password"
                        placeholderTextColor="#93c5fd"
                        style={global.commonStyles.input}
                    />
                </View>
            </View>
        </View>
    );
}