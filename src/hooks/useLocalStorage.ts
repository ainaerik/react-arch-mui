import { useState } from 'react'

/**
 * useLocalStorage
 *
 * @param key string
 * @param initialValue T
 * @returns [T, (value: T)=> void]
 */
const useLocalStorage = <T>(
  key: string,
  initialValue: T
): [T, (value: T) => void] => {
  const [storage, setStorage] = useState<T>(() => {
    try {
      const value = window.localStorage.getItem(key)
      return value ? (JSON.parse(value) as T) : initialValue
    } catch (err) {
      console.log('Local Storage Error : ', err)
      return initialValue
    }
  })

  const setValue = (value: T) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
      setStorage(value)
    } catch (err) {
      console.log('Local Storage Error : ', err)
    }
  }

  return [storage, setValue]
}

export default useLocalStorage
