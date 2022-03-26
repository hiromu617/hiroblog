import { VFC } from 'react';
import Link from 'next/link';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import Image from 'next/image';

const links = {
  github: 'https://github.com/hiromu617/',
  twitter: 'https://twitter.com/hiromu666666',
  zenn: 'https://zenn.dev/hiromu617',
};

export const Header: VFC = () => (
  <div className="navbar bg-base-200">
    <div className="flex-1">
      <Link href="/">
        <a className="btn btn-ghost normal-case text-5xl md:text-6xl">🛹</a>
      </Link>
    </div>
    <div className="flex-none">
      <div className="dropdown dropdown-end md:mr-5">
        <label tabIndex={0} className="btn btn-primary mb-1">
          Links
        </label>
        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <a
              className="group flex items-center"
              href={links.github}
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={24} />
              <span className="flex-1">Github</span>
              <FiExternalLink size={20} className="invisible group-hover:visible" />
            </a>
          </li>
          <li>
            <a
              className="group flex items-center"
              href={links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter size={24} />
              <span className="flex-1">Twitter</span>
              <FiExternalLink size={20} className="invisible group-hover:visible" />
            </a>
          </li>
          <li>
            <a
              className="group flex items-center"
              href={links.zenn}
              target="_blank"
              rel="noreferrer"
            >
              <Image src="/zenn.svg" width={24} height={24} alt="zenn" />
              <span className="flex-1">Zenn</span>
              <FiExternalLink size={20} className="invisible group-hover:visible" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);
