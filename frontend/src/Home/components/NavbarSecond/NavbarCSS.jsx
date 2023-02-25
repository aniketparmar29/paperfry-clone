import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const Header = styled.nav`
    background: #000;
    height: 40px;
    font-size: 1rem;
    top: 0;
    color: white;
`

export const Sale = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 11px 0;
    font-size: .875rem;
    font-weight: 700;
`

export const LeftText = styled.div`
    margin-left: 7%;

    span {
        color: #FF7035;
    }
`

export const RightText = styled.div`
    margin-right: 7%;
    font-weight: normal;

    a{
        color: #FF7035;
    }
`
export const WholeNavbar = styled.div`
    width:100%;
`
export const Dummy = styled.nav`
    background: #f5f5f5;
    height: 40px;
    font-size: 1rem;
    top: 0;
    display: flex;
    justify-content: space-between;
`

export const DummyLeft = styled.div`
    display: flex;
    margin-left: 7%;
    padding: 11px 0;
    span {
        padding-right: 20px;
        color: #848484;
        font-weight: lighter;
    }
`

export const DummyRight = styled.div`
    display: flex;
    margin-right: 7%;
    padding-right: 0px;
    padding: 11px;
    font-weight: lighter;
    p{
        font-size: .75rem;
        padding-right: 11px ;
    }
    span{
        font-size: .75rem;
        padding-right: 0px ;
        color: #FF7035;
    }
`
export const Nav = styled.div`
    border-bottom: 1px solid #d3d3d3;
     
`

export const TopNav = styled.div`
  width: 93%;
  margin: auto;
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  height: 8vh;

  padding-top: 18px;
  .iconDiv {
    margin-left: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .icon {
    color: black;
    width: 30px;
    height: 38px;
    cursor: pointer;
    margin-left: 10px;
  }
  .help {
    margin-top: 2px;
    width: 47px;
  }
`;
export const NavLogo = styled(LinkR)`
    padding-right: 20px; 
    img{
        height: 45px;
        width: 170px;
    }
    
`

export const SearchBar = styled.input`
    height: 6vh;
    width: 850px;
    padding: 10px;
    background: #f5f5f5;
    border: none;
    font-size: 15px;
    font-weight: lighter;
`