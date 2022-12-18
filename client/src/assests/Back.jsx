import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Back = () => {
  const navigate = useNavigate()

  return (
   
      <svg className="but-nav" width="48" height="48" viewBox="0 0 48 48" fill='#4520AB' onClick={() => navigate(-1)} style={{transform: 'rotate(180deg)'}}>
      <rect width="48" height="48" rx="12" fill="#4520AB"></rect>
      <path d="M20.2929 14.7071C19.9024 14.3166 19.9024 13.6834 20.2929 13.2929C20.6834 12.9024 21.3166 12.9024 21.7071 13.2929L20.2929 14.7071ZM31 24L31.7071 23.2929L32.4142 24L31.7071 24.7071L31 24ZM21.7071 34.7071C21.3166 35.0976 20.6834 35.0976 20.2929 34.7071C19.9024 34.3166 19.9024 33.6834 20.2929 33.2929L21.7071 34.7071ZM21.7071 13.2929L31.7071 23.2929L30.2929 24.7071L20.2929 14.7071L21.7071 13.2929ZM31.7071 24.7071L21.7071 34.7071L20.2929 33.2929L30.2929 23.2929L31.7071 24.7071Z" fill="rgb(41, 237, 255)"></path>
      </svg>
   
  )
}

