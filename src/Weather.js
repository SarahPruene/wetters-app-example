import React from 'react'
import './Weather.css'

export default function Weather() {
  return (
    <div>
      <form>
        <div className='row'>
          <div className='col-9'>
            <input
              type='search'
              placeholder='Enter a city...'
              className='form-control'
            />
          </div>
          <div className='col-3'>
            <input type='search' value='submit' className='btn btn-primary' />
          </div>
        </div>
      </form>
      <h1>Lisbon</h1>
      <ul>
        <li>Wednesday, 19:00</li>
        <li>overcast</li>
      </ul>
      <div className='row'>
        <div className='col-6'>
          <img
            src='https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png'
            alt='icon'
          />
          15°C
        </div>
        <div className='col-6'>
          <ul>
            <li>Preciptation: 15%</li>
            <li>Humidity: 72%</li>
            <li>Wind: 15 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
