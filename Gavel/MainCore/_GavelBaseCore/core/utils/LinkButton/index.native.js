import { useLinkProps } from '@react-navigation/native';
import React from 'react';
import { Text } from 'react-native';
import Pressable from '@gavel/core/utils/Pressable';

function LinkButton({ to = null, action, children, text = true, ...rest }) {
    const { onPress, ...props } = useLinkProps({ to, action });
    const press = () => {
        if (rest.handlePress) {
            rest.handlePress();
        }
        onPress();
    };
    return (
        <React.Fragment>
            {text ? (
                <Pressable onPress={press} {...props}>
                    <Text {...rest}>{children}</Text>
                </Pressable>
            ) : (
                <Pressable onPress={press} {...props} {...rest}>
                    {children}
                </Pressable>
            )}
        </React.Fragment>
    );
}

export default React.memo(LinkButton);
