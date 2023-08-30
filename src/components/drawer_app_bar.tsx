'use client'

// Based on https://mui.com/material-ui/react-app-bar/#responsive-app-bar-with-drawer
import MenuIcon from '@mui/icons-material/Menu'
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Link as MuiLink,
} from '@mui/material'
import NextLink from 'next/link'
import * as React from 'react'

const drawerWidth = 240

type NavItem = {
  text: string
  href: string
}

const navItems: NavItem[] = [
  {
    text: 'ホーム',
    href: '/',
  },
]

export default function DrawerAppBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant='h6' sx={{ my: 2 }}>
        <NextLink href='/' passHref legacyBehavior>
          <MuiLink underline='none' color='inherit'>
            Amaterus Tool
          </MuiLink>
        </NextLink>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText>
                <NextLink href={item.href} passHref legacyBehavior>
                  <MuiLink underline='none' color='inherit'>
                    {item.text}
                  </MuiLink>
                </NextLink>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component='nav'>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant='h6'
            component='div'
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <NextLink href='/' passHref legacyBehavior>
              <MuiLink underline='none' color='inherit'>
                Amaterus Tool
              </MuiLink>
            </NextLink>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item.text} sx={{ color: '#fff' }}>
                <NextLink href={item.href} passHref legacyBehavior>
                  <MuiLink underline='none' color='inherit'>
                    {item.text}
                  </MuiLink>
                </NextLink>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component='nav'>
        <Drawer
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  )
}
