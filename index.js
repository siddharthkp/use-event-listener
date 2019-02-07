import React, { useEffect, useRef } from 'react'

function useEventListener(eventName, callback) {
  const savedCallback = useRef()

  useEffect(
    () => {
      savedCallback.current = callback
    },
    [callback]
  )

  useEffect(function() {
    if (typeof window === 'undefined') return

    const eventListener = event => savedCallback.current(event)

    window.addEventListener(eventName, eventListener)

    return function cleanup() {
      return window.removeEventListener(eventName, eventListener)
    }
  }, eventName)
}

export default useEventListener
