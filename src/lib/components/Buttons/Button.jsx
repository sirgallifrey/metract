import React from 'react';
import classnames from 'classnames';

export default (props) => {

    const styles = {
        'button': true,
        'button--big': props.big || false,
        'button--block': props.block || false,
        'button--theme-danger': props.theme === 'danger',
        'button--theme-warning': props.theme === 'warning'
    }

    return (
        <button className={classnames(styles, props.className)} onClick={props.onClick}>
            {props.children}
        </button>
    );
}