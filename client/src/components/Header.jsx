import { useNavigate } from 'react-router-dom';
import '../../styles.css';
export function Header() {
  // const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };
  return (
   <header className='header'>
    <button className='navButton' onClick={()=> navigate(-1)}>Назад</button>
    <button className='navButton' onClick={()=> navigate('/')}>На главную</button>
   </header>
  );
}