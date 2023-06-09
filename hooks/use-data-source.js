import { useState, useEffect } from 'react'

export const unknown = { id: 'unknown' }

export const States = {
  IDLE: 'IDLE',
  FETCHING: 'FETCHING',
  FETCHED: 'FETCHED',
  ERROR: 'ERROR'
}

export default function useDataSource(getResourceFn, resourceName) {
  const [state, setState] = useState(States.IDLE)
  const [resource, setResource] = useState(unknown)

  const isIdle = state === States.IDLE
  const isFetching = state === States.FETCHING
  const isFetched = state === States.FETCHED
  const isError = state === States.ERROR
  const status = { isIdle, isFetching, isFetched, isError }

  useEffect(() => {
    const abortController = new AbortController()

    setState(States.FETCHING)
    getResourceFn(abortController)
      .then((data) => {
        setState(States.FETCHED)
        setResource(data)
      })
      .catch((err) => {
        if (err.code === 20 || err.name === 'AbortError') {
          // Aborted, do nothing
        } else {
          setState(States.ERROR)
          setResource(unknown)
        }
      })

    return () => {
      abortController.abort()
    }
  }, [getResourceFn])

  return {
    status,
    [resourceName]: resource
  }
}

export const serverResource = (resourceUrl) => async (abortController) => {
  const res = await fetch(resourceUrl, { signal: abortController.signal })
  return await res.json()
}
