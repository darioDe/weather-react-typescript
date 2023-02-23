import { useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Climate from './components/Climate';
import Error from './components/Error';

// Interface for API data
export interface ResultAPI {
  name: string;
  main: {
    temp: number;
    temp_max: number;
    temp_min: number;
    humidity: number;
  },
  sys: {
    country: string;
  },
  weather: [
    {
      description: string;
    }
  ]
}
// Interface to search state
export interface Search {
  city: string;
  country: string;
};

function App() {
  // State for background
  // const [background, setBackground] = useState(backgrounds[0]);
  // State to form
  const [search, setSearch] = useState<Search>({city: '', country: '',});
  // State to consulting
  const [consult, setConsult] = useState<boolean>(false);
  // State to save result
  const [result, setResult] = useState<undefined|ResultAPI>(undefined);
  // State to verify error
  const [error, setError] = useState<boolean>(false);
  // State to save Climate of Place
  const [list, setList] = useState({});

  // Desesctructuring search
  const { city, country } = search;

  // Effect to call API
  useEffect (() => {
    const consultAPI = async () => {

      if(consult){
        // API id
        const appId: string = 'd4e0eba9a4f32e88e186660afc7dbf17';
        // URL to call API
        const url: string = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;
        // Call to API
        const response: Response = await fetch(url);
        
        // Get results
        const result: any = await response.json();
        console.log(result);
       
        // Check if there where correct results on search
        if(result.cod ==='404') {
        
          setError(true);
          setResult(undefined)
          setConsult(false)
          return;
          
        }
        
        // Selection importants items of results
        const selectResult: ResultAPI = {
          name: result.name,
          main: {
            temp: result.main.temp,
            temp_min: result.main.temp_min,
            temp_max: result.main.temp_max,
            humidity: result.main.humidity,
          },
          sys: {
            country: result.sys.country,
          },
          weather: [
            {
              description: result.weather[0].description,
            },
          ]
        }      
        // Save the select
        setResult(selectResult);
        console.log(selectResult);
        // Change the cosult to false to alow another search
        setConsult(false);
        setError(false);
          
      }
    }

    consultAPI ()
  },[consult]);
  
  return (
    <div className="App"
    >
      <div className='box'>
        <Header />
        <Form search={search} setSearch={setSearch} setConsult={setConsult} />
      </div>
      { error ? 
        <Error msg={'There are no results for your search!!'}/> 
        : <Climate result={result} />
      }
    </div>
  )
}

export default App
