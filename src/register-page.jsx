import {fireEvent, render, screen} from '@testing-library/react';
import Login from './register-page';


test('should render register page successfully', () => {
  render(<Login />);
  const heading = screen.getByText('Register to your free Herm account')
  expect(heading).toBeInTheDocument();

  const IP4Email = screen.getByRole('input',{name:'Email'})
  const IP4Pass = screen.getByRole('input',{name:'Password'})
  const Nname = screen.getByRole('input',{name:'Name'})

  expect(IP4Email).toBeInTheDocument()
  expect(IP4Pass).toBeInTheDocument()
  expect(Nname).toBeInTheDocument()

  fireEvent.change(IP4Email, {target: {value: 'abc@abc.com'}})
  fireEvent.change(IP4Pass, {target: {value: 'password123'}})
  fireEvent.change(Nname, {target: {value: 'Anvitha'}})

  expect(IP4Email).toHaveValue('abc@abc.com')
  expect(IP4Pass).toHaveValue('password123')
  expect(Nname).toHaveValue('Anvitha')

  let submitButton =screen.getByText('Get started')
  expect(submitButton).toBeInTheDocument()
});
