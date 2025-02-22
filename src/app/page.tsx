import React from 'react';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import NavMenu from './components/NavMenu';

export default async function Home() {
  return (
    <div>
      <NavMenu />
      <div className="container mx-auto p-4">
        <header className="text-center my-8">
          <h1 className="text-4xl font-bold mb-4">Welcome to TallyUp</h1>
          <p className="text-lg mb-2">Your ultimate solution for seamless and efficient financial management.</p>
          <p className="text-lg">Join thousands of users who have taken control of their finances with our intuitive and powerful tools.</p>
        </header>
        <section className="my-8">
          <h2 className="text-2xl font-semibold mb-4">Financing that works for you</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Effortlessly track your expenses</li>
            <li>Set and achieve your financial goals</li>
            <li>Generate insightful reports</li>
          </ul>
          <Button asChild>
            <Link href="/signup">Get Started</Link>
          </Button>
        </section>
        <section className="my-8">
          <h2 className="text-2xl font-semibold mb-4">About Us</h2>
          <p className="text-lg">At Personal Finance Tracker, we are dedicated to helping you manage your finances with ease and confidence. Our team of experts have created a user-friendly platform that empowers you to make informed financial decisions and achieve your financial dreams.</p>
        </section>
        <footer className="text-center my-8">
          <p className="text-sm">&copy; 2025 TallyUp. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}