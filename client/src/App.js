import React, { useEffect, useState } from 'react'
// useEffect isbused to fetch the api

const App = () => {
  // variable contains our backend's api
  const [backendData, setBackendData] = useState({})

  // going to the special api
  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data)
      })
  }, [])

  return (
    <div>
      {/* display the users */}
      {typeof backendData.users === "undefined" ? (
        <p>Loading...</p>
      ) : (
        backendData.users.map((user, i) => (
          <p key={i}>{user}</p>
        ))
      )}
    </div>
  )
}

export default App
