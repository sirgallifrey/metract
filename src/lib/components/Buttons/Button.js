import React from 'react';
import styled from 'styled-components';
import utils from '../../styleUtils';

const buttonColor = (props) => {

	const {bgColor, color} = props.theme.buttons.colors[props.color !== undefined ? props.color : 'default'];

	return `
        background-color: ${bgColor};
        border-color: ${utils.shadeColor(bgColor, -0.15)};
        color: ${color};

        &:active {
			box-shadow: ${props.theme.shadowsInset['2']};
			background-color: ${utils.shadeColor(bgColor, -0.15)};
			outline: none;
        }
        &:active:focus {
            box-shadow: ${props.theme.shadowsInset['2']}, ${props.theme.defaults.outline};
        }
    `};

const BaseButton = styled.button`
	background-color: pink;
	padding: ${ props => `${props.theme.spacings['1']/props.theme.defaults.fontSize}rem ${props.theme.spacings['2']/props.theme.defaults.fontSize}rem`};
    borderRadius: ${props => props.theme.defaults.borderRadius}px;
    borderStyle: solid;
    borderWidth: ${props => props.theme.buttons.borderWidth};
	outline: none;
	width: ${props => props.block !== undefined ? '100%' : 'initial'};
	&:focus {
		box-shadow: ${props => props.theme.defaults.outline};
	}
	${props => buttonColor(props)}

	${ props => {
		if (props.big === undefined) return;
		return `
		font-size: 1.25rem;
        padding: ${props.theme.spacings['2']/props.theme.defaults.fontSize}rem ${props.theme.spacings['3']/props.theme.defaults.fontSize}rem;
		`}
	}
`;

const Button = (props) => {

    return (
        <BaseButton {...props}>
            {props.children}
        </BaseButton>
    );
};

export default Button;