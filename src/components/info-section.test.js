import React from 'react';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';

import InfoSection from './info-section';

describe('<InfoSection/>', () => {
	it('Renders InfoSection without crashing.', () => {
		shallow(<InfoSection/>)
	});
});