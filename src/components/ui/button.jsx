import React from 'react'

export const Button = ({ children, className = '', onClick, ...props }) => {
  return (
    <button
      className={`inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
} 