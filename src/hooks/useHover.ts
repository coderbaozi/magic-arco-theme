import { type RefCallback, useCallback, useEffect, useRef, useState } from 'react'

export function useHover<T extends Element>(): [RefCallback<T>, boolean] {
  const [hover, setHover] = useState(false)

  const previousNode = useRef(null)

  const handleMouseEnter = useCallback(() => {
    setHover(true)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setHover(false)
  }, [])

  const customRef = useCallback(
    (node) => {
      if (previousNode.current?.nodeType === Node.ELEMENT_NODE) {
        previousNode.current.removeEventListener(
          'mouseenter',
          handleMouseEnter,
        )
        previousNode.current.removeEventListener(
          'mouseleave',
          handleMouseLeave,
        )
      }

      if (node?.nodeType === Node.ELEMENT_NODE) {
        node.addEventListener('mouseenter', handleMouseEnter)
        node.addEventListener('mouseleave', handleMouseLeave)
      }

      previousNode.current = node
    },
    [handleMouseEnter, handleMouseLeave],
  )

  return [customRef, hover]
}
