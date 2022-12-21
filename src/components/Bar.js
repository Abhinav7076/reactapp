import React from 'react'

const bar = () => {
  return (
    <>
        <nav class="nav nav-pills nav-fill" style={{marginLeft: '20em', marginRight: '20em'}}>
            <a class="nav-item nav-link active" href="#">Active</a>
            <a class="nav-item nav-link" href="#">Link</a>
            <a class="nav-item nav-link" href="#">Link</a>
            <a class="nav-item nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </nav>
    </>
  )
}

export default bar