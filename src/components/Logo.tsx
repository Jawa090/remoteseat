import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center">
      <div className="relative">
        <img 
          src="/Rlogo.png" 
          alt="RemoteSeat Logo" 
          className="h-72 w-auto transform hover:scale-105 transition-transform duration-200 mt-40 dark:brightness-200 dark:contrast-200"
          style={{
            maxHeight: '288px',
            objectFit: 'contain',
            filter: 'var(--logo-filter, none)'
          }}
        />
      </div>
    </Link>
  );
};

export default Logo; 