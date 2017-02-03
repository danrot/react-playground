// @flow

import React from 'react';
import {render} from 'react-dom';
import {injectGlobal} from 'styled-components';
import Button from '../src/Button';

injectGlobal`
    body {
        font-family: Helvetia;
    }
`;

function test() {
    alert('test');
}

render(<div>
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
