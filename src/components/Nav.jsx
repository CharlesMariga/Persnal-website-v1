import { Link } from "gatsby";
import React, { useEffect, useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled, { css } from "styled-components";

import { navLinks } from "../config";
import { loaderDelay } from "../utils";
import { IconLogo } from "./icons";

const Nav = ({ isHome }) => {
  const [isMounted, setIsMounted] = useState(!isHome);
  const [modalOpen, setModalOpen] = useState(false);

  const timeout = isHome ? loaderDelay : 0;
  const fadeClass = isHome ? "fade" : "";
  const fadeDownClass = isHome ? "fadedown" : "";

  useEffect(() => {
    let timeOut;
    setTimeout(() => {
      timeOut = setIsMounted(true);
    }, 500);
    return () => clearTimeout(timeOut);
  }, []);

  return (
    <StyledHeader>
      <StyledNav>
        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition classNames={fadeClass} timeout={timeout}>
              <IconLogo width={42} />
            </CSSTransition>
          )}
        </TransitionGroup>
        <StyledHeaderNavLinkContainer
          className={`${modalOpen ? "active" : ""}`}
        >
          <StyledNavLinks className={`${modalOpen ? "active" : ""}`}>
            <TransitionGroup component={null}>
              {isMounted &&
                navLinks &&
                navLinks.map(({ name, id }, i) => (
                  <CSSTransition
                    key={i}
                    classNames={fadeDownClass}
                    timeout={timeout}
                  >
                    <StyledNavLink
                      style={{
                        transitionDelay: `${isHome ? i * 100 : 0}ms`,
                      }}
                      onClick={() => setModalOpen(false)}
                    >
                      <Link to={`#${id}`}>{name}</Link>
                    </StyledNavLink>
                  </CSSTransition>
                ))}
            </TransitionGroup>
            <TransitionGroup component={null}>
              {isMounted && (
                <CSSTransition classNames={fadeDownClass} timeout={timeout}>
                  <HireMeBtn
                    style={{
                      transitionDelay: `${isHome ? navLinks.length * 100 : 0}`,
                    }}
                    href="mailTo:charlesmariga37@gmail.com?subject=Job%20opportunity"
                  >
                    Hire me
                  </HireMeBtn>
                </CSSTransition>
              )}
            </TransitionGroup>
          </StyledNavLinks>
        </StyledHeaderNavLinkContainer>

        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition classNames={fadeClass} timeout={timeout}>
              <MenuBtn onClick={() => setModalOpen(!modalOpen)}>
                <MenuIcon className={`${modalOpen ? "active" : ""}`} />
              </MenuBtn>
            </CSSTransition>
          )}
        </TransitionGroup>
      </StyledNav>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 11;
  background-color: transparent;
  padding: 0 5rem;

  height: 10rem;
  display: flex;

  @media screen and (prefers-reduced-motion: no-preference) {
    ${({ scrollDirection, scrollToTop }) =>
      scrollDirection === "up" &&
      !scrollToTop &&
      css`
        transform: translateY(0px);
        backdrop-filter: blur(10px);
        box-shadow: var(--box-shadow-sm);
      `}

    ${({ scrollDirection, scrollToTop }) =>
      scrollDirection === "down" &&
      !scrollToTop &&
      css`
        transform: translateY(-100%);
        backdrop-filter: blur(10px);
        box-shadow: var(--box-shadow-sm);
      `}
  }

  svg {
    fill: var(--primary);
  }
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const StyledHeaderNavLinkContainer = styled.div`
  @media screen and (${({ theme }) => theme.bp.tabletL}) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    backdrop-filter: blur(4px);
    opacity: 0;
    visibility: hidden;
    transition: var(--transition);

    &.active {
      opacity: 1;
      visibility: visible;
    }
  }
`;

const StyledNavLinks = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;

  @media screen and (${({ theme }) => theme.bp.tabletL}) {
    flex-direction: column;
    justify-content: center;
    gap: 8rem;
    width: 100%;
    max-width: 40rem;
    margin-left: auto;
    background-color: var(--bg-dark);
    height: 100%;
    transform: translateX(100%);
    transition: var(--transition);

    &.active {
      transform: translateX(0);
    }
  }
`;

const StyledNavLink = styled.li`
  padding: 1rem 1.5rem;
  counter-increment: item 1;

  @media screen and (${({ theme }) => theme.bp.tabletL}) {
    transition: none;
  }

  a {
    color: var(--white);

    @media screen and (${({ theme }) => theme.bp.tabletL}) {
      font-size: var(--font-24);
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    &::before {
      content: "0" counter(item) ".";
      margin-right: 5px;
      color: var(--primary);
      text-align: right;
      font-size: var(--font-14);

      @media screen and (${({ theme }) => theme.bp.tabletL}) {
        font-size: var(--font-18);
      }
    }
  }
`;

const HireMeBtn = styled.a`
  padding: 1.2rem 1.6rem;
  background-color: transparent;
  outline: none;
  border: 2px solid var(--primary);
  color: var(--white);
  font-size: var(--font-18);
  font-weight: 500;
  letter-spacing: 1px;
  border-radius: var(--border-radius-default);
  cursor: pointer;
  transition: var(--transition);
  margin-left: 1rem;
  display: inline-block;

  @media screen and (${({ theme }) => theme.bp.tabletL}) {
    font-size: var(--font-20);
  }

  &:hover {
    background-color: var(--primary-dark);
  }
`;

const MenuBtn = styled.button`
  border: none;
  background-color: transparent;
  display: none;
  cursor: pointer;
  padding: 15px;
  z-index: 100;
  margin-right: -3rem;

  @media screen and (${({ theme }) => theme.bp.tabletL}) {
    display: block;
  }
`;

const MenuIcon = styled.div`
  width: 28px;
  height: 2px;
  background-color: var(--primary);
  position: relative;
  cursor: pointer;
  transition: var(--transition);

  @media screen and (${({ theme }) => theme.bp.tabletL}) {
    &.active {
      transform: rotate(225deg);
    }

    &.active::before {
      display: inline-block !important;
      top: 0;
    }

    &.active::after {
      transform: rotate(-90deg) translateX(10px);
    }
  }

  &::before,
  &::after {
    content: "";
    width: 32px;
    height: 2px;
    background-color: var(--primary);
    position: absolute;
    right: 0;
    cursor: pointer;
  }

  &::before {
    top: -10px;
  }

  &::after {
    bottom: -10px;
  }
`;

export default Nav;
