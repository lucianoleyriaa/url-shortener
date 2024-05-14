'use client'

import { Input } from '@/components'
import { generateQR } from '@/shortener/actions/qr-actions'
import React from 'react'
import Image from 'next/image';

const QRPattern = [
  { imageUrl: '/qr-pattern/pattern-0.png', value: 0 },
  { imageUrl: '/qr-pattern/pattern-1.png', value: 1 },
  { imageUrl: '/qr-pattern/pattern-2.png', value: 2 },
  { imageUrl: '/qr-pattern/pattern-3.png', value: 3 },
  { imageUrl: '/qr-pattern/pattern-4.png', value: 4 },
  { imageUrl: '/qr-pattern/pattern-5.png', value: 5 },
  { imageUrl: '/qr-pattern/pattern-6.png', value: 6 },
  { imageUrl: '/qr-pattern/pattern-7.png', value: 7 },
]


export const QRCard = () => {

  const onGenerateQR = async () => {
    await generateQR('https://lucianoleyria.com');
  }

  return (
    <div className='w-2/2 xl:w-2/5 py-12 md:p-10 md:my-10'>
      <h3 className='mb-6 dark:text-gray-300 text-left text-3xl'>Create QR Code</h3>

      <div className="flex items-start gap-3 flex-col justify-start mt-8">
        <label htmlFor='link' className='dark:text-gray-300 text-md font-light'>Enter destination link</label>
        <div className='w-full'>
          <Input 
            onChange={ (e) => console.log('es') }
            placeholder='https://example.com/some-link'
            name='url'
          />

        </div>
      </div>
      <div className="flex items-start gap-3 flex-col justify-start mt-8">
        <label htmlFor='link' className='dark:text-gray-300 text-md font-light'>Title</label>
        <div className='w-full'>
          <Input 
            onChange={ (e) => console.log('es') }
            placeholder='My store'
            name='url'
          />

        </div>
      </div>
      <div className="flex items-start gap-3 flex-col justify-start mt-8">
        <label htmlFor='link' className='dark:text-gray-300 text-md font-light'>Patron</label>
        <div className='flex item-center justify-center gap-4 flex-wrap'>

          {
            QRPattern.map((pattern, index) => {
              return (
                <button key={index}>
                  <Image 
                    src={ pattern.imageUrl }
                    alt='Qr pattern'
                    width={60}
                    height={60}
                  />
                </button>
              )
            })
          }
        </div>
      </div>
      <button onClick={ onGenerateQR }>Generate</button>
    </div>
  )
}
