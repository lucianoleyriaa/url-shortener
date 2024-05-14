import React, { ReactNode } from 'react'

interface Props {
  buttonText: string;
  onClick: () => void;
  icon?: ReactNode; 
}

export const Button = ({ buttonText, onClick, icon }: Props) => {
  return (
    <button 
      onClick={ onClick }
      className='text-sm px-2 py-2 rounded-lg ring-1 ring-inset dark:ring-gray-500'
    >
      { buttonText }
      { icon && icon }
    </button>
  )
}
