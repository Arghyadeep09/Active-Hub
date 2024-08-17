import React, {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

const HardRepoButton = ({style}) => {

    const navigate = useNavigate();

    const [buttonClicked, setButtonClicked] = useState(false);

    useEffect(() => {
      if (buttonClicked) {
        if (!localStorage.getItem('token')) {
          navigate('/api/users/login');
        } else {
          navigate('/hardrepositories');
        }
        setButtonClicked(false);
      }
    }, [buttonClicked, navigate]);
  
    const handleButtonClick = () => {
      setButtonClicked(true);
    };
  return (
    <div>
      <button style={{...style,padding:'10px 30px',cursor:'pointer',color:'white',background:'#eb853c',fontFamily:'cursive',fontSize:'18px'}}
      className="button1" onClick={handleButtonClick}>Hard</button>
    </div>
  )
}

export default HardRepoButton;