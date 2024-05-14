import Link from 'next/link';
import React, { ReactNode } from 'react';

interface Props {
  buttonText: string;
  link: string;
  styles?: string;
  icon?: ReactNode
}

export const LinkButton = ({ buttonText, link, styles, icon }: Props) => {
  return (
    <Link
      href={ link } 
      className={ `px-3 py-2 rounded-lg ${ styles }` }
    >
      <span>{ buttonText }</span>
      { icon && <span className='ml-2 text-sm'>{ icon }</span> }
    </Link>
  )
}
