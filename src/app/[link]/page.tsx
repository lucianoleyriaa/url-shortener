import { searchShortUrl } from "@/shortener/actions";
import { redirect } from "next/navigation";

interface Props {
  params: { link: string }
}

export default async function LinkPage({ params }: Props) {
  const response = await searchShortUrl(`${process.env.HOST}/${ params.link }`);

  if (!response.error && response.data) {
    return redirect(response.data?.url);
  }


  // return redirect('http://localhost:3000/shorten-link')

}