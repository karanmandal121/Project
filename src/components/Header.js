import React from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const Navigate = useNavigate();
  return (
    <HeaderContainer>
      <div className='logo'>
        <img
          src='https://res.cloudinary.com/ehizeex-shop/image/upload/v1668265433/NetflixApp/2560px-Netflix_2015_logo.svg_rbicwl_knwp6f.png'
          alt='no internet connection'
        />
      </div>
      <button onClick={() => Navigate(props.login ? '/login' : '/signup')}>
        {props.login ? 'Log In' : 'Sign In'}
      </button>
    </HeaderContainer>
  )
}
const HeaderContainer = styled.div`
/* Full body kai lie */
display: flex;
justify-content: space-between;
align-items: center;
padding:1rem;
margin:0.5rem;
/* Image kai lie LOGO class name hais */
.logo{
  img{
    height: 2rem;
    cursor: pointer;
  }
}
/* Button kai lie css */
button{
  padding: 0.5rem 1rem;
  background-color: red;
  border: none;
  cursor: pointer;
  color: white;
  font-weight: bolder;
  font-size: 1.05rem;
}
`

export default Header;
