import React from 'react';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';

import Feedback from './feedback';

describe('<Feedback/>', () => {
	it('Renders Feedback without crashing', () => {
		shallow(<Feedback/>)		
	});
});