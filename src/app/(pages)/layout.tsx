'use client';
import React, { useState } from "react";
// import "./globals.css";
import Sidebar from "../components/Sidebar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const [isOpen, setIsOpen] = useState(true);
  return (
    <html lang="en">
      <body
      className="flex min-h-screen"
      >
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}  />
        <div className="flex-grow p-5">
          {children}
        </div>
      </body>
    </html>
  );
}
