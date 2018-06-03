import React from 'react';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';

import StatusSection from './status-section';

describe('<StatusSection/>', () => {
	it('Renders StatusSection without crashing.', () => {
		shallow(<StatusSection/>)
	});
});