import React from 'react';
import classNames from 'classnames';
import { themed } from '../../Theme';

const getStyles = (conf, css, util) => {

    return css({
        zoom: 1,
        listStyleType: 'none',
        padding: 0,
        margin: '0',
        marginLeft: `-${conf.grid.cellPadding / conf.defaults.fontSize}rem`,
        marginRight: `-${conf.grid.cellPadding / conf.defaults.fontSize}rem`,
        '&, &:after, &:before': {
            'boxSizing': 'border-box'
        },
        '&:after, &:before': {
            display: 'table',
            content: 'close-quote',
            lineHeight: 0
        },
        '&:after': {
            clear: 'both'
        },
        '& > &': {
            clear: 'none',
            float: 'left',
            margin: '0!important' //TODO: check it this is necessary
        }
    });
};

export default themed('Row', getStyles)((props) => {

    const { rules, className, ...rest } = props;
    return (
        <div className={classNames(props.rules.toString(), props.className)} {...rest}>
            {props.children}
        </div>
    );
});
