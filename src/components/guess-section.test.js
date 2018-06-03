import React from 'react';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';

import GuessSection from './guess-section';

describe('<GuessSection/>', () => {
	it('Renders GuessSection without crashing.', () => {
		shallow(<GuessSection/>)
	});
});