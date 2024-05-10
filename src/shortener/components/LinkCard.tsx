'use client'

import { Input } from '@/components';
import { createShorUrl } from '@/shortener/actions';
import React, { useState } from 'react'

export const LinkCard = () => {

  const [url, setUrl] = useState<string>('');
  const [shortenUrl, setShortenUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const onShort = async () => {
    // TODO: Valid link
    setLoading(true);

    const response = await createShorUrl(url);

    if (!response.error && response.shortUrl) {
      setShortenUrl(response.shortUrl);
    }

    setLoading(false);

  }

  return (
    <div className="w-1/2 p-10 shadow-md ring-1 ring-inset ring-gray-300 rounded-xl dark:bg-gray-800/70 dark:ring-gray-500">
      <h3 className='dark:text-gray-300'>Create short link</h3>
      <div className="flex items-start gap-3 flex-col justify-start mt-8">
        <label htmlFor="" className='dark:text-gray-300 text-sm font-light'>Enter a link</label>
        <div className='flex gap-2 items-center w-full'>
          <Input 
            onChange={ (e) => setUrl(e.target.value) }
            placeholder='https://example.com/some-link'
            name='link'
          />
          <button 
            onClick={ onShort }
            className="py-2 px-4 rounded-md bg-green-400 text-white dark:bg-gray-800 dark:text-gray-300 dark:ring-1 dark:ring-inset dark:ring-gray-500"
          >
            Create
          </button>

        </div>
      </div>

      {
        !loading && shortenUrl && (
          <div className='mt-8 dark:text-gray-300'>
            <p className='text-sm'>Tu link acortado es: <a href={ shortenUrl } className='dark:text-blue-500 font-bold underline' target='_blank'>{ shortenUrl }</a></p>
          </div>
        )
      }

    </div>
  )
}
