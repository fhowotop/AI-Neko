import React from "react";
import { FaGithub, FaMoon, FaSun } from "react-icons/fa";
import { Icon } from '@iconify/react';

export default function Navbar() {
  return (
    <nav className="w-full h-14 flex items-center justify-between px-4 bg-transparent shadow-none">
      <div className="flex items-center gap-2 font-bold text-lg" style={{ color: '#222' }}>
        <span className="inline-block align-middle" style={{ width: 28, height: 28 }}>
          <Icon icon="arcticons:nekobox" width="28" height="28" style={{ color: '#222' }} />
        </span>
        <span>AI猫娘·雨霁</span>
      </div>
      <div className="flex items-center gap-4">
        <a
          href="https://github.com/fhowotop/AI-Neko"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl transition-all duration-200 hover:text-blue-600 hover:scale-110"
          style={{ color: '#222' }}
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
}