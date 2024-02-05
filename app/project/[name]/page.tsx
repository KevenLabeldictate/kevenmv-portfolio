import React from 'react'

interface project {
    name: string
}

// export default function Page(params : project) {
export default function Page({ params }: { params: project }) {
  return (
    <main className='min-h-screen'>
        <section className='p-10 md:p-24'>
            <h1 className='text-pink-500 text-xl'>
                {params.name}
            </h1>

        </section>
    </main>
  )
}

