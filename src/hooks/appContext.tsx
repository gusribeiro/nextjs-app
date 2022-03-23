import { createContext, ReactNode, useContext, useState } from 'react'

type ProviderProps = {
  children: ReactNode
}

const Context = createContext(null)

export function ContextProvider({ children }: ProviderProps): JSX.Element {
  const [context, setContext] = useState({teste: true})

  const updateContext = (values) => {
    setContext({
      ...context,
      ...values
    })
  }

  return (
    <Context.Provider value={[context, updateContext]}>
      {children}
    </Context.Provider>
  )
}

export function useAppContext() {
  return useContext(Context)
}
