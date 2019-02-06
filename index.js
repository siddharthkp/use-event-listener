import React, { useEffect } from 'react'

function useEventListener(eventName, callback, dependencies) {
  useEffect(function() {
    if (typeof window === 'undefined') return

    window.addEventListener(eventName, callback)

    return function cleanup() {
      return window.removeEventListener(eventName, callback)
    }
  }, dependencies)
}

export default useEventListener
