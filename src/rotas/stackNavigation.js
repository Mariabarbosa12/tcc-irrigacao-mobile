import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Entrada from '../telas/entrada';
import Login from '../telas/login';
import Cadastro from '../telas/cadastro'; 
import Home from '../telas/home'; 
import Grafico from '../telas/grafico'; 
import Perfil from '../telas/perfil'; 
import Chat from '../telas/chat';

const StackNavigation = createNativeStackNavigator();

export default function Drawer() {
    return (
        <StackNavigation.Navigator>
            <StackNavigation.Screen name="Entrada" component={Entrada} />
            <StackNavigation.Screen name="Login" component={Login} />
            <StackNavigation.Screen name="Cadastro" component={Cadastro} />
            <StackNavigation.Screen name="Home" component={Home} />
            <StackNavigation.Screen name="Grafico" component={Grafico} />
            <StackNavigation.Screen name="Perfil" component={Perfil} />
            <StackNavigation.Screen name="Chat" component={Chat} />
        </StackNavigation.Navigator>
    );
};