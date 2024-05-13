import React, { ChangeEvent } from 'react'

interface Props {
  type?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  name: string;
}

export const Input = ({ type = 'text', onChange, placeholder, name }: Props) => {
  return (
    <input
      name={ name }
      type={ type }
      onChange={ onChange }
      className="w-full py-2 px-3 rounded-md dark:bg-gray-800 dark:text-gray-300"
      placeholder={ placeholder }
    />
  )
}
