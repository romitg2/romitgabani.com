'use client'

import dynamic from 'next/dynamic'
import { View } from '@react-three/drei'
import { Suspense } from 'react'

const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })
const Logo = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Logo), { ssr: false })

export default function Main() {
  return (
    <>
      <div className='h-screen w-screen'>
        <div className='flex flex-col h-full w-full gap-8'>
          <div className='flex flex-row'>
            <div className='mx-8 flex-1'>
              <Name />
            </div>
            <div className='mr-5 my-8 w-[25vw]'>
              <Contacts />
            </div>
          </div>
          <div className='flex flex-row flex-1 gap-4'>
            <div className='w-[25vw] ml-5'>
              <Navigation />
            </div>
            <div className='w-full mr-5 mb-5'>
              <Rendering />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function Name() {
  return (
    <div>
      <h1 className='text-[15vh] font-bold'>Romit Gabani</h1>
    </div>
  )
}

function Contacts() {
  return (
    <div className='flex flex-col gap-3 text-[3vh]'>
      <div className='rounded-lg border-2 border-black py-2 px-4'>
        <h2>Schedule a Call</h2>
      </div>
      <div className='rounded-lg border-2 border-black py-2 px-4'>
        <h2>Email</h2>
      </div>
    </div>
  )
}

function Navigation() {
  return (
    <div className='flex flex-col text-[3vh] gap-3'>
      <div className='rounded-lg border-2 border-black py-2 px-4'>
        <h1>projects</h1>
      </div>
      <div className='rounded-lg border-2 border-black py-2 px-4'>
        <h1>about</h1>
      </div>
    </div>
  )
}

function Rendering2() {
  return (
    <div className='w-full text-center md:w-3/5'>
      <View className='flex h-96 w-full flex-col items-center justify-center'>
        <Suspense fallback={null}>
          <Logo route='/blob' scale={0.6} position={[0, 0, 0]} />
          <Common />
        </Suspense>
      </View>
    </div>
  )
}

function Rendering() {
  return (
    <div className='h-full rounded-lg border-2 border-black w-full w-80vw'>
      <View className='h-full w-full'>
        <Suspense fallback={null}>
          <Logo route='/blob' scale={0.6} position={[0, 0, 0]} />
          <Common />
        </Suspense>
      </View>
    </div>
  )
}
