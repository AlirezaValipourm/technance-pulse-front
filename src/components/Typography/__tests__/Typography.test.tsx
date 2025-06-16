import { render, screen } from '@testing-library/react'
import { Typography } from '../Typography'
import { TVariant } from '../Typography.type'

describe('Typography Component', () => {
  it('renders with default variant', () => {
    render(<Typography>Default text</Typography>)
    const element = screen.getByText('Default text')
    expect(element).toBeInTheDocument()
  })

  it('renders with h1 variant', () => {
    render(<Typography variant="h1">Heading 1</Typography>)
    const element = screen.getByRole('heading', { level: 1 })
    expect(element).toBeInTheDocument()
    expect(element).toHaveTextContent('Heading 1')
  })

  it('renders with h2 variant', () => {
    render(<Typography variant="h2">Heading 2</Typography>)
    const element = screen.getByRole('heading', { level: 2 })
    expect(element).toBeInTheDocument()
    expect(element).toHaveTextContent('Heading 2')
  })

  it('renders with body variant as paragraph', () => {
    render(<Typography variant="body">Body text</Typography>)
    const element = screen.getByText('Body text')
    expect(element.tagName).toBe('P')
  })

  it('applies custom className', () => {
    render(<Typography className="custom-class">Text with custom class</Typography>)
    const element = screen.getByText('Text with custom class')
    expect(element).toHaveClass('custom-class')
  })

  it('applies size classes correctly', () => {
    render(<Typography variant="h1">Large heading</Typography>)
    const element = screen.getByText('Large heading')
    expect(element).toHaveClass('text-5xl', 'font-bold', 'sm:text-4xl')
  })

  it('uses custom tag when "as" prop is provided', () => {
    render(<Typography as="div" variant="h1">Div heading</Typography>)
    const element = screen.getByText('Div heading')
    expect(element.tagName).toBe('DIV')
  })

  it('renders different text variants correctly', () => {
    const variants: TVariant[] = ['tiny', 'small', 'medium', 'large']
    
    variants.forEach(variant => {
      render(<Typography variant={variant}>Test {variant}</Typography>)
      const element = screen.getByText(`Test ${variant}`)
      expect(element).toBeInTheDocument()
      expect(element.tagName).toBe('SPAN')
    })
  })

  it('handles nested content', () => {
    render(
      <Typography variant="h1">
        <span>Nested content</span>
      </Typography>
    )
    const element = screen.getByText('Nested content')
    expect(element).toBeInTheDocument()
  })

  it('applies correct classes for body-small variant', () => {
    render(<Typography variant="body-small">Small body text</Typography>)
    const element = screen.getByText('Small body text')
    expect(element).toHaveClass('text-md', 'sm:text-sm')
    expect(element.tagName).toBe('P')
  })

  it('combines size classes with custom classes', () => {
    render(<Typography variant="h3" className="text-red-500">Colored heading</Typography>)
    const element = screen.getByText('Colored heading')
    expect(element).toHaveClass('text-3xl', 'font-bold', 'sm:text-2xl', 'text-red-500')
  })
}) 