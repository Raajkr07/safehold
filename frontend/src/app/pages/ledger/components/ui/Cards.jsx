import React from 'react'

export function Card({ children, className = '' }) {
  return <div className={`rounded-2xl shadow border border-gray-300 ${className}`}>{children}</div>
}

export function CardHeader({ children, className = '' }) {
  return <div className={`px-4 pt-4 ${className}`}>{children}</div>
}

export function CardTitle({ children, className = '' }) {
  return <h2 className={`text-lg font-semibold text-primary ${className}`}>{children}</h2>
}

export function CardContent({ children, className = '' }) {
  return <div className={`p-4 ${className}`}>{children}</div>
}
