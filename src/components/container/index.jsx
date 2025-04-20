import React from 'react'

function Container({ fullWidth, children }) {

    const containerClass = fullWidth ? '' : 'container mx-auto md:px-10 px-4 h-full';

  return (
    <div className={containerClass}>
        {children}
    </div>
  )
}

export default Container