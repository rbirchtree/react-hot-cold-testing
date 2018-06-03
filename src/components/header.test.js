import React from 'react';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';

import Header from './header';

describe('<Header/>', () => {
	it('Renders Header without crashing.', () => {
		shallow(<Header/>)
	});
});