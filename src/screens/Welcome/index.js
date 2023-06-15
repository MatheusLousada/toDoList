import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { Container } from '../../components/Container'

export default function Welcome() {
    const navigation = useNavigation();
    return (
        <Container>
            <View>
            <Animatable.Image
                animation={'flipInY'}
                source={require('../../assets/quiz-logo.png')}
            />
            </View>
            <Animatable.View delay={600} animation='fadeInUp'>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('Signin')}
                >
                    <Text>Acessar</Text>
                </TouchableOpacity>
            </Animatable.View>
        </Container>
    );
}