import * as React from 'react';
import { useNavigation, useRoute, StackActions, useIsFocused } from '@react-navigation/native';

export const isReadyRef = React.createRef();
export const navigationRef = React.createRef();
export const navigation = navigationRef?.current;

export const useNavigationState = () => {
    const navigation = useNavigation();
    const routes = useRoute();
    const isFocused = useIsFocused();
    const route = routes.params;
    return { navigation, route, routes, isFocused };
};

export const useRouteState = () => {
    const route = useRoute();
    return route.params;
};

export const useNavigate = (routeName, routeUri) => {
    if (isReadyRef.current && navigationRef && navigationRef.current) {
        // Perform navigation if the app has
        navigationRef?.current.navigate(routeName);
    }
};

export const push = (routeName, params, ...args) => {
    if (isReadyRef.current && navigationRef && navigationRef.current) {
        // Perform navigation if the app has mounted
        const prev = navigationRef.current.getCurrentRoute().name;
        const toRouteName = params.screen ? params.screen : routeName;
        if (prev !== toRouteName) {
            navigationRef.current.dispatch(StackActions.push(routeName, params, ...args));
        }
    }
};

export const goBack = (...args) => {
    if (isReadyRef.current && navigationRef && navigationRef.current) {
        // Perform navigation if the app has mounted
        navigationRef.current.goBack(...args);
    }
};

export const pop = (...args) => {
    if (isReadyRef.current && navigationRef && navigationRef.current) {
        // Perform navigation if the app has mounted
        navigationRef.current?.dispatch(StackActions.pop(...args));
    }
};

export const popToTop = (...args) => {
    if (isReadyRef.current && navigationRef && navigationRef.current) {
        // Perform navigation if the app has mounted
        navigationRef.current?.dispatch(StackActions.popToTop(...args));
    }
};

export const reset = (...args) => {
    if (isReadyRef.current && navigationRef && navigationRef.current) {
        // Perform navigation if the app has mounted
        navigationRef.current?.reset(...args);
    }
};
