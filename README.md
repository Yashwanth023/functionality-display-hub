# Insurance Form Application

A multi-step insurance form application built with React and TypeScript, featuring a modern and responsive design.

## Features

- Multi-step form navigation with progress tracking
- Dynamic family member selection and management
- Age selection for each family member
- City selection with search functionality
- Medical history checklist
- WhatsApp updates opt-in
- Form data persistence between steps
- Responsive design for all devices

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Vite

## Project Structure

- `src/components/`: React components
  - `steps/`: Individual form step components
  - `ui/`: Reusable UI components
- `src/pages/`: Application pages
- `src/lib/`: Utility functions and helpers

## Getting Started

1. Install dependencies:
```sh
npm install
```

2. Start the development server:
```sh
npm run dev
```

3. Build for production:
```sh
npm run build
```

## Form Steps

1. **Family Selection**: Choose family members to include in the insurance plan
2. **Age Selection**: Input ages for each selected family member
3. **City Selection**: Choose your city with search functionality
4. **Medical History**: Select relevant medical conditions
5. **Confirmation**: Review and confirm your selections