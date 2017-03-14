import React from 'react';

export default (key, stylesFn) => {
    return (target) => {
        const fn = (props, context) => {

            return target(props, context, context.MetractTheme.setRules(key, stylesFn));
        };
        fn.contextTypes = {

            MetractTheme: React.PropTypes.object
        };
        return fn;
    }
}