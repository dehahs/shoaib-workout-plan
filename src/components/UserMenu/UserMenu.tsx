import { useState } from 'react';
import { Avatar, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import { useAuth } from '../../contexts/AuthContext';

export function UserMenu() {
  const { user, signInWithGoogle, signOut } = useAuth();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    await signOut();
    handleClose();
  };

  if (!user) {
    //   style={{ padding: '10px 20px', margin: '20px' }}
    return (
      <button onClick={signInWithGoogle}>
        Sign in
      </button>
    );
  }
    

  return (
    <div>
        {/*  style={{ position: 'absolute', top: 20, right: 20 }} */}
      <IconButton onClick={handleMenuClick}>
        <Avatar
          src={user.photoURL || undefined}
          alt={user.displayName || 'User'}
        />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem>
          <Typography>{user.displayName || user.email}</Typography>
        </MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
} 