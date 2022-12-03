import {fireEvent, render, screen} from '@testing-library/react';
import Login from './login-page';


test('should render login page successfully', () => {
  render(<Login />);
  const title = screen.getByText('Log into your HermPDX account')
  expect(title).toBeInTheDocument();

  const emailInput = screen.getByRole('input',{name:'Email'})
  const passowrdInput = screen.getByRole('input',{name:'Password'})

  expect(emailInput).toBeInTheDocument()
  expect(passowrdInput).toBeInTheDocument()

  fireEvent.change(emailInput, {target: {value: 'abc@abc.com'}})
  fireEvent.change(passowrdInput, {target: {value: 'password123'}})

  expect(emailInput).toHaveValue('abc@abc.com')
  expect(passowrdInput).toHaveValue('password123')

  let submitButton =screen.getByText('Log In')
  expect(submitButton).toBeInTheDocument()
});
