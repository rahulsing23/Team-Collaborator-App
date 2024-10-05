import Image from 'next/image'
import React from 'react'

export default function Logo() {
  return (
    <div className="flex items-center gap-4">
      <Image src={'/logo.png'} alt='' width={30} height={30} />
      <h2 className="font-bold text-xl">Loop</h2>
    </div>
  )
}
