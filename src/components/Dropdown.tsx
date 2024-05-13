import React, { useState } from 'react';
import { useAuth } from '../hooks/UseAuth';

export default function LogoutDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useAuth();

  return (
    <div className="relative">
      <img className="w-10" src="/src/assets/user.png" alt="user" onClick={() => setIsOpen(!isOpen)}/>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-20 h-10 bg-white rounded-lg shadow-xl z-10">
          <a
            href="#"
            className="flex gap-2 items-center justify-center block px-2 py-2 text-gray-800"
            onClick={logout}
          >
            <img className="w-4 h-4" src="/src/assets/logoutIcon.png" alt="user" onClick={() => setIsOpen(!isOpen)}/>
            Sair
          </a>
        </div>
      )}
    </div>
  );
};
