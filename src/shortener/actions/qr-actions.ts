'use server'

import QRCode from 'qrcode';
import * as path from 'path';
import * as fs from 'fs/promises';

export const generateQR = async (data: any) => {

  try {
    // Save qr
    const qrPath = path.resolve('./temp');
  
    const qr = await QRCode.toFile(`${qrPath}/pattern-7.png`, data, {
      errorCorrectionLevel: 'H',
      maskPattern: 7,
    });
  } catch (error) {
    console.log(error);
  }
  
}