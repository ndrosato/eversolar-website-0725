import React, { useState } from 'react'

export const Select = ({ children, onValueChange, defaultValue, ...props }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState(defaultValue || '')

  const handleValueChange = (newValue) => {
    setValue(newValue)
    if (onValueChange) {
      onValueChange(newValue)
    }
    setIsOpen(false)
  }

  return (
    <div className="relative" {...props}>
      {React.Children.map(children, child => {
        if (child.type === SelectTrigger) {
          return React.cloneElement(child, { 
            onClick: () => setIsOpen(!isOpen),
            value,
            isOpen
          })
        }
        if (child.type === SelectContent) {
          return React.cloneElement(child, { 
            isOpen,
            onValueChange: handleValueChange
          })
        }
        return child
      })}
    </div>
  )
}

export const SelectTrigger = ({ children, onClick, value, isOpen, className = '', ...props }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex h-10 w-full items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    >
      {children}
      <svg className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  )
}

export const SelectValue = ({ placeholder, children }) => {
  return <span>{children || placeholder}</span>
}

export const SelectContent = ({ children, isOpen, onValueChange, className = '', ...props }) => {
  if (!isOpen) return null

  return (
    <div
      className={`absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-50 ${className}`}
      {...props}
    >
      {React.Children.map(children, child => {
        if (child.type === SelectItem) {
          return React.cloneElement(child, { onSelect: onValueChange })
        }
        return child
      })}
    </div>
  )
}

export const SelectItem = ({ children, value, onSelect, className = '', ...props }) => {
  return (
    <button
      type="button"
      onClick={() => onSelect(value)}
      className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-100 focus:bg-gray-100 focus:outline-none ${className}`}
      {...props}
    >
      {children}
    </button>
  )
} 