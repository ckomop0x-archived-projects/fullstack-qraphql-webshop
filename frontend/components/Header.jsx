import React from 'react';
import Link from 'next/link';
import Router from 'next/router'
import styled from 'styled-components';
import NProgress from 'nprogress';
import Nav from './Nav';


Router.onRouteChangeStart = () => {
    NProgress.start();
  };
  
  Router.onRouteChangeComplete = () => {
    NProgress.done();
  };
  
  Router.onRouteChangeError = () => {
    NProgress.done();
  };
  
const Logo = styled.h1`
    font-size: 4rem;
    margin: 0;
    position: relative;
    text-align: center;
    z-index: 2;
    transform: skew(-7deg);

    @media (min-width: ${({ theme }) => theme.$LG + 1}px){
        margin: auto;
        margin-left: 2rem;
        text-align: left;
    }

    a {
        padding: 0.5rem 1rem;
        background: ${({ theme }) => theme.red};
        color: white;
        text-transform: uppercase;
        text-decoration: none;
    }
`

const StyledHeader = styled.header`
    .bar {
        border-bottom: 10px solid ${({ theme }) => theme.black};
        display: grid;
        grid-template-columns: 1fr;
        justify-content: center;
        align-items: stretch;

        @media (min-width: ${({ theme }) => theme.$LG + 1}px) {
            grid-template-columns: auto 1fr;
            justify-content: space-between;
        }
    }
    .sub-bar {
        display: grid;
        grid-template-columns: auto 1fr;
        border-bottom: 1px solid ${({ theme }) => theme.lightGrey};
    }
`

const Header = () => (
    <StyledHeader>
        <div className="bar">
            <Logo>
                <Link href="/">
                    <a>Sick Fits</a>
                </Link>
            </Logo>
            <Nav />
        </div>
        <div className="sub-bar">
            <p>Search</p>
        </div>
        <div>Cart</div>
    </StyledHeader>
);

export default Header;