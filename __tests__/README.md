# Testing Guide for Technance Pulse

This project uses **Jest** and **React Testing Library** for unit testing React components.

## 🚀 Getting Started

### Install Dependencies

```bash
npm install
```

### Run Tests

```bash
# Run all tests once
npm run test

# Run tests in watch mode (re-runs when files change)
npm run test:watch

# Run tests with coverage report
npm run test:coverage

# Run tests for CI (no watch mode)
npm run test:ci
```

## 📁 Test Structure

Tests are organized in the following structure:
```
src/
├── components/
│   ├── ComponentName/
│   │   ├── __tests__/
│   │   │   └── ComponentName.test.tsx
│   │   ├── ComponentName.tsx
│   │   └── ComponentName.type.ts
│   └── uiKit/
│       └── lib/
│           └── __tests__/
│               └── utils.test.ts
└── __tests__/
    └── setup files and shared test utilities
```

## 🧪 Test Types

### Unit Tests
- **Component Tests**: Test individual React components in isolation
- **Utility Tests**: Test pure functions and utility methods
- **Hook Tests**: Test custom React hooks

### Coverage Areas
- Component rendering
- Props handling
- User interactions
- State management
- Accessibility
- Error handling

## 📋 Test Examples

### Basic Component Test
```tsx
import { render, screen } from '@testing-library/react'
import { MyComponent } from '../MyComponent'

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent title="Test Title" />)
    expect(screen.getByText('Test Title')).toBeInTheDocument()
  })
})
```

### Testing User Interactions
```tsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from '../Button'

describe('Button', () => {
  it('calls onClick when clicked', async () => {
    const user = userEvent.setup()
    const handleClick = jest.fn()
    
    render(<Button onClick={handleClick}>Click me</Button>)
    
    await user.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
```

## 🎯 Testing Best Practices

### DO:
- Test behavior, not implementation
- Use semantic queries (getByRole, getByLabelText)
- Test accessibility
- Mock external dependencies
- Write descriptive test names
- Test edge cases and error states

### DON'T:
- Test implementation details
- Over-mock components
- Test third-party library behavior
- Write tests that duplicate each other

## 🔧 Configuration

### Jest Configuration
- **File**: `jest.config.js`
- **Setup**: `jest.setup.js`
- **Environment**: jsdom (browser-like environment)

### Mocks
The following are automatically mocked:
- Next.js router (`next/navigation`)
- Next.js Script component
- WebGL context (for 3D components)
- ResizeObserver
- IntersectionObserver
- requestAnimationFrame

## 📊 Coverage Reports

Coverage reports are generated in the `coverage/` directory:
- **HTML Report**: `coverage/lcov-report/index.html`
- **Terminal Output**: Shows coverage percentages
- **Excluded Files**: 
  - Type definitions (`.d.ts`)
  - Custom Cobe library
  - Index files
  - Layout and page components

## 🐛 Debugging Tests

### Common Issues

1. **Component not rendering**: Check if all required props are provided
2. **Element not found**: Verify the query method and element existence
3. **WebGL errors**: Ensure WebGL context is properly mocked
4. **Async operations**: Use `waitFor` or `findBy` queries for async updates

### Debug Commands
```bash
# Run specific test file
npm test -- ComponentName.test.tsx

# Run tests matching pattern
npm test -- --testNamePattern="renders"

# Run with verbose output
npm test -- --verbose
```

## 📚 Resources

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Testing Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library) 