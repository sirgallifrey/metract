import React from 'react';
import styled from 'styled-components';

const applyBreakpoints = (props) => {

	let rules = '';

	Object.keys(props.theme.breakpoints).forEach((bp) => {

        if (props[bp]) {
			rules += `
				@media(min-width: ${props.theme.breakpoints[bp]}px) {
                    width: ${(props[bp] / props.theme.grid.base) * 100}%;
                }
			`;
		}
    });
	return rules;
};

const BaseCol = styled.div`
	float: left;
	width: 100%;
	min-height: 1px;
	padding-left: ${props => props.theme.grid.cellPadding / props.theme.defaults.fontSize}rem;
	padding-right: ${props => props.theme.grid.cellPadding / props.theme.defaults.fontSize}rem;
	user-select: none;

	&, &:after, &:before {
		box-sizing: border-box;
	}
	${props => applyBreakpoints(props)}
`;

export default (props) => {

    const { className, ...rest } = props;
    return (
        <BaseCol className={props.className} {...rest}>
            {props.children}
		</BaseCol>
    );
};
