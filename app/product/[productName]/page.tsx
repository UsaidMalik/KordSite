"use client"
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import {useRouter} from 'next/navigation';

export default function Page() {
  const [data, setData] = useState(null);
  const pathName = usePathname()

  fetch(`http://localhost:3000${pathName}/api`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json(); // Parse the response data as JSON
      })
      .then((myData) => {
        console.log(myData)
        setData(myData);
      })
      .catch((error) => {
        console.error(error);
      });

  return (
    <div>
    </div>

  )
}