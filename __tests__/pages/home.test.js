/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Index from '../../pages/index'

import { useRouter } from 'next/router'

// mocks useRouter to be able to use component' router.asPath
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}))

describe('index page', () => {
  beforeEach(() => {
    useRouter.mockImplementation(() => ({
      pathname: '/',
      asPath: '/',
    }))
  })

  it('should render the page', () => {
    render(<Index locale="en" />)
    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()
  })

  it('should render in english', () => {
    render(<Index locale="en" />)
    const frLink = screen.getByText('Français')
    expect(frLink).toBeInTheDocument()
  })

  it('should render in french', () => {
    render(<Index locale="fr" />)
    const frLink = screen.getByText('English')
    expect(frLink).toBeInTheDocument()
  })
})
