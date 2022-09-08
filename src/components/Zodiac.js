import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

const Zodiac = () => {
  const cardInfo = [
    { image: 'https://media.istockphoto.com/photos/capricorn-zodiac-sign-abstract-night-sky-background-picture-id858075242?k=20&m=858075242&s=612x612&w=0&h=I-KdFsOewM5S71mf56bAg3DECM5MU1vekV35QdpSBC4=', title: 'Capricorn', text: 'December 22-January 19' },
    { image: 'https://media.istockphoto.com/photos/aquarius-zodiac-sign-abstract-night-sky-background-picture-id858083214?k=20&m=858083214&s=612x612&w=0&h=OYJTo7ClybSnAlEOatKZ1aVR1Tc9eMvtUDX3pg-1Vuc=', title: 'Aquarius', text: 'January 20-Febuary 18' },
    {image:'https://media.istockphoto.com/photos/pisces-zodiac-sign-abstract-night-sky-background-picture-id858079562?k=20&m=858079562&s=612x612&w=0&h=PF_4FTYbreKSF8a9MzPbwQkJKENis2icVImoUY61cx4=', title:'Pisces', text:'February 19-March 20'},
    {image:'https://media.istockphoto.com/photos/aries-zodiac-sign-abstract-night-sky-background-picture-id858076434?k=20&m=858076434&s=612x612&w=0&h=A7qWoT9Ponv90esP6JkthFWn6t1RkvOv7pPS8MfgCkc=', title:'Aries', text:'March 21-April 19'},
    {image:'https://media.istockphoto.com/photos/taurus-zodiac-sign-abstract-night-sky-background-picture-id858071852?k=20&m=858071852&s=612x612&w=0&h=r1clt8qkGxOGJPp5cTXCfSkJevcLD6nqTSgVGgy15Dk=', title:'Taurus', text:'April 20-May 20'},
    {image:'https://media.istockphoto.com/photos/gemini-zodiac-sign-abstract-night-sky-background-picture-id858072316?k=20&m=858072316&s=612x612&w=0&h=Gp7WcUIh24x7SuseE3p8l0jj5qNcgEY2WIusUtoZuW0=', title:'Gemini', text:'May 21-June 20'},
    {image:'https://media.istockphoto.com/photos/cancer-zodiac-sign-abstract-night-sky-background-picture-id858078918?k=20&m=858078918&s=612x612&w=0&h=nV5GPtd6IsFVZerpYKbYpcKR_F2w-GfatXMI1b-_DG8=', title:'Cancer', text:'June 21- July 22'},
    {image:'https://media.istockphoto.com/photos/leo-zodiac-sign-abstract-night-sky-background-picture-id858075636?k=20&m=858075636&s=612x612&w=0&h=TIlIkKMsj3Ehm_nMicseT6wg8yMbqEK7PDQ16fj3ekg=', title:'Leo', text:'July 23-August 22'},
    {image:'https://media.istockphoto.com/photos/virgo-zodiac-sign-abstract-night-sky-background-picture-id858072842?k=20&m=858072842&s=612x612&w=0&h=_QCr5qBPS4EihfkxxUDh1d3K19JIdamH0onPbqyjrh0=', title:'Virgo', text:'August 23-September 22'},
    {image:'https://media.istockphoto.com/photos/libra-zodiac-sign-abstract-night-sky-background-picture-id858082952?k=20&m=858082952&s=612x612&w=0&h=MXDp8TsIc4OVeQvyFHlFpSON81vI7mbNICa7ocX32lI=', title:'Libra', text:'September 23-October 22'},
    {image:'https://media.istockphoto.com/photos/scorpio-zodiac-sign-abstract-night-sky-background-picture-id858080114?k=20&m=858080114&s=612x612&w=0&h=-5HmmzHiTTU--FQu-lPjiBW4DxZIjHJlyOuHXXUflpQ=', title:'Scorpio', text:'October 23-November 21'},
    {image:'https://media.istockphoto.com/photos/sagittarius-zodiac-sign-abstract-night-sky-background-picture-id858080490?k=20&m=858080490&s=612x612&w=0&h=cgS2K1W4_4bQbZnoPvNGx7wDCl6nV1iFPYk1gcYk5MA=', title:'Sagittarius', text:'November 22-December 21'},
  ];

  const renderCard = (card, index) => {
    return (
      <div className='container-fluid'>
      <Card class="card text-decoration-none text-dark mb-3" style={{ width: '18rem' }} key={index}>
        <Card.Img variant="top"  src={card.image} />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>{card.text}</Card.Text>
        </Card.Body>
      </Card>
      </div>
    )
  }


  return <div className='Zodiac'>{cardInfo.map(renderCard)}</div>;
};


export default Zodiac;
