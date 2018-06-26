import React from 'react';
import { AboutScreen } from '../pages/AboutScreen';
import renderer from 'react-test-renderer';


test('renders correctly', () => {
    const tree = renderer.create(<AboutScreen />).toJSON();
    expect(tree).toMatchSnapshot();
});