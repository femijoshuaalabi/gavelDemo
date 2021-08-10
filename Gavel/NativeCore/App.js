import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { colors } from '@gavel/core/typo';
import Routes from './src/routes';

const App = () => (
    <SafeAreaProvider>
        <StatusBar backgroundColor={colors.defaultColor} barStyle="light-content" />
        <Routes />
    </SafeAreaProvider>
);
export default App;
