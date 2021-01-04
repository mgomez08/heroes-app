import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroesList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

    return (
        <div className="animate__animated animate__fadeIn row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
            {
                heroes.map( hero => (
                    <HeroCard 
                    key={hero.id}
                        {...hero}
                    />
                ))
            }
        </div>
    )
}
