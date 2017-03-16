import React from 'react';

export default (key, stylesFn) => {
    return (target) => {
        const fn = (props, context) => {

            if (props.rules) {
                throw new Error('rules props should be reserved in themed components');
            }
            const newProps = Object.assign({}, props, { rules: context.MetractTheme.setRules(key, stylesFn) });
            return target(newProps, context);
        };
        fn.contextTypes = {

            MetractTheme: React.PropTypes.object
        };
        return fn;
    }
}