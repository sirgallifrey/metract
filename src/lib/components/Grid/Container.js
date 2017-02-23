import React from 'react';
import classnames from 'classnames';

const style = {
    'container': true        
};

export default (props) => {

    return (
        <div className={classnames(style, props.className)}>{props.children}</div>
    );
};
