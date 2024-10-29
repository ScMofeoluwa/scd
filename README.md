# School Database Application

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app), featuring a school database management system.

## Features

- Store and manage detailed information for each student
- Organize students into classes
- Display a list of students within each class
- Filter students by their graduation year
- Dashboard displaying total number of students, current students, and graduates

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Using the School Database

1. **View All Students**: Navigate to the "Students" tab to see a list of all students in the database. You can filter this list by graduation year using the input field at the top of the page.

2. **View Classes**: Click on the "Classes" tab to see students organized by their assigned classes. Each class is displayed as a card with a list of students in that class.

3. **Dashboard**: The "Dashboard" tab provides an overview of the school's statistics, including the total number of students, current students, and graduates.

4. **Filtering Students**: Use the "Filter by Graduation Year" input field to narrow down the list of students based on their expected graduation year.

5. **Adding New Students**: (Note: This feature is not implemented in the current version. You would need to add this functionality to the application.)

6. **Editing Student Information**: (Note: This feature is not implemented in the current version. You would need to add this functionality to the application.)

## Customization

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a custom font for Vercel projects.

## Learn More

To learn more about Next.js and the technologies used in this project, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [React Documentation](https://reactjs.org/) - learn about React, the library used for building user interfaces.
- [TypeScript Documentation](https://www.typescriptlang.org/docs/) - learn about TypeScript, the typed superset of JavaScript used in this project.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
