import { ResultAPI } from '../App';

const Climate: React.FC<{result: ResultAPI | undefined}> = ({ result }) => {
   if (!result) return null;

   // Desestructuring values of result
   const { name, main } = result;

   if (!name) return null;

   console.log(main.temp_max)
   console.log(main.temp_min)
   // Kelvin degrees
   const kelvin: number = 273.15;
   // Temp - Kelvin
   const temperature: string = (main.temp - kelvin).toFixed(0);
   const temperatureMax: string = (main.temp_max - kelvin).toFixed(0);
   const temperatureMin: string = (main.temp_min - kelvin).toFixed(0);

   console.log(temperatureMax)

   return (
      <div>
         <h2>{ name }</h2>
         <p>{ temperature } <span> &#x2103; </span></p>
         <p>{ temperatureMax } <span> &#x2103; </span></p>
         <p>{ temperatureMin } <span> &#x2103; </span></p>
      </div>
   )
};

export default Climate;