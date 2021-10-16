import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['One Punch']);

    return (
        <>
            <h5>By Hernan Rascon</h5>
            <ol>
                <li><a href="https://www.linkedin.com/in/hernan-rascon-552020170/">Linkedin</a></li>
                <li><a href="https://github.com/hernanr9317">GitHub</a></li>
            </ol>
            <h1>GifExpertApp</h1>
            <h2>Buscar Gifs</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />

            <ol>
                {
                    categories.map( category  => (
                        <GifGrid 
                            key={ category }
                            category={ category }
                        />
                    ))
                }
            </ol>

        </>
    )
}
