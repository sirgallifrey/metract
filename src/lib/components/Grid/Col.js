import React from 'react';
import classnames from 'classnames';
import { themed } from '../../Theme';

export const getStyles = (conf, css, util) => {

    const rules = {};

    rules.col = css({
        float: 'left',
        width: '100%',
        minHeight: '1px',
        paddingLeft: `${conf.grid.cellPadding / conf.defaults.fontSize}rem`,
        paddingRight: `${conf.grid.cellPadding / conf.defaults.fontSize}rem`,
        userSelect: 'none',
        '&, &:after, &:before': {
            boxSizing: 'border-box'
        }
    });

    rules.breakpoints = {};
    Object.keys(conf.breakpoints).forEach((bp) => {

        rules.breakpoints[bp] = {};
        for (let i = 1; i <= conf.grid.base; i ++ ) {

            rules.breakpoints[bp][i] = css({
                [`@media(min-width: ${conf.breakpoints[bp]}px)`]: {
                    width: `${(i / conf.grid.base) * 100}%`
                }
            });
        }

    });
    return rules;
}

export default themed('Col', getStyles)((props) => {
    
    const breakpoints = {};
    ['l', 'm', 's', 'xs', 'xxs'].forEach((bp) => {

        if (props[bp]) {
            breakpoints[props.rules.breakpoints[bp][props[bp]].toString() ] = true;
        }
    });

    const { rules, className, l, m, s, xs, xxs, ...rest } = props;
    return (
        <div className={classnames(props.rules.col.toString(), breakpoints, props.className)} {...rest}>
            {props.children}
            </div>
    );
});
