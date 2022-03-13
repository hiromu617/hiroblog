import { VFC } from 'react';
import Link from 'next/link';

export const Header: VFC = () => (
  <div className="navbar bg-base-100">
    <div className="flex-1">
      <Link href="/">
        <a className="btn btn-ghost normal-case text-5xl">🛹</a>
      </Link>
    </div>
    <div className="flex-none">
      <ul>
        <li>
          <a></a>
        </li>
      </ul>
    </div>
  </div>
);
