import { VFC } from 'react';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

export const Footer: VFC = () => (
  <footer className="flex flex-nowrap items-center justify-between p-4 bg-base-200 border-t-2 text-base-content">
    <div className="flex-1">
      <p>Copyright © 2022 - All right reserved</p>
    </div>
    <div className="flex-none">
      <a
        href="https://github.com/hiromu617"
        rel="noopener noreferrer"
        target="_blank"
        className="btn btn-circle btn-ghost"
      >
        <FaGithub size={36} />
      </a>
    </div>
  </footer>
);
