import {Link} from 'react-router-dom'

import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import ThemeContext from '../../context/ThemeContext'

import {MenuList, ListItem, CategoryName, MenuItem} from './styledComponents'
import './index.css'

const Menu = props => {
  const {isTrending, isHome, isGaming, isSavedVideos} = props
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <MenuList>
            <Link className="link" to="/">
              <ListItem isDark={isDark} active={isHome}>
                <MenuItem>
                  <AiFillHome
                    color={isHome ? '#ff0b37' : '#606060'}
                    fontSize={22}
                  />
                  <CategoryName isDark={isDark} active={isHome}>
                    Home
                  </CategoryName>
                </MenuItem>
              </ListItem>
            </Link>
            <Link className="link" to="/trending">
              <ListItem isDark={isDark} active={isTrending}>
                <MenuItem>
                  <AiFillFire
                    color={isTrending ? '#ff0b37' : '#606060'}
                    fontSize={22}
                  />
                  <CategoryName isDark={isDark} active={isTrending}>
                    Trending
                  </CategoryName>
                </MenuItem>
              </ListItem>
            </Link>
            <Link className="link" to="/gaming">
              <ListItem isDark={isDark} active={isGaming}>
                <MenuItem>
                  <SiYoutubegaming
                    color={isGaming ? '#ff0b37' : '#606060'}
                    fontSize={22}
                  />
                  <CategoryName active={isGaming} isDark={isDark}>
                    Gaming
                  </CategoryName>
                </MenuItem>
              </ListItem>
            </Link>
            <Link className="link" to="/saved-videos">
              <ListItem active={isSavedVideos} isDark={isDark}>
                <MenuItem>
                  <MdPlaylistAdd
                    color={isSavedVideos ? '#ff0b37' : '#606060'}
                    fontSize={22}
                  />
                  <CategoryName active={isSavedVideos} isDark={isDark}>
                    Saved videos
                  </CategoryName>
                </MenuItem>
              </ListItem>
            </Link>
          </MenuList>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default Menu
