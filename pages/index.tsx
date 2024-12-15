import Calendar from '@/components/common/Calendar'
import React from 'react'

const Index = () => {
    return (
        <div className="w-full flex items-center justify-center min-h-screen gap-16">
            <main className="flex  items-start  w-[80%] h-full">

                <Calendar />

            </main>
        </div>
    )
}

export default Index