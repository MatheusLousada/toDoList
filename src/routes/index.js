import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Welcome from '../pages/Welcome';

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#f44033',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        >
            <Stack.Screen
                name='Welcome'
                component={Welcome}
            />
        </Stack.Navigator>
    )
}