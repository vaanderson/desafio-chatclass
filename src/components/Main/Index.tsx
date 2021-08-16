import { CityInfo } from './CityInfo/Index'
import { Capitais } from '../../utils/Capitais';
import * as M from './styles';

export function MainContent(){
    return(
      <M.Main>
        {Capitais.map((city,index) => {
          return <CityInfo cityName={city} index={index}></CityInfo>
        })}
      </M.Main>
    )
}

