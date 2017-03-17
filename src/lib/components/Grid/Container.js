import React from 'react';
import classnames from 'classnames';
import { themed } from '../../Theme';

export const getStyles = (conf, css) => {

    return css({
        boxSizing: 'border-box',
        margin: 'auto',
        paddingLeft: `${conf.grid.cellPadding / conf.defaults.fontSize}rem`,
        paddingRight: `${conf.grid.cellPadding / conf.defaults.fontSize}rem`,
    });
}

const Container = (props) => {

    const { rules, className, ...rest } = props;
    return (
        <div className={classnames(props.rules.toString(), props.className)} {...rest}>
            {props.children}
        </div>
    );
};

export default themed('Container', getStyles)(Container);
