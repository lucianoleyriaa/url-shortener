import React from 'react';

interface Props {
  buttonText: string;
  link: string;
  styles?: string;
}

export const LinkButton = ({ buttonText, link, styles }: Props) => {
  return (
    <a
      href={ link } 
      className={ `px-3 py-2 rounded-lg ${ styles }` }
    >
      <span>{ buttonText }</span>
    </a>
  )
}
