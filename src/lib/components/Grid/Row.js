import React from 'react';
import classNames from 'classnames';

const style = {
    'row': true        
};

export default (props) => {

    return (
        <div className={classNames(style, props.className)}>{props.children}</div>
    );
};
