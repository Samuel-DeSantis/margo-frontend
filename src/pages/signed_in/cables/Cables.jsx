import React, { useEffect, useState } from 'react'

function Cables() {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {

    let URL = 'http://127.0.0.1:3000'
    let subDir = '/conduits'

    try {
        const response = await fetch(`${URL}/${subDir}`)
        if (!response.ok) {
          throw new Error('Response was not ok.')
        }
        const index = await response.json()
        setData(index)
        setLoading(false)
    } catch (error) {
      setError(error.message)
      setLoading(false)
    }
  }

  return (
    <div>
      <h1>Cables</h1>
      { loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: { error }</p>
      ) : (
        <ul >
          <li className='flex space-x-4'>
            <p>Tag</p>
            <p>Size</p>
            <p>From</p>
            <p>To</p>
          </li>
          {data.map(record => (
            <li className='flex space-x-4' key={ record.id }>
              <p>{ record.tag }</p>
              <p>{ record.size }</p>
              <p>{ record.from }</p>
              <p>{ record.to }</p>
              <p>Edit</p>
              <p>Delete</p>
            </li>
          ))}
        </ul>
      )}
      <p></p>
    </div>
  )
}

export default Cables