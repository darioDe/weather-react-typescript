import { ResultAPI } from '../App';
import { RiSunLine, 
   RiThunderstormsLine, 
   RiMistLine
} from 'react-icons/ri';
import { BsCloudRain, 
   BsFillCloudSunFill, 
   BsFillCloudyFill, 
   BsSnow3,
   BsArrowDownCircleFill,
   BsFillArrowUpCircleFill 
} from 'react-icons/bs';



const Climate: React.FC<{result: ResultAPI | undefined}> = ({ result }) => {
   if (!result) return null;

   // Desestructuring values of result
   const { name, main, sys, weather } = result;

   if (!name) return null;

   console.log(main.temp_max)
   console.log(main.temp_min)
   // Kelvin degrees
   const kelvin: number = 273.15;
   // Temp - Kelvin
   const temperature: string = (main.temp - kelvin).toFixed(0);
   const temperatureMax: string = (main.temp_max - kelvin).toFixed(0);
   const temperatureMin: string = (main.temp_min - kelvin).toFixed(0);
   const humidity: string = (main.humidity).toString();
   const description: string = weather[0].description;
   const country: string = sys.country;

   // Vars for Date
   const today: Date = new Date();
   const dayOfWeek: string = today.toLocaleDateString('en-US', { weekday: 'long' });
   const dayOfMonth: string = today.toLocaleDateString('en-US', { day: 'numeric' });
   const month: string = today.toLocaleDateString('en-US', { month: 'long' });
   const year: number = today.getFullYear();
   // Concat the string for the date
   const dateString: string = `${dayOfWeek}, ${dayOfMonth} ${month} ${year}`;
   console.log(temperatureMax)
   console.log(humidity);

   return (
      <div className='box'>
         <div></div>
         <h2>{ name }, {country}</h2>
         <p>{dateString}</p>

         <div className='flex-column'>
            <div className='flex-row'>
               <p className='temp'>{ temperature } <span> ° </span></p>

               { 
                  (description === 'clear sky') ? 
                  <RiSunLine className='icon'/> :
                  (description === 'broken clouds') ?
                  <BsFillCloudSunFill className='icon' /> :
                  (description === 'overcast clouds' 
                  || description === 'few clouds'
                  || description === 'overcast clouds' 
                  || description === 'scattered clouds') ?
                  <BsFillCloudyFill className='icon' /> :
                  (description === 'drizzle' 
                  || description === 'rain' 
                  || description === 'shower rain') ? 
                  <BsCloudRain className='icon'/> :
                  (description === 'thunderstorm') ? 
                  <RiThunderstormsLine className='icon'/> :
                  (description === 'snow' || description === 'light snow') ? 
                  <BsSnow3 className='icon'/> :
                  (description === 'mist') ? 
                  <RiMistLine className='icon'/> :
                  <BsFillCloudyFill className='icon' />
               }

            </div>
            <div className='flex-row'>
               <BsFillArrowUpCircleFill className='max'/>
               <p className='min-max'> { temperatureMax } <span> ° </span></p>
               <BsArrowDownCircleFill className='min'/> 
               <p className='min-max'> { temperatureMin } <span> ° </span></p>
            </div>
         </div>
         <p className='description'>{ description.toUpperCase() }</p>
         
         <p className='humidity'>Humidity: { humidity }%</p>
      </div>
   )
};

export default Climate;