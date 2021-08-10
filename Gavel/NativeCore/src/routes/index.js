import React from 'react';
import { isReadyRef, navigationRef } from '@gavel/core/utils/NavigationStack';
import { NavigationContainer } from '@react-navigation/native';
import { config } from './config';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

/* 
    /***************************************************************************
     ************************ WELCOME PAGES CONFIG ROUTES ***********************
    ****************************************************************************
*/
import LandingPage from '../pages/LandingPage';
import NotFoundPage from '../pages/NotFoundPage';

const Stack = createNativeStackNavigator();

export default function Routes() {
    //Create a linking Object to pass to Navigation Container
    const linking = {
        prefixes: ['http://localhost:19006'],
        config,
    };

    React.useEffect(() => {
        return () => (isReadyRef.current = false);
    }, []);

    return (
        <NavigationContainer
            linking={linking}
            ref={navigationRef}
            onReady={() => {
                isReadyRef.current = true;
            }}
        >
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    stackAnimation: 'slide_from_right',
                }}
            >
                {/* 
                    /***************************************************************************
                     *********************** WELCOME PAGES CONFIG ROUTES ***********************
                    ****************************************************************************
                */}
                <Stack.Screen name="LandingPage" component={LandingPage} />
                <Stack.Screen name="NotFoundPage" component={NotFoundPage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
