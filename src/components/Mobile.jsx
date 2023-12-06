import Image from 'next/image'
import React from 'react'

const Mobile = ({scale, imgLink}) => {
    const height = 68.1 * scale
    const width = 37.5 * scale

    console.log(height, width);

  return (
    <div className='flex flex-col items-center w-fit'>
        <div className={`grid p-[2px] h-[68.1px] w-[37.5px] bg-gray-700 rounded-[4px]`}>
            <div className='bg-white rounded-sm overflow-hidden' style={{background: `url(${imgLink})`}} >
                <Image src={imgLink} alt='mobile-view' objectFit='contain'/>
            </div>
        </div>
    </div>
  )
}

export default Mobile