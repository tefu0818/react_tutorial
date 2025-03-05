# React App Development Guide

## Commands
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run all tests
- `npm test -- --testNamePattern="test name"` - Run specific test
- `npm test -- --testPathPattern="path/to/test"` - Run tests in specific file

## Code Style Guidelines
- Use functional components with hooks
- Import order: React, external libs, internal components, styles
- Use camelCase for variables and functions, PascalCase for components
- Prefer destructuring for props and state
- Use optional chaining for nullable values
- Use async/await for asynchronous operations
- Group related state variables with useReducer when appropriate
- Extract complex logic into custom hooks
- Handle errors with try/catch blocks and appropriate error states
- Avoid using index as key in lists