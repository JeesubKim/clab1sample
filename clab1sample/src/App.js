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

import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';

import MediaCard from './MediaCard';


import ssd1image from './ssd.PNG'
import ssd2image from './ssd2.PNG'
import covid19 from './covid19.PNG'
import champs from './champs.PNG'
import coman from './coman.PNG'
import stock from './stock.PNG'
import covidmap from './covidmap.png'
import './App.css';
import Chips from './Chips'
import AcUnitIcon from '@material-ui/icons/AcUnit';
import MemoryIcon from '@material-ui/icons/Memory';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import NotListedLocationIcon from '@material-ui/icons/NotListedLocation';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';

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
}));

const samsung = {
  title:'삼성전자 삼성 860 EVO 시리즈',
  paragraph:'최저56,890원 - 용산전자상가 https://smartstore.naver.com/navy6825/products/4331033218?NaPm=ct%3Dkeefv3cg%7Cci%3D894d10e698dd5159d368c9d1551e6dcc1cb59380%7Ctr%3Dslsbrc%7Csn%3D194454%7Cic%3D%7Chk%3Dfc1399e386e0e3ff67cb6e5dee8dba80d093f650'
}
const samsung2 = {
  title:'삼성전자 SSD 860 EVO 250GB MZ-76E250BW 병행수입',
  paragraph:'최저56,990원 - EVERLABS https://smartstore.naver.com/everlabs/products/4940746060?NaPm=ct%3Dkeeg5600%7Cci%3D0b8da35216661515819f20f0d16829d0f8cfbc4c%7Ctr%3Dslsbrc%7Csn%3D235750%7Cic%3D%7Chk%3Da9caa65aa86714cca9f76eea9b8f680f15190423'
}
function addChip(Component,title,color){
  return {Component, title, color};
}

let mchiplist = [
  // addChip(MemoryIcon, "삼성 SSD 860 PRO 최저가", "primary"),
  addChip(AcUnitIcon, "COVID19 현황", "secondary"),
  addChip(NotListedLocationIcon, "확진자 동선", "secondary"),
  addChip(TrendingUpIcon, "삼성전자 주가", "primary"),
  addChip(SportsSoccerIcon, "챔피언스리그", "primary")
];

function App(props){


  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });
  const [expanded, setExpanded] = React.useState(false);
  const [searchKey, setSearchKey] = React.useState('');

  const [chiplist, setChiplist] = React.useState(null);
  const [scenario, setScenario] = React.useState(false);
  useEffect(()=>{
    // setChiplist(chiplist);
    console.log('app.js useEffect')
    setChiplist(mchiplist);
  })
  
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
            id='edValue'
              placeholder="Request..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onKeyPress={(event)=>{
                
                if(event.key == 'Enter'){
               
                  if(searchKey!==''){
                    setChiplist(mchiplist.push(addChip(MemoryIcon,searchKey,'primary')));
                    // console.log('app.js setChiplist',chiplist);
                    setSearchKey('')
                    // alert(event)
                    
                    let edValue = document.getElementById("edValue");
                    // console.log(edValue);
                    if(edValue.value === '삼성 SSD 860 PRO 최저가'){
                      setTimeout(()=>{setScenario(true)},3000);
                    }
                    edValue.value='';
                  }
                    
              
                  
                }
              
              }}

              onChange={event=>{
                setSearchKey(event.currentTarget.value);
              }}
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

        <Chips chiplist={chiplist}/>
       
        </Paper>
        <div className='nroot' style={{marginTop:'20px'}}>
        
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>COVID19 현황</Typography>
          <Typography className={classes.secondaryHeading}>
            확진환자 19,400, 검사진행 54,046, 완치자 14,765, 사망자 321
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <MediaCard title={'COVID19 현황'} paragraph={'2020-08-29 일별 확진자 323명 발생'} image={covid19}/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>확진자 동선</Typography>
          <Typography className={classes.secondaryHeading}>
            화성시 확진자 동선
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <MediaCard title={'화성시 확진자 동선 지도'} paragraph={'100번(송산면) 확진자 발생'} image={covidmap}/>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>삼성전자 주가</Typography>
          <Typography className={classes.secondaryHeading}>
          55,400 전일대비 하락 200 (-0.36%)
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <MediaCard title={'2020-08-27 주가'} paragraph={'55,400 전일대비 하락 100 (-0.36%)'} image={stock}/>
          <MediaCard title={'2020-08-28 주가'} paragraph={'55,600 전일대비 하락 200 (-1.42%)'} image={stock}/>
          
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography className={classes.heading}>챔피언스리그</Typography>
          <Typography className={classes.secondaryHeading}>
          19-20 챔피언스 리그, 뮌헨 우승 : 뮌헨 1 vs 0 파리 생제르망
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <MediaCard title={'챔피언스리그'} paragraph={'19-20 챔피언스 리그, 뮌헨 우승 : 뮌헨 1 vs 0 파리 생제르망'} image={champs}/>
        <MediaCard title={'뮌헨 결승골'} paragraph={'‘결승골’ 코망, 챔피언스리그 결승전 MOM 선정'} image={coman}/>
        
        </AccordionDetails>
      </Accordion>
      {scenario && <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>삼성 SSD 860 PRO 최저가</Typography>
          <Typography className={classes.secondaryHeading}>56,890원 - 용산상가</Typography>
        </AccordionSummary>
        <AccordionDetails>

          <MediaCard title={samsung.title} paragraph={samsung.paragraph} image={ssd1image}/>
          <MediaCard title={samsung2.title} paragraph={samsung2.paragraph} image={ssd2image}/>
        </AccordionDetails>
      </Accordion>}
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
