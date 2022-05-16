import { motion } from 'framer-motion'
import styled from '@mui/system/styled'
import IconButton from '@mui/material/IconButton'
import ListItem from '@mui/material/ListItem'
import Box from '@mui/material/Box'
import MenuIcon from '@mui/icons-material/MenuOutlined'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import CloseIcon from '@mui/icons-material/Close'
import Link from '@mui/material/Link'

const HamburguerMenu = ({ toggle, setToggle }) => (
  <>
    <IconButton
      size='large'
      edge='start'
      aria-label='menu'
      onClick={() => setToggle(true)}
    >
      <MenuIcon />
    </IconButton>
    <StyledDrawer anchor='right' open={toggle} onClose={() => setToggle(false)}>
      <StyledList width='100%'>
        <motion.div
          whileInView={{ x: [150, 0] }}
          transition={{ duration: 0.85, ease: 'easeOut' }}
        >
          <Box display='flex' justifyContent='flex-end'>
            <IconButton onClick={() => setToggle(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {['home', 'about', 'work', 'skills', 'contact'].map(item => (
              <StyledListItem key={item}>
                <Link
                  href={`#${item}`}
                  underline='none'
                  onClick={() => setToggle(false)}
                >
                  {item}
                </Link>
              </StyledListItem>
            ))}
          </List>
        </motion.div>
      </StyledList>
    </StyledDrawer>
  </>
)

export default HamburguerMenu

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  fontFamily: 'sans-serif',
  '& .MuiDrawer-paper': {
    position: 'fixed',
    top: 0,
    bottom: 0,
    right: 0,
    zIndex: 5,

    padding: '1rem',

    width: '60%',
    height: '100vh',

    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',

    backgroundColor: '#282626f2',
    backgroundSize: 'cover',
    backgroundRepeat: 'repeat',

    /* top box shadow */

    boxShadow: '0px 0px 20px rgba(168, 168, 168, 0.15)',

    [theme.breakpoints.up('md')]: {
      width: '25%'
    },

    '& .MuiIconButton-root': {
      width: '35px',
      height: '35px',
      color: '#fff',
      margin: '0.5rem 1rem'
    },

    '& .MuiList-root': {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      height: '100%',
      width: '100%',

      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      flexDirection: 'column',

      '& .MuiListItem-root': {
        margin: '1rem',

        '& .MuiLink-root': {
          color: '#fff',
          textTransform: 'uppercase',
          fontSize: '1rem',
          fontWeight: 500,
          transition: 'all 0.3s ease-in-out',
          cursor: 'pointer',
          width: '100%',

          '&:hover': {
            color: '#313bac'
          }
        },
        '&:hover': {
          background: '#89bed359',
          width: '93%'
        }
      }
    },
    [theme.breakpoints.up('lg')]: {
      display: 'none'
    }
  }
}))

const StyledList = styled(Box)(() => ({
  paddingTop: 0
}))

const StyledListItem = styled(ListItem)(() => ({
  cursor: 'pointer'
}))
