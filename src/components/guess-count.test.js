import React from 'react';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';

import GuessCount from './guess-count';

describe('<GuessCount/>', () => {
	it('Renders GuessList without crashing.', () => {
		shallow(<GuessCount/>)
	});
});