"use client"
import useSWR from 'swr';

const fetcher = async () => {
  const response = await fetch('./api')
  const data = await response.json();
  return data
}

export default function Page() {

  console.log("all");
  const { data, error } = useSWR('products', fetcher)

  console.log(data)

  return (
    <div>

    </div>

  )
}