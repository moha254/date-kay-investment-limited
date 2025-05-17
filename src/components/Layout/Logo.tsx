import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../../../public/img/DATA-KAY.jpg';

interface LogoProps {
  variant?: 'light' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ variant = 'dark' }) => {
  return (
    <Link to="/" className="flex items-center">
      <img 
        src={logoImage} 
        alt="DATA-KAY Logo" 
        className="h-12 w-auto"
      />
      <span className={`ml-2 font-bold text-xl ${
        variant === 'light' ? 'text-white' : 'text-gray-800'
      }`}>
        Date-Kay Investment Limited
      </span>
    </Link>
  );
};

export default Logo;