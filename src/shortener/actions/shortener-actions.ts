'use server'

import { errorHandler } from "@/lib/errors/errorHandler";
import { NotFoundException } from "@/lib/errors/exceptions";
import prisma from "@/lib/prisma";

export const createShorUrl = async (url: string, customShortUrl: string, title: string) => {
  const baseUrl = process.env.HOST;
  let shortUrl = `${ baseUrl }/${ customShortUrl.length ? customShortUrl : Math.random().toString(36).substring(2, 8) }`;

  try {
    await prisma.shorten_urls.create({
      data: {
        url: url,
        short_url: shortUrl,
        title: title,
        clicks: 0,
      }
    })

    return {
      url,
      shortUrl: shortUrl,
    }
  } catch (error) {
    // TODO: Manejar error
    return {
      error: true,
      message: 'Algo salio mal'
    }
  }

}

export const searchShortUrl = async (shortUrl: string) => {
  try {
    const url = await prisma.shorten_urls.findFirst({
      where: {
        short_url: shortUrl,
      },
      select: {
        id: true,
        url: true,
        short_url: true,
        clicks: true,
      }
    })

    if (!url) {
      throw new NotFoundException('Short link was not found');
    }

    const clicks = url.clicks + 1;

    await prisma.shorten_urls.update({
      where: {
        id: url.id,
      },
      data: {
        clicks,
      }
    });

    return {
      status: 200,
      message: 'success',
      error: false,
      data: { ...url }
    };

  } catch (error) {
    return errorHandler(error);
  }
}