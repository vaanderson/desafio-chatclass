

import * as S from './styles';
import { SearchInput } from './SearchInput/Search';
import { Fragment, useEffect, useState } from 'react';
import { api } from '../../services/api';

interface Weather {
  results: string;
  temp: number;
  date: string;
  time: string;
  description: string;
  city: string;
  forecast: [
    {
      date: string;
      weekday: string;
      max: number,
      min: number,
    }
  ]
}

interface forecast {
  date: string;
  weekday: string;
  max: number,
  min: number,
}

type forecastArray = Array<forecast>

export function Sidebar() {
  const [firtsCall, setFirtsCall] = useState<boolean>(false);
  const [weather, setWeather] = useState<Weather | null>(null);
  const [city, setCity] = useState<string>('')
  useEffect(() => {
    api.get(`/weather?key=${process.env.REACT_APP_API_KEY}`,{
      params: {
        array_limit: 5,
        user_ip: `remote`,
        locale: `pt`
      }
    })
      .then(response => {
        setWeather(response.data.results)
      })
  }, []);

  useEffect(() => {
    if (firtsCall) {
  
      api.get(`/weather?key=${process.env.REACT_APP_API_KEY}`,{
        params: {
          array_limit: 5,
          city_name: {city},
          locale: `pt`
        }
      })
        .then(response => {
          setWeather(response.data.results)
        })
    } else {
      setFirtsCall(true)
    }
  }, [city]);

  return (
    <S.SidebarContent>
      <SearchInput callback={(city) => { setCity(city) }} />
      <S.ContainerAlign>
        <S.Title>Previsão em tempo real:</S.Title>

        {
          weather &&
          <Fragment>
            <S.Data><strong>Hoje,</strong> <br /> {weather.date} </S.Data>
            <S.TempCurrent>{weather.temp}</S.TempCurrent>
            <S.CityCurrent>{weather.city}</S.CityCurrent>
            <S.MoreTemp>
              <S.SpanTemp><S.Bold>Mínima: </S.Bold>{weather.forecast[0]?.min}°</S.SpanTemp>
              <S.SpanTemp><S.Bold>Máxima: </S.Bold>{weather.forecast[0]?.max}°</S.SpanTemp>
            </S.MoreTemp>
          </Fragment>
        }
        <S.Title>Previsão da semana:</S.Title>
      </S.ContainerAlign>

      <S.BoxContainer>
        {
          weather?.forecast &&
          createForecastElement(weather.forecast)
        }
      </S.BoxContainer>
    </S.SidebarContent>
  )
}


const createForecastElement = (forecastArray: forecastArray) => {
  forecastArray.shift()
  const forecast = forecastArray.slice(0, 6)
  const forecastElements = forecast.map((day, index) => {
    return (
      <S.Box key={day.weekday} >
        <S.SpanDay>{day.weekday}</S.SpanDay>
        <S.WeekTemp>
          <S.SpanTemp><S.Bold>Min</S.Bold><S.Space />{day.min}°</S.SpanTemp>
          <S.SpanTemp><S.Bold>Max</S.Bold><S.Space />{day.max}°</S.SpanTemp>
        </S.WeekTemp>
      </S.Box>
    )
  })
  return forecastElements
}