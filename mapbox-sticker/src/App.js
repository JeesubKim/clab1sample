/****************************************
 * File : App.js
 * In this file, Mapbox is implemented with react hook
 * 
 * Author : Jeesub Kim
 ****************************************/


import React, {useEffect, useState, useRef} from 'react';
import {IconButton,Container,AppBar,Toolbar,Typography,Button,Paper,InputBase,CircularProgress,Switch } from '@material-ui/core/'
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle'
import AcUnitIcon from '@material-ui/icons/AcUnit';
import MemoryIcon from '@material-ui/icons/Memory';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import NotListedLocationIcon from '@material-ui/icons/NotListedLocation';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';

import MediaCard from './MediaCard';


import ssd1image from './ssd.PNG'
import ssd2image from './ssd2.PNG'
import './App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: '20px',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  nroot: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
    marginLeft:'20px'
  },
}));n

const samsung = {
  title:'삼성전자 삼성 860 EVO 시리즈',
  paragraph:'최저56,890원 - 용산전자상가 https://smartstore.naver.com/navy6825/products/4331033218?NaPm=ct%3Dkeefv3cg%7Cci%3D894d10e698dd5159d368c9d1551e6dcc1cb59380%7Ctr%3Dslsbrc%7Csn%3D194454%7Cic%3D%7Chk%3Dfc1399e386e0e3ff67cb6e5dee8dba80d093f650'
}
const samsung2 = {
  title:'삼성전자 SSD 860 EVO 250GB MZ-76E250BW 병행수입',
  paragraph:'최저56,990원 - EVERLABS https://smartstore.naver.com/everlabs/products/4940746060?NaPm=ct%3Dkeeg5600%7Cci%3D0b8da35216661515819f20f0d16829d0f8cfbc4c%7Ctr%3Dslsbrc%7Csn%3D235750%7Cic%3D%7Chk%3Da9caa65aa86714cca9f76eea9b8f680f15190423'
}
function App(props){

  
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const listhandleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <div>
      <Container maxWidth='sm'>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              XYZ
            </Typography>
            <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Request..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
            <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
            >
            <AccountCircle />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Paper style={{marginTop:'5px',padding:'10px'}}>
        <Chip
        size='small'
          icon={<MemoryIcon />}
          label="삼성 SSD 860 PRO 최저가"
          clickable
          color="primary"
          onDelete={()=>{}}
          // deleteIcon={<DoneIcon />}
        />
        <Chip
        size='small'
          icon={<AcUnitIcon />}
          label="COVID19 현황"
          clickable
          color="secondary"
          onDelete={()=>{}}
          // deleteIcon={<DoneIcon />}
        />
        <Chip
        size='small'
          icon={<NotListedLocationIcon />}
          label="확진자 동선"
          clickable
          color="secondary"
          onDelete={()=>{}}
          // deleteIcon={<DoneIcon />}
        />
        <Chip
        size='small'
          icon={<TrendingUpIcon />}
          label="삼성전자 주가"
          clickable
          color="primary"
          // style={{background:'#239B56',color:'white'}}
          onDelete={()=>{}}
          // deleteIcon={<DoneIcon />}
        />
        <Chip
        size='small'
          icon={<SportsSoccerIcon />}
          label="챔피언스리그"
          clickable
          color='primary'
          // style={{background:'#239B56',color:'white'}}
          onDelete={()=>{}}
          // deleteIcon={<DoneIcon />}
        />
        </Paper>
        <div className='nroot' style={{marginTop:'20px'}}>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>삼성 SSD 860 PRO 최저가</Typography>
          <Typography className={classes.secondaryHeading}>56,890원 - 용산상가</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {/* <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
            maximus est, id dignissim quam.
          </Typography> */}
          <MediaCard title={samsung.title} paragraph={samsung.paragraph} image={ssd1image}/>
          <MediaCard title={samsung2.title} paragraph={samsung2.paragraph} image={ssd2image}/>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Users</Typography>
          <Typography className={classes.secondaryHeading}>
            You are currently not an owner
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar
            diam eros in elit. Pellentesque convallis laoreet laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>Advanced settings</Typography>
          <Typography className={classes.secondaryHeading}>
            Filtering has been entirely disabled for whole web server
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
            vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Personal data</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
            vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>

        {/* <CircularProgress className={classes.root}/>
        <Switch className={classes.root}
          checked={(state.checkedB)}
          onChange={listhandleChange}
          color="primary"
          name="checkedB"
          inputProps={{ 'aria-label': 'primary checkbox' }}
      /> */}
      </Container>
  </div>
  )
}

//rating 을 넣는다
//Bottom Navigation
export default App;
