import React from 'react'

function card({mynmae, list, details}) {
    // console.log(props);   
  return (
    <>This is a card
    <div>myname</div>
    <h1>{details.gender}</h1>
    <ul>
        {list.map(l => (
            <li key={l}> {l}</li>
        ))}
    </ul>
    </>
  )
}

export default card