import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

export const useNavigationState = () => {
    const routes = {};
    const route = useParams();
    const history = useHistory();
    const [focus, setFocus] = useState();

    useEffect(() => {
        return history.listen((location) => {
            location.time = Date.now();
            setFocus(location);
        });
    }, []);

    const isFocused = focus;
    const navigation = {
        navigate: (routeName, routeUri) => history.push(routeUri),
        push: (routeName, routeUri) => history.push(routeUri),
        pop: (routeName, routeUri) => history.push(routeUri),
        goBack: () => history.goBack(),
    };
    return { navigation, routes, route, isFocused };
};

export const useRouteState = () => {
    const route = useParams();
    return route;
};

export const navigate = (routeName, routeUri) => {
    return (window.location.href = `${routeUri}`);
};

export const push = () => null;
