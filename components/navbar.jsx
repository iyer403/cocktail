import React from 'react';
import Link from 'next/link';

const Links = [
  { text: 'client', link: '/client' },
  { text: 'drinks', link: '/drinks' },
  { text: 'Prisma', link: '/prisma-example' },

  { text: 'tasks', link: '/tasks' },
];

const Navbar = () => {
  return (
    <nav className="bg-base-300 py-4">
      <div className="navbar px-8 max-w-6xl mx-auto flex-col sm:flex-row">
        <Link href="/" className="btn btn-primary">
          Next.js
        </Link>
        <ul className="menu menu-horizontal md:ml-8">
          {Links.map((link) => (
            <li key={link.href}>
              <Link className="capitalize" href={link.link}>
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
