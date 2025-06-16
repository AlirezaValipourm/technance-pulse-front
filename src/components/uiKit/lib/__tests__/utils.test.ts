import { cn } from '../utils'

describe('cn utility function', () => {
  it('combines class names correctly', () => {
    const result = cn('class1', 'class2')
    expect(result).toBe('class1 class2')
  })

  it('handles conditional classes', () => {
    const result = cn('base-class', true && 'conditional-class', false && 'hidden-class')
    expect(result).toBe('base-class conditional-class')
  })

  it('handles object syntax', () => {
    const result = cn({
      'active': true,
      'inactive': false,
      'visible': true
    })
    expect(result).toBe('active visible')
  })

  it('handles mixed arguments', () => {
    const result = cn(
      'base',
      ['array-class-1', 'array-class-2'],
      { 'object-class': true, 'hidden': false },
      'string-class'
    )
    expect(result).toBe('base array-class-1 array-class-2 object-class string-class')
  })

  it('handles undefined and null values', () => {
    const result = cn('class1', undefined, null, 'class2', false && 'hidden')
    expect(result).toBe('class1 class2')
  })

  it('merges conflicting Tailwind classes', () => {
    // twMerge should handle conflicting classes like padding
    const result = cn('p-4', 'p-6')
    expect(result).toBe('p-6') // Latest padding class should win
  })

  it('handles responsive variants', () => {
    const result = cn('text-sm', 'md:text-lg', 'lg:text-xl')
    expect(result).toBe('text-sm md:text-lg lg:text-xl')
  })

  it('handles empty arguments', () => {
    const result = cn()
    expect(result).toBe('')
  })

  it('handles arrays of classes', () => {
    const result = cn(['class1', 'class2'], ['class3', 'class4'])
    expect(result).toBe('class1 class2 class3 class4')
  })

  it('handles complex conditional logic', () => {
    const isActive = true
    const isDisabled = false
    const variant = 'primary'
    
    const result = cn(
      'btn',
      {
        'btn-active': isActive,
        'btn-disabled': isDisabled,
        [`btn-${variant}`]: variant
      },
      isActive && 'active-state',
      !isDisabled && 'enabled-state'
    )
    
    expect(result).toContain('btn')
    expect(result).toContain('btn-active')
    expect(result).toContain('btn-primary')
    expect(result).toContain('active-state')
    expect(result).toContain('enabled-state')
    expect(result).not.toContain('btn-disabled')
  })
}) 