import { useState, Dispatch, SetStateAction } from "react";
import { Search } from '../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchIcon = () => {
   return <FontAwesomeIcon icon={faSearch} />
 }

const Form: React.FC<{ 
   search: Search, 
   setSearch: Dispatch<SetStateAction<Search>>, 
   setConsult: Dispatch<SetStateAction<boolean>>
}> = ({
   search, 
   setSearch, 
   setConsult 
}) => {
   // State to validate
   const [error, setError] = useState<boolean>(false)

   // Desesctructuring search
   const { city, country } = search;

   // Function to put the elements in the state
   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      // Update the state
      setSearch({
         ...search,
         [e.target.name] : e.target.value
      })
   }

   // Function to submit form
   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      // Validate
      if(city.trim() === '' || country.trim() === '') {
         setError(true);
         setTimeout(() => {
            setError(false);
          }, 3000);
         return;
      }

      setError(false);

      // Pass to principal component
      setConsult(true);

   }

   return (
      <form onSubmit={handleSubmit}>

         <h2> Find the weather of any city! </h2>
         
         <label htmlFor='country'></label>
         <select 
            name='country' 
            id='country'
            value={country}
            onChange={handleChange}
         >
            <option value='' style={{color:'black'}}>-- Select The Country</option>
            <option value='AT' > Austria </option>
            <option value='AU' > Australia </option>
            <option value='AM' > Armenia </option>
            <option value='AR' > Argentina </option>
            <option value='BS' > Bahamas </option>
            <option value='BD' > Bangladesh </option>
            <option value='BE' > Belgica </option>
            <option value='BR' > Brasil </option>
            <option value='GB' > Britain </option>
            <option value='CA' > Canada </option>
            <option value='CH' > Suiza </option>
            <option value='CI' > Ivory Coast </option>
            <option value='CL' > Chile </option>
            <option value='CM' > Cameroon </option>
            <option value='CN' > China </option>
            <option value='CO' > Colombia </option>
            <option value='CR' > Costa Rica </option>
            <option value='HR' > Croatia </option>
            <option value='CU' > Cuba </option>
            <option value='DO' > Dominican Republic </option>
            <option value='DK' > Denmark </option>
            <option value='EC' > Ecuador </option>
            <option value='FI' > Finland </option>
            <option value='FR' > France </option>
            <option value='DE' > Germany </option>   
            <option value='GR' > Greece </option>
            <option value='HN' > Honduras </option>
            <option value='ES' > Spain </option>
            <option value='FK' > Islas Malvinas </option>
            <option value='IE' > Irland </option>
            <option value='IL' > Israel </option>
            <option value='IN' > India </option>
            <option value='IT' > Italy </option>
            <option value='JP' > Japan </option>
            <option value='KP' > North Korea </option>
            <option value='KR' > South Korea </option>
            <option value='NG' > Nigeria </option>
            <option value='NO' > Norway </option>
            <option value='NZ' > New Zeland </option>
            <option value='PR' > Puerto Rico </option>
            <option value='PT' > Portugal </option>
            <option value='RU' > Rusia </option>
            <option value='SA' > Saudi Arabia </option>
            <option value='UA' > Ukrain </option>
            <option value='UY' > Uruguay </option>
            <option value='US' > United States </option>
            <option value='VE' > Venezuela </option>
            <option value='ZA' > South Africa </option>

         </select>

         <div className='city-submit'>
            <label htmlFor='city'></label>
            <input 
               type='text'
               name='city'
               id='city'
               value={city}
               onChange={handleChange}
               placeholder='-- Read city Name'
               className='city-input'
            />

            <button 
               type='submit'
               className='submit'
            >
               <SearchIcon />
            </button>
         </div>
         {error ? 
            <p className="error-msg"> All fields are Required!! </p> : null} 
      </form>
   )

}

export default Form