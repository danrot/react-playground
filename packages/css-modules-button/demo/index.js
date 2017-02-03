// @flow

import React from 'react';
import {render} from 'react-dom';
import Button from '../src/Button';

import styles from './style.css';

function test() {
    alert('test');
}

render(<div className={styles.main}>
    <p>
        <Button text="Übernehmen" onClick={test} size="small"/>
    </p>
    <p>
        <Button text="Übernehmen" onClick={test} size="medium" state="warning"/>
    </p>
    <p>
        <Button text="Übernehmen" onClick={test} size="large" state="disabled"/>
    </p>
</div>, document.getElementById('app'));

