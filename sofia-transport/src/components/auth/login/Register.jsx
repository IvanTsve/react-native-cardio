import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Register() {
  function register() {
    // TODO: call your API here
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={global.commonStyles.container}>
        <View style={{ alignItems: 'center', marginTop: 40, marginBottom: 20 }}>
          <View
            style={global.commonStyles.iconShadow}
          >
            <MaterialCommunityIcons name="account-plus" size={120} color="#1d4ed8" />
          </View>
          <Text numberOfLines={1} style={global.commonStyles.title}>
            Create Account
          </Text>
        </View>

        <View
          style={[
            global.commonStyles.inputWrapper,
            { marginLeft: 20, gap: 15, backgroundColor: 'white', padding: 20, borderRadius: 35 },
          ]}
        >
          <View>
            <Text style={global.commonStyles.inputLabel}>First name</Text>
            <TextInput
              style={global.commonStyles.input}
              placeholder="John"
              placeholderTextColor="#93c5fd"
            />
          </View>

          <View>
            <Text style={global.commonStyles.inputLabel}>Last name</Text>
            <TextInput
              style={global.commonStyles.input}
              placeholder="Doe"
              placeholderTextColor="#93c5fd"
            />
          </View>

          <View>
            <Text style={global.commonStyles.inputLabel}>Email</Text>
            <TextInput
              style={global.commonStyles.input}
              placeholder="you@example.com"
              keyboardType="email-address"
              autoCapitalize="none"
              placeholderTextColor="#93c5fd"
            />
          </View>

          <View>
            <Text style={global.commonStyles.inputLabel}>Password</Text>
            <TextInput
              style={global.commonStyles.input}
              secureTextEntry
              placeholder="password"
              placeholderTextColor="#93c5fd"
            />
          </View>

          <View>
            <Text style={global.commonStyles.inputLabel}>Confirm password</Text>
            <TextInput
              style={global.commonStyles.input}
              secureTextEntry
              placeholder="repeat password"
              placeholderTextColor="#93c5fd"
            />
          </View>

          <View>
            <TouchableOpacity style={global.commonStyles.fancyButton} onPress={register}>
              <Text style={{ color: 'white', fontWeight: '600', fontSize: 16 }}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}