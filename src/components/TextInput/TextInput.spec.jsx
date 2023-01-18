import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TextInput } from '.';

describe('<TextInput />', () => {
  it('should have a value of searchValue', () => {
    const fn = jest.fn();
    render(<TextInput handleChange={fn} searchValue={'test'} />);

    const input = screen.getByPlaceholderText(/type your search/i);

    expect(input.value).toBe('test');
  });

  it('should call handleChange function on each key press', () => {
    const fn = jest.fn();
    render(<TextInput handleChange={fn} searchValue={''} />);

    const input = screen.getByPlaceholderText(/type your search/i);
    const value = 'the value';

    userEvent.type(input, value);

    expect(input.value).toBe('');
    expect(fn).toHaveBeenCalledTimes(value.length);
  });

  it('should match snapshot', () => {
    const fn = jest.fn();

    const { container } = render(<TextInput handleChange={fn} searchValue={''} />);

    expect(container).toMatchSnapshot();
  });
});
