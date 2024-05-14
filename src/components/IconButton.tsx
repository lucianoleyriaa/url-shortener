import React, { ReactNode } from 'react'

interface Props {
  icon: ReactNode;
  onClick: () => void;
  styles?: string;
}

export const IconButton = ({ icon, onClick, styles }: Props) => {
  return (
    <button 
      onClick={ onClick }
      className={`${ styles }`}
    >
      { icon }
    </button>
  )
}
