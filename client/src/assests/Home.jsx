
import { useNavigate } from 'react-router-dom'
import '../../styles.css'

export const Home = () => {
  const navigate = useNavigate()

  return (
    <svg x="0px" y="0px" viewBox="0 0 1000 1000" width='48' height='48'  onClick={() => navigate('/')}>
<rect id="home-nav" width="1000" height="1000" rx="120" fill="#4520AB"></rect>
<path d="M983.7,484.5L545.6,50.2c-24.3-24.1-66.8-24.1-91.1,0L16.3,484.5c-6.3,6.2-7.9,15.4-4.7,23.1c3,8.1,10.7,14,19.9,14H135v382.4c0,35.2,28.9,63.8,64.4,63.8h150.3c35.5,0,64.4-28.6,64.4-63.8l0-298.2c0-11.7,9.6-21.3,21.5-21.3h128.8c11.8,0,21.5,9.5,21.5,21.3v298.2c0,35.2,28.9,63.8,64.4,63.8h150.3c35.5,0,64.4-28.6,64.4-63.8V563.4c0-11.7-9.6-21.3-21.5-21.3c-11.9,0-21.5,9.5-21.5,21.3v340.7c0,11.7-9.6,21.3-21.5,21.3H650.3c-11.8,0-21.5-9.5-21.5-21.3V605.9c0-35.2-28.9-63.8-64.4-63.8H435.6c-35.5,0-64.4,28.6-64.4,63.8v298.2c0,11.7-9.6,21.3-21.5,21.3H199.4c-11.8,0-21.5-9.5-21.5-21.3V501c0-10-7.2-18.1-16.6-20.3c-2.6-1.2-5.5-1.9-8.6-1.9h-70L484.8,80.3c8.1-8,22.2-8,30.3,0l438.2,434.3c4.2,4.2,9.7,6.2,15.2,6.2c5.5,0,11-2.1,15.2-6.2C992.1,506.3,992.1,492.8,983.7,484.5z" fill="rgb(41, 237, 255)"/>
</svg>
  )
}

