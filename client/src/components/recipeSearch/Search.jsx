import React from 'react';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import styled from 'styled-components';
import Searched from './Searched';


function Search() {                 

    const [input, setInput] = useState('');
    const [recipeData, setRecipeData] = useState([]);
        
    const submitHandler = (e) => {
        e.preventDefault();
        Searched( {input}, {recipeData, setRecipeData} );
        setInput("");   
    };
    
    const changeHandler = (e) => {
        setInput(e.target.value)
    }

    if (recipeData.length > 0) {
        return (
            <div>
            <header>
            <form onSubmit={submitHandler}>
                <div>
                    <FaSearch />
                    <input
                        type="text"
                        value={input}
                        onChange={changeHandler}
                    />
                    <button>submit</button>
                    
                </div>
            </form>
            </header>

            <main>
            
    <DetailWrapper>
                <div>
                    <h2>{recipeData?.title}</h2>
                    <img src={recipeData?.image} alt="" />
                </div>
    </DetailWrapper>

            </main>
        </div> 
        );
        }else {
            return(
                <div>
            <header>
            <form onSubmit={submitHandler}>
                <div>
                    <FaSearch />
                    <input
                        type="text"
                        value={input}
                        onChange={changeHandler}
                    />
                    <button>submit</button>
                    
                </div>
            </form>
            </header>
            <main>
            
                <div>
                    dummy
                </div>

            </main>
        </div> 
            );
    }
}

const DetailWrapper = styled.div`
	margin-top: 10rem;
	margin-bottom: 5rem;
	display: flex;
	.active {
		background: linear-gradient(35deg, #494949, #313131);
		color: white;
	}
	h2 {
		margin-bottom: 2rem;
	}
	ul {
		margin-top: 2rem;
	}
	li {
		font-size: 1.2rem;
		line-height: 2.5rem;
	}
`;

export default Search;