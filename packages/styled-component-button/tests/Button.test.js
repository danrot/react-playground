import React from 'react';
import {shallow} from 'enzyme';
import Button from '../src/Button';

test('Click callback fires', () => {
    const clickSpy = jest.fn();
    const button = shallow(<Button onClick={clickSpy}/>);

    button.simulate('click');

    expect(clickSpy).toBeCalled();
});
