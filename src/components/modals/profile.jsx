import React from 'react';
import { Box, Modal, Typography, Avatar, Divider, Button } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const Profile = ({ open, handleClose }) => {
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
  const user={
 "id": 1,
        "image": "https://yousab-tech.com/jaiden/public/default.jpg",
        "name": "Super Admin",
        "pending": 0,
        "type": "admin",
        "phone": "01126785910",
        "email": "admin@gmail.com",
        "address": null,
        "website_link": null,
        "governorates": []
  }

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
        
        <Box display="flex" flexDirection="column" alignItems="center">
          <Avatar alt={user.name} src={user.image} sx={{ width: 56, height: 56, mb: 2 }} />
          <Typography variant="h6">{user.name}</Typography>
          <Typography variant="body2" color="text.secondary">{user.type}</Typography>
          <Typography variant="body2" color="text.secondary">Phone: {user.phone}</Typography>
          <Typography variant="body2" color="text.secondary">Email: {user.email}</Typography>
          <Typography variant="body2" color="text.secondary">Pending: {user.pending}</Typography>
          <Typography variant="body2" color="text.secondary">Address: {user.address || 'N/A'}</Typography>
          <Typography variant="body2" color="text.secondary">Website: {user.website_link || 'N/A'}</Typography>
        </Box>
        <Divider sx={{ my: 2 }} />
        
        <Button 
          variant="contained" 
          color="error" 
          startIcon={<ExitToAppIcon />} 
          // onClick={handleLogout} 
          fullWidth
        >
          Logout
        </Button>
      </Box>
    </Modal>
  );
};

export default Profile;