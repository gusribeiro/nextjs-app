import { createContext, ReactNode, useContext, useState } from 'react'

type ProviderProps = {
  children: ReactNode
}

const Context = createContext(null)

export function ContextProvider({ children }: ProviderProps): JSX.Element {
  const [context, setContext] = useState({})

  return (
    <Context.Provider value={[context, setContext]}>
      {children}
    </Context.Provider>
  )
}

export function useAppContext() {
  return useContext(Context)
}
