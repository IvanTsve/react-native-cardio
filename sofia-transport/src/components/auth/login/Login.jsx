import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
    const navigation = useNavigation();

    function signIn() {


    }

    return (
        <View style={global.commonStyles.container}>
            <ScrollView>

                <View style={{ alignItems: 'center', marginTop: 40, marginBottom: 20 }}>
                    <View style={global.commonStyles.iconShadow}>
                        <MaterialCommunityIcons name="bus" size={150} color="#1d4ed8" />
                    </View>
                    <Text numberOfLines={1} style={global.commonStyles.title}>Sofia Transport</Text>
                </View>
                <View style={[global.commonStyles.inputWrapper, { marginLeft: 20, gap: 15, backgroundColor: 'white', padding: 20, borderRadius: 35 }]}>
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
                    <View >
                        <TouchableOpacity
                            style={global.commonStyles.fancyButton}
                            onPress={signIn}
                        >
                            <Text style={{ color: 'white', fontWeight: '600', fontSize: 16 }}>
                                Sign In
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <Text>
                            Don't have an account?{' '}
                            <Text
                                style={{ color: '#1d4ed8', fontWeight: 'bold' }}
                                onPress={() => navigation.navigate('Register')}
                            >
                                Create Account
                            </Text>
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}