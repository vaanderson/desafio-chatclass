import { useEffect, useState } from 'react';
import { api } from '../../../services/api';
import * as M from './styles';

interface DataProps {
    temp: string,
    date:string,
    city_name: string,
    forecast: [
        {
            date: string,
            max: number,
            min: number
        }
    ]
}
export function CityInfo({cityName,index}: {cityName:{capital:string},index:number}){
    const [city,setCity]=useState<DataProps | null>()
  
    useEffect(() =>{
          api.get(`/weather?key=${process.env.REACT_APP_API_KEY}`, {
            params: {
              array_limit: 1,
              format:`json-cors`,
              fields: `only_results,temp,city_name,
              forecast,max,min,date`,
              city_name: cityName.capital,
              locale: `pt`
            },
          }).then(response => {
            setCity(response.data)
          })
    },[])
          return (
          <M.Box key={index}>
            <M.CenterContent>
            { city?
              <>
                <M.SpanDay>{city.city_name}</M.SpanDay>
                <M.CurrentTemp>{city.temp}</M.CurrentTemp>
                <M.WeekTemp>
                <M.SpanTemp><M.Bold>Min</M.Bold><M.Space />{city.forecast[0]?.min}°</M.SpanTemp>
                <M.SpanTemp><M.Bold>Max</M.Bold><M.Space />{city.forecast[0]?.max}°</M.SpanTemp>
                </M.WeekTemp>
              </>
              :
              null
            }
            </M.CenterContent>
          </M.Box>
          )
      }
  