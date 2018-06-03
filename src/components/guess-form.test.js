import React from 'react';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';

import GuessForm from './guess-form';

describe('<GuessForm/>', () => {
	it('Renders GuessForm without crashing', () =>{
		shallow(<GuessForm/>)
	});

	it('Renders a class',()=> {
		const wrapper = shallow(<input/>);
		expect(wrapper.hasClass('text')).toEqual(true);
	})
});