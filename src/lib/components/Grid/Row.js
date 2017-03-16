import React from 'react';
import classNames from 'classnames';
import { themed } from '../../Theme';

const getStyles = (conf, util, css) => {

    return css({
        zoom: 1,
        listStyleType: 'none',
        padding: 0,
        margin: 0,
        '&, &:after, &:before': {
            'boxSizing': 'border-box'
        },
        '&:after, &:before': {
            display: 'table',
            content: '',
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

    return (
        <div className={classNames(props.rules.toString(), props.className)}>
            {props.children}
        </div>
    );
});
