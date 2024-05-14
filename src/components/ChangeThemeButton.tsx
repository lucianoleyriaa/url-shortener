'use client'

import React, { useState } from 'react'
import { Button } from './Button'

export const ChangeThemeButton = () => {
  const [darkMode, setDarkMode] = useState(true);

  const onChangeTheme = () => {
    setDarkMode(!darkMode);
    if (!darkMode) return document.querySelector('html')?.classList.add('dark');
    document.querySelector('html')?.classList.remove('dark');
  }

  return (
    <Button
      buttonText=''
      onClick={ onChangeTheme }
      icon={ <i className="fa-regular fa-sun cursor-pointer"></i> }
    />
  )
}
