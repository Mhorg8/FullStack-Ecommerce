import { Loader2 } from 'lucide-react'
import React from 'react'

const SearchLoader = () => {
  return (
    <p className="flex items-center justify-center gap-1 px-6 py-10 text-center text-yellow-600 font-semibold">
    <Loader2 className="w-5 h-5 animate-spin" /> Searching on
    progress
  </p>
  )
}

export default SearchLoader