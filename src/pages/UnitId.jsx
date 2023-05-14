import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const UnitId = () => {
  const {unitId} = useParams()
  const [data,setData]=useState({})
  useEffect(()=>{
    fetch(`https://math-course-p926y4f5x-baiel1922.vercel.app/course/unit/${unitId}`)
      .then(resp=>resp.json())
      .then(resp =>setData(resp))
  },[unitId])
  console.log(data)
  return (
    <div>
      {data.title}
      <br />
     <ul>
     {data.topics?.map(item=>(
        <li key={item.id} >
        <Link to={`/registr/${item.id}`}>
              {item.title}
        </Link>
       <p> {item.text}</p>
        </li>
      ))}
     </ul>
    </div>
  )
}

export default UnitId