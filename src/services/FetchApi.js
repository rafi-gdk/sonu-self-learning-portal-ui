import React, { useState, useEffect } from 'react'

export default function FetchApi() {
  const [topics, setTopics] = useState([])
  const fetchPost = () => {
    fetch('http://localhost:1001/tutorial-service/topics')
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        setTopics(res)
      })
  }
  useEffect(() => {
    fetchPost()
  }, [])
  return (
    <>
    </>
  )
}