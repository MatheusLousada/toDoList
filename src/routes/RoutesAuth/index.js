import {createNativeStackNavigator} from '@react-navigation/native-stack'
import NaoConcluidas from '../../screens/NaoConcluidas';
import Adicionar from '../../screens/Adicionar';
import Concluidas from '../../screens/Concluidas';

const Stack = createNativeStackNavigator();

export default function RoutesAuth(){
    return(
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#363636',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        >
            <Stack.Screen
                name='Não Concluídas'
                component={NaoConcluidas}
            />
            <Stack.Screen
                name='Adicionar'
                component={Adicionar}
            />
            <Stack.Screen
                name='Concluídas'
                component={Concluidas}
            />
        </Stack.Navigator>
    )
}