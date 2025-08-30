'use client';
import React, { useState } from 'react';
import AlertIcon from '../../../public/icons/AlertIcon';
import EyesSee from '../../../public/icons/EyesSee';

const PasswordField = ({
  label,
  placeholder,
  icon: Icon,
  register,
  name,
  validation,
  error,
  className = '',
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <label className="block text-sm">{label}</label>
      <div
        className={`${
          error ? 'border-red-100' : 'border-white'
        } flex items-center gap-5 border p-2 rounded-lg ${className}`}
      >
        {Icon && <Icon />}
        <input
          {...register(name, validation)}
          type={showPassword ? 'text' : 'password'}
          className="w-full h-[30px] focus:outline-none text-sm bg-transparent"
          placeholder={placeholder}
          {...props}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="text-gray-400 hover:text-gray-600 transition-colors"
        >
          <EyesSee />
        </button>
      </div>
      {error && (
        <p className="text-gray-200 gap-2 text-sm flex items-center">
          <AlertIcon />
          {error.message}
        </p>
      )}
    </div>
  );
};

export default PasswordField; 