import { VFC } from 'react';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

export const Header: VFC = () => (
  <div className="navbar bg-base-200">
    <div className="flex-1">
      <Link href="/">
        <a className="btn btn-ghost normal-case text-5xl md:text-6xl">🛹</a>
      </Link>
    </div>
    <div className="flex-none">
      <ul>
        <li>
          <a
            href="https://github.com/hiromu617"
            rel="noopener noreferrer"
            target="_blank"
            className="btn btn-circle btn-ghost"
          >
            <FaGithub size={36} />
          </a>
        </li>
      </ul>
    </div>
  </div>
);
