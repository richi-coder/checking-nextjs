'use client'

import React from 'react'
import ReactComponent from './ReactComponent'

function Consumer({children}) {
  return (
    <ReactComponent>
        {children}
    </ReactComponent>
  )
}

export default Consumer