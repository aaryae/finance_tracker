import { useCallback, useState } from 'react'

const useToggle = (initialValue: boolean): [boolean, () => void] => {
  const [state, setState] = useState<boolean>(initialValue)

  const toggle = useCallback(() => {
    setState((prevState) => !prevState)
  }, [])

  return [state, toggle]
}

export default useToggle
