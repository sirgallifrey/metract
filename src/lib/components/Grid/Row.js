import React from 'react';
import styled from 'styled-components';

const RowBase = styled.div`
	zoom: 1;
	list-styleType: none;
	padding: 0;
	margin: 0;
	margin-left: -${props => props.theme.grid.cellPadding / props.theme.defaults.fontSize}rem;
	margin-right: -${props => props.theme.grid.cellPadding / props.theme.defaults.fontSize}rem;
	&, &:after, &:before {
		box-sizing: border-box;
	}
	&:after, &:before {
		display: table;
		content: close-quote;
		line-height: 0;
	},
	&:after {
		clear: both;
	},
	& > & {
		clear: none;
		float: left;
		margin: 0!important; /*TODO: check it this is necessary*/
	}
`;

        
export default (props) => {

    const { className, ...rest } = props;
    return (
        <RowBase className={props.className} {...rest}>
            {props.children}
        </RowBase>
    );
};
