'use client';

import React from 'react'
import Card from '@/src/components/Card'

export default function SectionCard() {
  return (
    <section>
        <div className=' grid gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24'>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </section>
  )
}
