// Header.tsx
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signOut, useSession } from 'next-auth/react';
import { useState, useEffect } from "react";

const Header: React.FC = () => {
  const router = useRouter();
  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;

  const { data: session, status } = useSession();

  let left = (
    <div className="left">
      <Link href="/" data-active={isActive('/')}>
      <img
              src="/logonobg.png"
              width={150}
              height={150}
              className=""
            />
      </Link>
    </div>
  );

  let right = null;

  if (status === 'loading') {
    left = (
      <div className="left">
        <Link href="/" data-active={isActive('/')}> 
        <img
              src="/logonobg.png"
              width={150}
              height={150}
              className=""
            />
        </Link>
      </div>
    );
    right = (
      <div className="right text-white text-xl italic">
        <p>Récupération des données</p>
      </div>
    );
  }

  if (!session) {
    right = (
      <div className="right text-white text-xl">
        <Link href="loginPage" data-active={isActive('/signup')}>
            Connexion
        </Link>
      </div>
    );
  }

  if (session) {
    left = (
      <div className="left">
        <Link href="/" data-active={isActive('/')}>
        <img
              src="/logonobg.png"
              width={150}
              height={150}
              className=""
            />
        </Link>
      </div>
    );
    right = (
      <div className="right text-right ml-auto">
        <Link href="/compte">
          <button className=' p-1'>
            <a className='text-xl text-white'>Mon compte</a>
          </button>
        </Link>
        {/*<button onClick={() => signOut()}>
          <a className='text-xl text-white'> Se déconnecter</a>
    </button>*/}
      </div>
    );
  }

  return (
    <nav className='bg-transparent h-fit fixed w-full top-0 z-50 justify-between mx-auto flex items-center px-10'>
      {left}
      {right}
    </nav>
  );
};

export default Header;