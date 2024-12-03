import React, { useEffect, useState } from 'react';
import { Box, Modal, Typography, Avatar, Divider, Button } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import {api} from '../../apis/base'; // Adjust the import path to your API file
import { logout } from '../../apis/users';

const Profile = ({ open, handleClose }) => {
  const [user, setUser ] = useState(null);
  const navigate = useNavigate(); // Initialize the useNavigate hook

  useEffect(() => {
    const userData = localStorage.getItem('jwt'); // Retrieve the JWT token
    if (userData) {
      setUser (JSON.parse(userData)); // Parse and set the user data
    }
  }, []);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: '8px',
  };

  const handleLogout = async () => {
    logout(() => {
      navigate(`/`);
    });
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2" align="center">
          User Profile
        </Typography>
        <Divider sx={{ my: 2 }} />

        {user ? (
          <Box display="flex" flexDirection="column" alignItems="center">
            <Avatar alt={user.user.name} src={user.user.image} sx={{ width: 56, height: 56, mb: 2 }} />
            <Typography variant="h6">{user.user.name}</Typography>
            <Typography variant="body2" color="text.secondary">{user.user.type}</Typography>
            <Typography variant="body2" color="text.secondary">Phone: {user.user.phone}</Typography>
            <Typography variant="body2" color="text.secondary">Email: {user.user.email}</Typography>
            {/* Uncomment if you want to display these fields */}
            {/* <Typography variant="body2" color="text.secondary">Pending: {user.pending || 'N/A'}</Typography>
            <Typography variant="body2" color="text.secondary">Address: {user.address || 'N/A'}</Typography>
            <Typography variant="body2" color="text.secondary">Website: {user.website_link || 'N/A'}</Typography> */}
          </Box>
        ) : (
          <Typography variant="body2" color="text.secondary">Loading user information...</Typography>
        )}

        <Divider sx={{ my: 2 }} />

        <Button 
          variant="contained" 
          color="error" 
          startIcon={<ExitToAppIcon />} 
          onClick={handleLogout} 
          fullWidth
        >
          Logout
        </Button>
      </Box>
    </Modal>
  );
};

export default Profile;