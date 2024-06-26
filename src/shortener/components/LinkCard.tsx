'use client'

import React, { ChangeEvent, useState } from 'react'
import { createShorUrl } from '@/shortener/actions';
import { Input } from '@/components';

const createShortUrlForm = {
  url: '',
  title: '',
  customShortUrl: '',
}

export const LinkCard = () => {

  const [createUrlForm, setCreateUrlForm] = useState(createShortUrlForm);
  const [shortenUrl, setShortenUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const onFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCreateUrlForm((state) => ({ ...state, [e.target.name]: e.target.value }));
  }

  const onShort = async () => {
    const { url, customShortUrl, title } = createUrlForm;
    // TODO: Validar link y campo de titulo

    setLoading(true);

    const response = await createShorUrl(url, customShortUrl, title);

    if (!response.error && response.shortUrl) {
      setShortenUrl(response.shortUrl);
    }

    setLoading(false);

  }

  return (
    <div className="w-2/2 xl:w-2/5 py-12 md:p-10 md:my-10">
      <h3 className='mb-6 dark:text-gray-300 text-left text-3xl'>Create short link</h3>
 
      <div className="flex items-start gap-3 flex-col justify-start mt-8">
        <label htmlFor='link' className='dark:text-gray-300 text-md font-light'>Enter destination link</label>
        <div className='w-full'>
          <Input 
            onChange={ (e) => onFormChange(e) }
            placeholder='https://example.com/some-link'
            name='url'
          />

        </div>
      </div>

      <div className='flex items-start gap-3 flex-col justify-start mt-8'>
        <label htmlFor='shortLink' className='dark:text-gray-300 text-md font-light'>Enter short link (optional)</label>
        <div className='w-full'>
          <Input 
            onChange={ (e) => onFormChange(e) }
            placeholder='mysite'
            name='customShortUrl'
          />
        </div>
      </div>

      <div className='flex items-start gap-3 flex-col justify-start mt-8'>
        <label htmlFor='shortLink' className='dark:text-gray-300 text-md font-light'>Enter a title</label>
        <div className='w-full'>
          <Input 
            onChange={ (e) => onFormChange(e) }
            placeholder='My custom short link'
            name='title'
          />
        </div>
      </div>

      <div className='mt-2'>
        <small className='text-xs text-gray-800 dark:text-gray-400'>
          Ten en cuenta que los los siguientes links son generados a modo de prueba, y por lo tanto seran validos solo 
          por 7 dias. Si quieres mantenerlos por mas tiempo por favor crea un cuenta o inicia sesion si ya tienes una.
        </small>
      </div>

      <div className='flex md:justify-end mt-8 md:mt-4'>
        <button onClick={ onShort } type="button" className="py-2 px-4 text-center flex-grow md:flex-grow-0 flex items-center justify-center rounded-md bg-gray-800 text-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:ring-1 dark:ring-inset dark:ring-gray-500">
          <span className='mr-2'>Create</span>
          {
            loading && (
              <svg aria-hidden="true" role="status" className="inline w-5 h-5 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
              </svg>
            )
          }
        </button>
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
