import { Suspense } from 'react'
import { AcademyApp } from '@/components/academy/academy-app'

export default function Home() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-sm text-slate-500">Loading Academy...</p>
        </div>
      </div>
    }>
      <AcademyApp />
    </Suspense>
  )
}
