import React,{useState} from 'react';
import './HomeStyle.css';
import SearchIcon from '@mui/icons-material/Search';


import Photo from '../../images/horoscopes.jpg'

export default function Home() {
const [info,setInfo] = useState()
  const getHoroscope = (sign) => {
    const URL = `https://aztro.sameerkumar.website/?sign=${sign}&day=today`;
        fetch(URL, {
            method: 'POST'
        }).then(response => response.json())
        .then(json => {console.log(json) 
          setInfo(json); }); 
  }


  return (
    <div className='home'>
       <source src={Photo} type='image/jpg' /> 
      <div className='content'>
        <h1>Welcome To Cosmic Astrology</h1>
        <form className='form' onSubmit={(e) => {e.preventDefault(); getHoroscope(e.target.sign.value)}}>
          <div><input name='sign' type='text' placeholder='Search horoscope'/>
           </div>
           <div>
             <button type='submit'><SearchIcon className='icon'/></button>
           </div>
        </form>
      </div>
      {info?
       <div className='Api'>
       Current Date: {info.current_date} <br />
       Compatibility: {info.compatibility} <br />
       Lucky Number: {info.lucky_number} <br />
       Lucky Time: {info.lucky_time} <br />
       Color: {info.color} <br />
       Date Range: {info.date_range} <br />
       Mood: {info.mood} <br />
       Description: {info.description} <br />
       
   </div> 
   
      :null
    }
      
    </div>
  )
}








