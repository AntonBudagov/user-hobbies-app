import React from 'react'
// import './styles.scss'
// import { Header } from './header'
import styled from 'styled-components'
// import {setTheme} from "../../store/layout/actions";
// import {connect} from "react-redux";
import ThemLayout from '../../containers/ThemLayout'
// import {SiteThemeContext} from "../../containers/ThemLayout";

type HeaderProps = {
  count?: number
  theme?: string
  setTheme?: Function
}

const Header: React.FC<HeaderProps> = props => {
  console.log(props)
  return (
    <Wrapper>
      <HeaderInner>
        <Title>User Hobbies</Title>
        <HeaderRight>Total {props.count} users</HeaderRight>
        {/*<SiteThemeContext.Consumer>*/}
        {/*<ThemeSwitcherButton>aad</ThemeSwitcherButton>*/}
        {/*</SiteThemeContext.Consumer>*/}
        <ThemLayout>
          {({ theme, setTheme }) => (
            <ThemeSwitcherButton onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Light Mode {theme}</ThemeSwitcherButton>
          )}
        </ThemLayout>
      </HeaderInner>
    </Wrapper>
  )
}
// const mapStateToProps = (state: any) => ({
//     theme: state.layout.theme
// })
//
// export default connect(mapStateToProps, {setTheme})(Header)
export default Header

const Wrapper = styled('header')`
  padding: 0.5rem 1.5rem;
  background-color: ${props => props.theme.colors.brand};
  box-shadow: 0 2px 8px #f0f1f2;
`

const HeaderInner = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    flex-direction: row;
  }
`

const Title = styled('h2')`
  margin: 0;
  font-weight: 500;
  color: ${props => props.theme.colors.white};
`

const HeaderRight = styled('div')`
  padding-left: 1rem;
  color: ${props => props.theme.colors.white};
`

const ThemeSwitcherButton = styled('button')`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border: 1px solid ${props => props.theme.colors.white};
  border-radius: 3px;
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.brand};
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover,
  &:focus {
    background-color: transparent;
    color: ${props => props.theme.colors.white};
  }
`
