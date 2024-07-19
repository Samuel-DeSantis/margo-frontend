import React, { useEffect, useState } from 'react'

function Projects() {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {

    let URL = 'http://127.0.0.1:3000'
    let subDir = '/projects'

    try {
        const response = await fetch(`${URL}/${subDir}`)
        if (!response.ok) {
          throw new Error('Response was not ok.')
        }
        const index = await response.json()
        console.log(index)
        setData(index)
        setLoading(false)
    } catch (error) {
      setError(error.message)
      setLoading(false)
    }
  }

  return (
    <div>
      <h1>Projects</h1>
      { loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: { error }</p>
      ) : (
        <ul>
          {data.map(item => (
            <li key={ item.id }>{ item.name }</li>
          ))}
        </ul>
      )}
      <p></p>
    </div>
  )
}

export default Projects