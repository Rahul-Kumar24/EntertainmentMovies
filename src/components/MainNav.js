import React , {useEffect} from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import MovieIcon from '@material-ui/icons/Movie';
import TvIcon from '@material-ui/icons/Tv';
import SearchIcon from '@material-ui/icons/Search';
const useStyles = makeStyles({
  root: {
          
          width: '100%',
          bottom:0,
          position:'fixed',
          backgroundColor:'black',
          zIndex: 100
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
          console.log(value)
 const history = useHistory();
 useEffect(() => {
         if(value===0 ){
                    history.push('/')
          }
         if(value===1 ){
                    history.push('/movies')
          }
         if(value===2 ){
                    history.push('/series')
          }  
         if(value===3 ){
                    history.push('/search')
          }       

 }, [value, history])
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction style={{color:"white"}} label="Trending" icon={<TrendingUpIcon />} />
      <BottomNavigationAction style={{color:"white"}} label="Movies" icon={<MovieIcon />} />
      <BottomNavigationAction style={{color:"white"}} label="TvSerise" icon={<TvIcon />} />
      <BottomNavigationAction style={{color:"white"}} label="Search" icon={<SearchIcon />} />
    </BottomNavigation>
  );
}
