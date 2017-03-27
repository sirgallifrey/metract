import React from 'react';
import styled from 'styled-components';

const ContainerBase = styled.div`
	box-sizing: border-box;
	margin: auto;
	padding-left: ${props => props.theme.grid.cellPadding / props.theme.defaults.fontSize}rem;
	padding-right: ${props => props.theme.grid.cellPadding / props.theme.defaults.fontSize}rem;
`;

const Container = (props) => {

    const { className, ...rest } = props;
    return (
        <ContainerBase className={props.className} {...rest}>
            {props.children}
        </ContainerBase>
    );
};

export default Container;
