import React from 'react'

export const ZButton = ({ variant, children, ...rest }) => {
  const styles = {
    backgroundColor: 'aquamarine',
    padding: '15px',
    border: 'none',
    borderRadius: '4px',
    maxWidth: '200px',
    fontSize: '14px'
  }
  return (
    <button type='button' style={styles}>
      {children}
    </button>
  )
}

// export default ZButton
