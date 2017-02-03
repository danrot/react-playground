// @flow

import React from 'react';
import styles from './button.css';
import classnames from 'classnames';

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

export default class Button extends React.Component {
    props: Props;

    static defaultProps = {
        state: 'normal',
        size: 'medium'
    };

    render() {
        const classNames = [
            styles.button,
            styles['button-' + this.props.state],
            styles['button-' + this.props.size]
        ];

        return <button className={classnames(classNames)} onClick={this.props.onClick}>
            {this.props.text}
        </button>;
    }
}
