import React, { useEffect, useRef } from 'react'

function useEventListener(eventName, callback, element = window) {
  const savedCallback = useRef()

  useEffect(
    () => {
      savedCallback.current = callback
    },
    [callback]
  )

  useEffect(function() {
    if (typeof element === 'undefined') return

    const eventListener = event => savedCallback.current(event)

    element.addEventListener(eventName, eventListener)

    return function cleanup() {
      return element.removeEventListener(eventName, eventListener)
    }
  }, [eventName])
}

export default useEventListener
