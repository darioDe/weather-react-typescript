import { ResultAPI } from '../App';

const Climate: React.FC<{result: ResultAPI | undefined}> = ({ result }) => {
   if (!result) return null;

   // Desestructuring values of result
   const { name, main, weather } = result;

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
         <h2>{ name }</h2>
         <p>{dateString}</p>
         <div className='flex-row'>
            <h1>{ temperature } <span> &#x2103; </span></h1>
            <div className='flex-column'>
               <p>max: { temperatureMax } <span> &#x2103; </span></p>
               <p>min: { temperatureMin } <span> &#x2103; </span></p>
            </div>
         </div>
         <p className='description'>{ description.toUpperCase() }</p>
         <p className='humidity'>Humidity: { humidity }%</p>
      </div>
   )
};

export default Climate;