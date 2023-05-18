'use client'
import { createContext, useState } from "react"

export const AppContext = createContext();

function ReactComponent({children}) {
    const [state, setState] = useState(100)
  return (
    <AppContext.Provider value={state}>
      {children}
    </AppContext.Provider>
  )
}

export default ReactComponent