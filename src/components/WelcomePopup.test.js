// src/components/WelcomePopup.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import WelcomePopup from './WelcomePopup';

describe('WelcomePopup', () => {
  beforeEach(() => {
    render(<WelcomePopup />);
  });

  test('renders WelcomePopup component', () => {
    const welcomeElement = screen.getByText(/WELCOME/i);
    expect(welcomeElement).toBeInTheDocument();
  });

  test('renders the TO heading', () => {
    const toElement = screen.getByText(/TO/i);
    expect(toElement).toBeInTheDocument();
  });

  test('renders the main heading', () => {
    const mainHeadingElement = screen.getByText(/The DevSecOps Day 2 Hackathon!/i);
    expect(mainHeadingElement).toBeInTheDocument();
  });

  test('renders the Get Started button', () => {
    const buttonElement = screen.getByRole('button', { name: /Get Started/i });
    expect(buttonElement).toBeInTheDocument();
  });
});