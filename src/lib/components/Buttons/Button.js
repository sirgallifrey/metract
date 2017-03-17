import React from 'react';
import classNames from 'classnames';
import { themed } from '../../Theme';

export const getStyles = (conf, css, utils) => {

    const button = {};

    button.default = css({
        'backgroundColor': conf.defaults.Button.bgColor,
        'padding': `${conf.spacings['1']/conf.defaults.fontSize}rem ${conf.spacings['2']/conf.defaults.fontSize}rem`,
        'borderRadius': conf.defaults.borderRadius,
        'borderColor': conf.defaults.Button.borderColor,
        'borderStyle': 'solid',
        'borderWidth': conf.defaults.Button.borderWidth,
        'color': conf.defaults.Button.color,
        '&:focus': {
            'outline': 'none',
            'boxShadow': `0 0 0.01pt 1px ${utils.shadeColor(conf.defaults.Button.bgColor, -0.25)}`,
        },
        '&:active': {
            'backgroundColor': utils.shadeColor(conf.defaults.Button.bgColor, -0.08),
            'boxShadow': `0 0 0.01pt 1px ${utils.shadeColor(conf.defaults.Button.bgColor, -0.25)}`,
            'outline': 'none'
        },
        '&:active:focus': {
            'boxShadow': `${conf.shadowsInset['2']}, 0 0 0.01pt 1px ${utils.shadeColor(conf.defaults.Button.bgColor, -0.25)}`,
            'outline': 'none'
        }
    });

    const buttonColorMixin = (bgColor, color) => ({
        'backgroundColor': bgColor,
        'borderColor': utils.shadeColor(bgColor, -0.15),
        'color': color,
        '&:active': {
            'backgroundColor': utils.shadeColor(bgColor, -0.15)
        },
        '&:focus': {
            'outline': 0,
            'boxShadow': conf.defaults.outline
        },
        '&:active:focus': {
            'boxShadow': `${conf.shadowsInset['2']}, 0 0 0.01pt 1px ${utils.shadeColor(bgColor, -0.25)}`,
        }
    });

    //TODO: font size and padding could come from configs also
    button.big = css({
        'fontSize': '1.25rem',
        'padding': `${conf.spacings['2']/conf.defaults.fontSize}rem ${conf.spacings['3']/conf.defaults.fontSize}rem`,
    });

    button.block = css({
        'width': '100%'
    });
    
    button.colors = {};
    Object.keys(conf.defaults.Button.colors).forEach((name) => {

        const def = conf.defaults.Button.colors[name];
        button.colors[name] = css(buttonColorMixin(def.bgColor, def.color));
    });

    return button;
};

const Button = (props) => {

    const { className, color, big, block, rules, ...rest } = props;

    let _classNames = classNames({
        [props.rules.default]: true,
        [props.rules.colors[props.color]]: color,
        [props.rules.big]: big,
        [props.rules.block]: block,
        className
    });

    return (
        <button className={_classNames} {...rest}>
            {props.children}
        </button>
    );
};

export default themed('Button', getStyles)(Button);