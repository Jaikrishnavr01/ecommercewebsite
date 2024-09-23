import React from 'react';

export default function Footer() {
  return (
    <footer className="py-1 bg-dark">
      <p className="text-center text-white mt-1">
        JKcart  {new Date().getFullYear()} - {new Date().getFullYear() + 1}, All Rights Reserved
      </p>
    </footer>
  );
}
