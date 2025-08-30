'use client'

import React from 'react'

interface AnimatedTextProps{
    text : string
}

const AnimatedShimmerText : React.FC<AnimatedTextProps> = ({
    text
}) => {
  return (
    <div>
      <h1 className='py-3 shimmer text-zinc-500 text-xl md:text-lg font-serif font-medium tracking-tight overflow-hidden'>{text}</h1>
    </div>
  )
}

export default AnimatedShimmerText
