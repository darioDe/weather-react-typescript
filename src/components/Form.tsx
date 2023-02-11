import { useState, Dispatch, SetStateAction } from "react";
import { Search } from '../App'

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
         
         <label htmlFor='city'>City: </label>
        <input 
            type='text'
            name='city'
            id='city'
            value={city}
            onChange={handleChange} 
         />
         

         <label htmlFor='country'>Country: </label>
         <select 
            name='country' 
            id='country'
            value={country}
            onChange={handleChange}
         >
            <option value='' >-- Select Country</option>
            <option value='US' > United States </option>
            <option value='MX' > Mexico </option>
            <option value='AR' > Argentina </option>
            <option value='CO' > Colombia </option>
            <option value='CR' > Costa Rica </option>   
            <option value='ES' > España </option>
            <option value='PE' > Perú </option>
         </select>

         <input 
            type='submit'
            value='SEARCH'
         />

         {error ? <p> All fields are Required </p> : null} 
      </form>
   )

}

export default Form