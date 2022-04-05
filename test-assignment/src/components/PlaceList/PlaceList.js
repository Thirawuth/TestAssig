import './PlaceList.scss'
import { Container , Button , Box , Grid ,Paper , Typography,ImageList,ImageListItem} from '@mui/material';
import {CalendarMonth } from '@mui/icons-material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from "react-router-dom";

const PlaceList = (props)=>{
  let navigate = useNavigate();
  const {item} = props
  let dt = new Date();
  const onClickPlace = (id)=>{
    props.onAddDeatil(id);
    navigate(`/Detail/${id}`);
  }
  return (
    <Grid container spacing={2} 
      sx={{
        padding:3
      }}>
      <Grid item xs={12}>
        <Typography sx={{
          mt: 3,
          fontWeight: 'bold',
          fontSize: 'h5.fontSize'
        }}>
          Plate List 
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={{sx:0,xl:5}}>
          {item.map(e => {
            return(
              <Grid item xs={12} xl={4} key={uuidv4()}
                sx={{mt:4}}
              >
                <Box
                  sx={{
                    padding: 1,
                    boxShadow: 3,
                    borderRadius: 3,
                    width: "100%",
                    height: "100%",
                    backgroundColor: '#ffff',
                    cursor: "pointer",
                  }}
                  onClick={()=>onClickPlace(e.id)}
                >
                  <Grid container spacing={2}>
                      <Grid item xs={3}>
                         <Box
                          component="img"
                            sx={{
                              borderRadius: 3,
                              width: "100%",
                              height: 100,
                            }}
                          src={`${e.profile_image_url}?w=100&h=100&fit=crop&auto=format`}
                         />
                      </Grid>
                      <Grid item xs={9}>
                        <Grid item xs={12}>
                          <Typography sx={{
                            fontWeight: 'bold',
                            fontSize: 'h6.fontSize'
                          }}>
                              {e.name}
                          </Typography>
                        </Grid>
                        <Grid item xs={12} sx={{
                          display:"flex"
                        }}>
                          <Typography sx={{
                            fontSize: '20',
                            display: 'flex',
                            alignItems: 'flex-start',
                            flexGrow: 1
                          }}>
                            <CalendarMonth />
                            {e.operation_time[dt.getDay()-1<0?6:dt.getDay()-1].time_open}
                            &nbsp;-&nbsp;
                            {e.operation_time[dt.getDay()-1<0?6:dt.getDay()-1].time_close}
                          </Typography>

                          <Typography sx={{
                            fontWeight: 'bold',
                            fontSize: '22',
                            display: 'flex',
                            color:"#134B8A",
                          }}>
                            <FiberManualRecordIcon/>
                            {e.rating}
                          </Typography>
                        </Grid>
                      </Grid>
                  </Grid>
                  <Grid container spacing={2} sx={{mt:2}}>
                    <Grid item xs={12}
                      className="box-image-preview"
                      sx={{
                        display:"flex"
                        
                      }} 
                     >
                      {e.images.map((item) => (
                        <Box
                        key={uuidv4()}
                        className='preview-img'
                          component="img"
                            sx={{
                              width: "100%",
                              height: 150,
                            }}
                          src={`${item}?w=164&h=164&fit=cover&auto=format`}
                        />
                      ))} 
                    </Grid>
                  </Grid>
                </Box>
          </Grid>
            )
          })}
          
        </Grid>
      </Grid>

    </Grid>

    
  );
}

export default PlaceList;
