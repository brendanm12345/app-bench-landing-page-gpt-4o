import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-800 text-white py-4 text-center">
        <h1 className="text-2xl">Welcome to Our Landing Page</h1>
      </header>

      <main className="flex-grow flex items-center justify-center">
        <h2 className="text-xl text-gray-700">
          Welcome to our website! We are glad you're here.
        </h2>
      </main>

      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; {new Date().getFullYear()} Your Company Name</p>
      </footer>
    </div>
  );
}