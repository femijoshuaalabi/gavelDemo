import { Link } from 'react-router-dom';
import React from 'react';
import { View } from 'react-native';

function LinkButton({ to = null, children, direction = 'colunm', ...rest }) {
    return (
        <View {...rest}>
            <Link
                to={to}
                style={{
                    width: '100%',
                    height: '100%',
                    ...(direction === 'row' && {
                        justifyContent: 'center',
                        alignItems: 'center',
                        display: 'flex',
                    }),
                }}
            >
                {children}
            </Link>
        </View>
    );
}

export default React.memo(LinkButton);
