import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm/>)
  // screen.getByText('CheckoutForm') Test Fails
  screen.getByText('Checkout Form')
});

test("form shows success message on submit", () => {
  render(<CheckoutForm/>)
  const checkout = screen.getByText('Checkout')
  const success = () => screen.queryByTestId('successMessage')


  // expect(success()).toBeInTheDocument() Test fails
  expect(success()).not.toBeInTheDocument()

  userEvent.click(checkout)

  expect(success()).toBeInTheDocument()
});

test("form shows success message on submit with form details", async () => {
  render(<CheckoutForm/>)

  const firstName = screen.getByLabelText('First Name:')
  const lastName = screen.getByLabelText('Last Name:')
  const address = screen.getByLabelText('Address:')
  const city = screen.getByLabelText('City:')
  const state = screen.getByLabelText('State:')
  const zip = screen.getByLabelText('Zip:')
  const checkout = screen.getByText('Checkout')
  const success = () => screen.queryByTestId('successMessage')


  // expect(success()).toBeInTheDocument() Test fails
  expect(success()).not.toBeInTheDocument()

  userEvent.type(zip, 'zip')
  userEvent.type(state, 'state')
  userEvent.type(city, 'city')
  userEvent.type(address, 'address')
  userEvent.type(lastName, 'lastName')
  userEvent.type(firstName, 'firstName')

  userEvent.click(checkout)

  expect(success()).toBeInTheDocument()

  expect(await screen.findByText('firstName lastName')).toBeVisible()
  expect(await screen.findByText('address')).toBeVisible()
  expect(await screen.findByText('city, state zip')).toBeVisible()
});
