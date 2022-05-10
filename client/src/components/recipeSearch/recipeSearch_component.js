/*\
 *
 *  Find recipes
 * 
\*/

import React from 'react';
import Search from './Search';
import Pages from '../../pages';
import Searched from './Searched';

const RecipeSearch = () => {

  return (

  <div className="App">
      
  <header className = "App">
      <h1> Recipe Search </h1> 
      
          </header>
          <main>

          
          <Searched/>
          <Pages/>
          </main>	  
    </div>
  );
}

export default RecipeSearch;