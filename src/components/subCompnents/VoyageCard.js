import React from 'react'

function VoyageCard(props) {
  return (
    <div class="flex flex-col justify-center items-center">
    <div class="relative flex flex-col items-center rounded-[10px] border-[1px] border-gray-200 w-[400px] mx-auto p-4 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
        <div class="relative flex h-32 w-full justify-center rounded-xl bg-cover" >
            <img src='https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/banner.ef572d78f29b0fee0a09.png' class="absolute flex h-32 w-full justify-center rounded-xl bg-cover" /> 
            <div class="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
                <img class="h-full w-full rounded-full" src='https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar11.1060b63041fdffa5f8ef.png' alt="" />
            </div>
        </div> 
        <div class="mt-16 flex flex-col items-center">
            <h4 class="text-xl font-bold text-gray-800">
            {props.name}
            </h4>
            <p class="text-base font-normal text-gray-600">{props.date}</p>
        </div> 
        <div class="mt-6 mb-3 flex gap-14 md:!gap-14">
            <div class="flex flex-col items-center justify-center">
            <p class="text-2xl font-bold  text-gray-600">{props.price}DH</p>
            <p class="text-sm font-normal text-gray-600">Price</p>
            </div>
            <div class="flex flex-col items-center justify-center">
            <p class="text-2xl font-bold text-gray-600">
                {props.depart}
            </p>
            <p class="text-sm font-normal text-gray-600">Depart</p>
            </div>
            <div class="flex flex-col items-center justify-center">
            <p class="text-2xl font-bold text-gray-600">
                {props.destination}
            </p>
            <p class="text-sm font-normal text-gray-600">Destination</p>
            </div>
        </div>
    </div>  
</div>
  )
}

export default VoyageCard