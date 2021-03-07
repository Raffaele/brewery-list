import { shallow } from 'enzyme';
import App from './App';

test('renders learn react link', () => {
  const shallowComponent = shallow(<App />);
  expect(shallowComponent).toBeDefined();
});
