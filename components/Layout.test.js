import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'

import Layout from './Layout'
import { useRouter } from 'next/router'

// mocks useRouter to be able to use component' router.asPath
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}))

// the code below is to avoid the following error:
//    "An update to Link inside a test was not wrapped in act(...)"
jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href }) => (
    <children.type {...children.props} href={href} />
  ),
}))

expect.extend(toHaveNoViolations)

describe('Layout with default text', () => {
  useRouter.mockImplementation(() => ({
    pathname: '/',
    asPath: '/',
  }))

  it('Layout contains Symbol of GoC', () => {
    render(<Layout locale="en" />)
    expect(screen.getByAltText('Government of Canada')).toBeInTheDocument()
  })

  it('Layout contains "Skip to content" link', () => {
    render(<Layout locale="fr" />)
    expect(screen.getByText('Passer au contenu principal')).toBeInTheDocument()
  })

  it('Layout contains Language link', () => {
    render(<Layout locale="en" />)
    expect(screen.getByText('Français')).toBeInTheDocument()
  })

  it('Layout contains a Main tag', () => {
    render(<Layout locale="en" />)
    expect(screen.getByRole('main')).toBeInTheDocument()
  })

  it('Layout contains footer with Prime Minister link', () => {
    render(<Layout locale="en" />)
    expect(screen.getByText('Prime Minister')).toBeInTheDocument()
  })

  it('Layout contains Canada Wordmark', () => {
    render(<Layout locale="en" />)
    expect(screen.getByAltText('symbol2')).toBeInTheDocument()
  })

  it('Layout contains no a11y violations', async () => {
    const { container } = render(<Layout locale="en" />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
