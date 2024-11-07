import { styled, useTheme } from "@mui/material/styles";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from '@mui/material/Avatar';
import MuiDrawer from "@mui/material/Drawer";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { BarChartOutlined,  ContactsOutlined, HelpOutlined, MapOutlined, PeopleOutlined, PersonOutline, PieChartOutlined, ReceiptOutlined, TimelineOutlined } from "@mui/icons-material";
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { grey } from '@mui/material/colors';
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});
const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    variants: [
      {
        props: ({ open }) => open,
        style: {
          ...openedMixin(theme),
          "& .MuiDrawer-paper": openedMixin(theme),
        },
      },
      {
        props: ({ open }) => !open,
        style: {
          ...closedMixin(theme),
          "& .MuiDrawer-paper": closedMixin(theme),
        },
      },
    ],
  }));
  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));
  const array1 = [
    {"text":"Dasboard", "icon":<HomeOutlinedIcon/> , "path": "/"},
    {"text":"Manage Team", "icon":<PeopleOutlined/> , "path": "/team"},
    {"text":"Contacts Information", "icon":<ContactsOutlined/> , "path": "/contacts"},
    {"text":"Inovices Balance", "icon":<ReceiptOutlined/> , "path": "/invoices"},
  ];
  const array2 = [
    {"text":"Profile Form", "icon":<PersonOutline/> , "path": "/form"},
    {"text":"Calender", "icon":<CalendarTodayOutlinedIcon/> , "path": "/calender"},
    {"text":"FAQ Page", "icon":<HelpOutlined/> , "path": "/faq"},
  ];
  const array3 = [
    {"text":"Bar Chart", "icon":<BarChartOutlined/> , "path": "/bar"},
    {"text":"Pie Chart", "icon":<PieChartOutlined/> , "path": "/pie"},
    {"text":"Line Chart", "icon":<TimelineOutlined/> , "path": "/line"},
    {"text":"Geography Chart", "icon":<MapOutlined/> , "path": "/geography"},
  ];
  
  
// eslint-disable-next-line react/prop-types
const SideBar = ({open,handleDrawerClose}) => {
    const theme = useTheme();
    const navigate = useNavigate();
    let location = useLocation();
    return (
        <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Avatar sx={{mx:"auto", width:open?88:44, height:open?88:44, mt:2, border:"2px solid gray", mb:1,transition:"0.25s"}} alt="Kermina Milad" src="/images/avatar.jpg"  />
        <Typography align="center" color="intial" sx={{fontSize:open?17:0, transition:"0.25s"}}>Kermina</Typography>
        <Typography align="center" color="intial" sx={{fontSize:open?15:0, mb:1,transition:"0.25s", color:theme.palette.info.main}}>Admin</Typography>
        <Divider />
        <List>
          {array1.map((item) => (
            <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
              <ListItemButton
              onClick={() => { 
                navigate(item.path)               
              }
              }
                sx={[
                  {
                    bgcolor:location.pathname=== item.path?theme.palette.mode==="dark"?grey[800]:grey[300]:null,
                    minHeight: 48,
                    px: 2.5,
                  },
                  open
                    ? {
                        justifyContent: "initial",
                      }
                    : {
                        justifyContent: "center",
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center",
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: "auto",
                        },
                  ]}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {array2.map((item) => (
            <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
              <ListItemButton
              onClick={() => { 
                navigate(item.path)               
              }
              }
                sx={[
                  {
                    bgcolor:location.pathname=== item.path?theme.palette.mode==="dark"?grey[800]:grey[300]:null,
                    minHeight: 48,
                    px: 2.5,
                  },
                  open
                    ? {
                        justifyContent: "initial",
                      }
                    : {
                        justifyContent: "center",
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center",
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: "auto",
                        },
                  ]}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {array3.map((item) => (
            <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
              <ListItemButton
              onClick={() => { 
                navigate(item.path)               
              }
              }
                sx={[
                  {
                    bgcolor:location.pathname=== item.path?theme.palette.mode==="dark"?grey[800]:grey[300]:null,
                    minHeight: 48,
                    px: 2.5,
                  },
                  open
                    ? {
                        justifyContent: "initial",
                      }
                    : {
                        justifyContent: "center",
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center",
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: "auto",
                        },
                  ]}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    );
}

export default SideBar;
