import React from 'react';
import { Spinner } from 'react-bootstrap';

// The .sr-only class hides an element to all devices except screen readers: Skip to main content. Combine .sr-only with .sr-only-focusable to show the element again when it is focused (e.g. by a keyboard-only user): Skip to main content. 

const Loader = () => {
  return (
    <Spinner
      animation="border"
      role="status"
      style={{
        height: '100px',
        width: '100px',
        margin: 'auto',
        display: 'block'
      }}>
      <span className="sr-only">Loading...</span>
    </Spinner>
  )
}


export default Loader;