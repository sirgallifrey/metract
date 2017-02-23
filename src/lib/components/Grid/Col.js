import React from 'react';
import classnames from 'classnames';

export default (props) => {

    const style = {
        'row__col': true,        
        [`row__col--${props.size}`]: typeof props.size !== undefined
    };

    ['l', 'm', 's', 'xs'].forEach((bp) => {

        if (props[bp]) {
            style[`row__col--${bp}-${props[bp]}`] = true;
        }
    });
    

    return (
        <div className={classnames(style, props.className)}>{props.children}</div>
    );
};
