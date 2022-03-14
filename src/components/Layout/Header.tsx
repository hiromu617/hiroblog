import { VFC } from 'react';
import Link from 'next/link';

export const Header: VFC = () => (
  <div className="navbar bg-base-200">
    <div className="flex-1">
      <Link href="/">
        <a className="btn btn-ghost normal-case text-5xl md:text-6xl">🛹</a>
      </Link>
    </div>
    <div className="flex-none">
      <Link href="/about">
        <a className="btn btn-primary mr-5">About</a>
      </Link>
    </div>
  </div>
);
