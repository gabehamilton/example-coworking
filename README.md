# example-coworking
An example project for DreamSolve. Tools for a coworking space.

## Overview
A NextJS application using the App Router that provides a landing page listing collaboration applets for members of the coworking space. Built with TypeScript, Tailwind CSS, and @base-ui-components/react.

## Features
- **Collaboration Applets Dashboard**: A responsive landing page showcasing various collaboration tools including:
  - Meeting Room Scheduler
  - Project Board
  - Event Calendar
  - Member Directory
  - Resource Library
  - Skill Share

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: @base-ui-components/react
- **Build Tool**: Turbopack

## Getting Started

### Prerequisites
- Node.js 20.x or later
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/gabehamilton/example-coworking.git
cd example-coworking
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Available Scripts

- `npm run dev` - Start the development server with Turbopack
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## Project Structure
```
example-coworking/
├── app/                 # Next.js App Router pages and layouts
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Landing page with applets list
│   └── globals.css     # Global styles and Tailwind config
├── public/             # Static assets
├── package.json        # Project dependencies and scripts
└── README.md           # This file
```

## License
MIT License - see [LICENSE](LICENSE) file for details
