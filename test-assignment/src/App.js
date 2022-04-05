import './App.css';
import PlaceList from './components/PlaceList/PlaceList';
import Detail from './components/Detail/Detail';
import _dataResult from './assets/etc/example_data.json';
import { Container , Button , Box , Grid ,Paper} from '@mui/material';
import { Badge , Toolbar ,AppBar ,Typography , Avatar ,Pagination } from '@mui/material'
import {Notifications,ExpandMore} from '@mui/icons-material';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import { useSearchParams } from "react-router-dom";

function App() {
  const [page, setPage] = useState(1);
  const [dataUse,setDataUse] = useState(_dataResult.slice(0,9));
  const [dataDetail, setDataDetail] = useState([]);
 
  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    setDataUse(_dataResult.slice((page-1)*9,((page-1)*9)+9))
  },[page]); 

  const onAddNewDetail = (id)=>{
    console.log(id)
    setDataDetail(dataUse.filter(item =>item.id == id))
    console.log(dataDetail)
  }
 
  const PlateListComp = ()=>{
    return (
      <Grid container spacing={2} >
        <Grid item xs={12}>
          <PlaceList key={uuidv4()} item={dataUse} onAddDeatil={onAddNewDetail} />
          <Grid container spacing={2} >
            <Grid item xs={12}
              sx={{
                display:"flex",
                justifyContent:"center"
              }}
            >
              <Pagination count={Math.ceil(_dataResult.length/9)} page={page} onChange={handleChange} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }

  return (
    <Container maxWidth="string" className='container-root'>
       <AppBar position="sticky" 
        sx={{
          top:0
        }}
       >
        <Toolbar className='toolbar-head'>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>
          <Badge color="secondary" badgeContent=" " variant="dot"  sx={{ mr: 4 }}>
            <Notifications  />
          </Badge>
          <Avatar alt="Thirawuth" src="/static/images/avatar/2.jpg" sx={{ mr: 2 }}/>
          <Button color="inherit"  >Thirawuth  <ExpandMore/></Button>
        </Toolbar>
      </AppBar>
      <Router>
          <Routes>
            <Route path='/' element={<PlateListComp/>} />
            <Route path='/Detail/:placeId' element={<Detail/>} />
          </Routes>
      </Router>
    </Container>

  );
}

export default App;
