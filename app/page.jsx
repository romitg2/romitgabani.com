'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const Logo = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Logo), { ssr: false })
const Dog = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Dog), { ssr: false })
const Duck = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Duck), { ssr: false })
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false,
  loading: () => (
    <div className='flex h-96 w-full flex-col items-center justify-center'>
      <svg className='-ml-1 mr-3 h-5 w-5 animate-spin text-black' fill='none' viewBox='0 0 24 24'>
        <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
        <path
          className='opacity-75'
          fill='currentColor'
          d='M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
        />
      </svg>
    </div>
  ),
})
const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })

const Experience = () => {
  return (
    <div className='w-[95%] bg-black text-center h-full mx-auto'>
      <View className='flex h-full w-full flex-col rounded-xl items-center justify-center'>
        <Suspense fallback={null}>
          <Logo route='/blob' scale={0.6} position={[0, 0, 0]} />
          <Common />
        </Suspense>
      </View>
    </div>
  )
}

/**
 * Main App component which renders the PageLayout.
 * This is the default export.
 */
function Layout() {
  return (
    // A wrapper to set the base background color.
    <div className='bg-gray-200 font-sans antialiased'>
      <PageLayout />
    </div>
  )
}

/**
 * The main component that builds the page layout based on the provided screenshot.
 * It uses Tailwind CSS for styling and is responsive. This version only contains
 * the colored blocks to represent the layout structure.
 */
const PageLayout = () => {
  return (
    <div className='min-h-screen flex flex-col gap-4 p-4'>
      {/* Top section of the layout */}
      <header className='flex flex-col md:flex-row gap-4'>
        {/* Main header block (corresponds to the red block) */}
        <div className='bg-red-400 h-32 rounded-xl shadow-md flex-grow'>{/* This block is intentionally empty */}</div>
        {/* Secondary header block (corresponds to the top-right gray block) */}
        <div className='bg-gray-400 h-32 rounded-xl shadow-md w-full md:w-1/3'>
          {/* This block is intentionally empty */}
        </div>
      </header>

      {/* Main content area below the header */}
      <main className='flex flex-col md:flex-row gap-4 flex-grow'>
        {/* Sidebar on the left */}
        <aside className='w-full md:w-1/4 flex flex-col gap-4'>
          {/* Top sidebar block (corresponds to the top-left gray block) */}
          <div className='bg-gray-400 h-24 rounded-xl shadow-md'>{/* This block is intentionally empty */}</div>
          {/* Bottom sidebar block (corresponds to the light red/pink block) */}
          <div className='bg-pink-300 rounded-xl shadow-md flex-grow'>{/* This block is intentionally empty */}</div>
        </aside>

        {/* Main content panel (corresponds to the black block) */}
        <section className='bg-black rounded-xl shadow-2xl flex-grow'>
          {/* This block is intentionally empty */}
          <Experience />
        </section>
      </main>
    </div>
  )
}

export default function Page() {
  return (
    <>
      <Layout />
    </>
  )
}
