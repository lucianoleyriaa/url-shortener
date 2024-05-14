import React from 'react'
import { ChangeThemeButton } from './ChangeThemeButton'

export const Header = () => {
  return (
    <header className='fixed w-full py-2 md:py-4 px-2 2xl:px-36 border-b border-slate-800/[0.1] dark:border-slate-50/[0.1]'>
      <nav className='flex justify-between items-center dark:text-white'>
        <div>
          <h1 className='text-lg 2xl:text-2xl'>ShortenIO</h1>
        </div>
        <div className='flex gap-4 items-center text-lg'>
          <a href="#"><i className="fa-brands fa-github cursor-pointer"></i></a>
          <ChangeThemeButton />
          <button className='hidden md:block text-sm px-2 py-2 rounded-lg ring-1 ring-inset dark:ring-gray-500'>Get Started</button>
        </div>
      </nav>
    </header>
  )
}
