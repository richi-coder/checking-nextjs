'use client'

import { useContext } from "react"
import { AppContext } from "./ReactComponent"

function Child() {
  return (
    <div>{useContext(AppContext)}</div>
  )
}

export default Child