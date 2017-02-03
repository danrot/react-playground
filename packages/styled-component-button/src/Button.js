// @flow

import React from 'react';
import styled from 'styled-components';

type Size =
    | 'small'
    | 'medium'
    | 'large';

type State =
    | 'disabled'
    | 'warning'
    | 'normal';

type Props = {
    text: string,
    size?: Size,
    onClick?: () => void,
    state?: State
};

const size = {
    small: 1,
    medium: 2,
    large: 3
};

const state = {
    disabled: '#aaa',
    warning: '#f00',
    normal: '#52b6ca'
};

const StyledButton = styled.button`
    background-color: ${props => state[props.state]};
    color: #fff;
    border: none;
    outline: none;
    font-size: ${props => 10 * size[props.size]}px;
    padding: ${props => 4 * size[props.size]}px ${props => 8 * size[props.size]}px;
    border-radius: 3px;
`;

export default class Button extends React.Component {
    props: Props;

    static defaultProps = {
        state: 'normal',
        size: 'medium'
    };

    handleClick = () => {
        if (this.props.state === 'disabled') {
            return;
        }

        if (!this.props.onClick) {
            return;
        }

        this.props.onClick();
    }

    render() {
        return <StyledButton
            onClick={this.handleClick}
            size={this.props.size}
            state={this.props.state}>
                {this.props.text}
        </StyledButton>;
    }
}

