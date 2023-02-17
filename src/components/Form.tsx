import { useState, Dispatch, SetStateAction } from "react";
import { Search } from '../App';
import Error from './Error';
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
         return;
      }

      setError(false);

      // Pass to principal component
      setConsult(true);

   }

   return (
      <form onSubmit={handleSubmit}>

         {error? <Error msg = 'All fields are required' /> : "" }
         
         <label htmlFor='country'></label>
         <select 
            name='country' 
            id='country'
            value={country}
            onChange={handleChange}
         >
            <option value='' style={{color:'black'}}>-- Select The Country</option>
            <option value='US' > United States </option>
            <option value='MX' > Mexico </option>
            <option value='AR' > Argentina </option>
            <option value='CO' > Colombia </option>
            <option value='CR' > Costa Rica </option>   
            <option value='ES' > España </option>
            <option value='PE' > Perú </option>
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
            />

            <button 
               type='submit'
               className='submit'
            >
               <SearchIcon />
            </button>
         </div>
         {error ? <p> All fields are Required </p> : null} 
      </form>
   )

}

export default Form