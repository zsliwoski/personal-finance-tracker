# TallyUp - Personal Finance Tracker

A web application built with Next.js, Prisma, and NextAuth to help you track your personal finances. This app allows you to securely create an account, track your income and expenses, and view financial summaries over time.

## Features

- User authentication with NextAuth
- Financial data tracking (income, expenses)
- Overview of financial summaries (e.g., balance, monthly expenses)
- Data persistence with Prisma (SQLite/PostgreSQL)
- User-specific data for privacy and security

## Tech Stack

- **Next.js**: React framework for building fast, server-rendered React apps.
- **NextAuth.js**: Authentication for Next.js applications.
- **Prisma**: ORM for database management and migrations.
- **SQLite/PostgreSQL**: Relational database to store user and financial data.

## Installation

Follow these steps to set up the project on your local machine:

### 1. Clone the repository

```bash
git clone https://github.com/zsliwoski/personal-finance-tracker.git
cd personal-finance-tracker
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up the environment variables

Create a `.env` file in the root directory and add the following variables:

```env
DATABASE_URL="your-database-connection-string"
NEXTAUTH_SECRET="your-nextauth-secret"
NEXTAUTH_URL="http://localhost:3000"
```

For the `DATABASE_URL`, you can use a connection string from SQLite or PostgreSQL.

### 4. Set up the database

Run Prisma migration commands to set up the database schema:

```bash
npx prisma migrate dev
```

This will create the necessary database tables and apply migrations.

### 5. Start the development server

Now that everything is set up, start the app:

```bash
npm run dev
```

The app should now be running on [http://localhost:3000](http://localhost:3000).

## Usage

1. **Sign Up/Sign In**: Use NextAuth to create an account or sign in using your email or OAuth providers like Google.
2. **Add Transactions**: Track your income and expenses by adding transactions with categories, amounts, and dates.
3. **View Financial Overview**: See an overview of your finances, including balances and monthly summaries.
4. **Manage Profile**: You can update your personal profile and manage your account settings.

## Database Schema

The app uses Prisma to handle the database. Below is an outline of the key tables:

- **User**: Stores user details (email, password, etc.).
- **Transaction**: Stores transactions, including income/expense amounts, categories, and date.
- **Category**: Defines the different categories for transactions (e.g., Food, Rent, Salary).

### Upcoming Features
- **API routes**: Expose API routes for interacting with the finance data.
- **Detailed financial reports**: Generate reports based on user-selected time frames (e.g., weekly, monthly, yearly).
- **Expense categorization**: Introduce predefined categories for expenses, such as groceries, utilities, entertainment, etc.
- **Budgeting**: Allow users to set a budget and track progress against it.
- **Recurring transactions**: Enable users to set recurring income/expense transactions.
- **Data export**: Implement an option to export transaction data as CSV or PDF.
- **Multiple accounts**: Add the ability to manage and switch between multiple accounts (e.g., checking, savings, credit).
- **Mobile App**: Develop a companion mobile app for iOS and Android to manage finances on the go.

### Future Ideas
- **Investment Tracking**: Add features for tracking investments (stocks, crypto, etc.) and calculating returns.
- **Bill Reminders**: Send reminders for recurring bills or upcoming payments.
- **Dark Mode**: Implement a dark mode for better usability at night.

## Contributing

Feel free to fork the repository, submit issues, or create pull requests if you'd like to contribute.

### Steps to contribute:

1. Fork the repo
2. Clone your fork to your local machine
3. Create a new branch: `git checkout -b feature/your-feature`
4. Commit your changes: `git commit -m 'Add new feature'`
5. Push to your fork: `git push origin feature/your-feature`
6. Open a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Prisma](https://www.prisma.io/)
- [NextAuth.js](https://next-auth.js.org/)
- [SQLite](https://https://www.sqlite.org//) / [PostgreSQL](https://www.postgresql.org/)
