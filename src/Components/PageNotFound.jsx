import React from 'react'

const PageNotFound = () => {
    const src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR2xz_1CKDF0ABHCQft3SohoDx8Y7KNAFnng&usqp=CAU"
  return (
    <div className="container">
        <img src={src} alt="page not found" />
    </div>
  )
}

export default PageNotFound
