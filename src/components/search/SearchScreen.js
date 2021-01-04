import React, { useMemo } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {

    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);

    
    const [{herosearch}, handleInputChange] = useForm({
        herosearch: q
    });
    const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);
       

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${herosearch}`);
    }
    return (
        <div className="animate__animated animate__fadeIn mt-4">
            <h1>Search a Heroes</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr />
                    
                    <form>
                        <input 
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            name="herosearch"
                            value={herosearch}
                            autoComplete="off"
                            onChange={handleInputChange}
                        />
                        <button
                            type="submit"
                            className="btn mt-2 btn-block btn-outline-primary"
                            onClick={handleSearch}
                        >
                            Search
                        </button>
                    </form>

                </div>
                <div className="col-7">
                    <h4>
                        Results
                    </h4>
                    <hr />
                    {
                        (q === '') &&
                        <div className="alert alert-info">
                            Search a Hero
                        </div>
                    }
                    {
                        (q !== '' && heroesFiltered.length === 0)
                        &&
                        <div className="alert alert-danger">
                            There is no a hero with <b>{q}</b>
                        </div>
                    }
                    {
                        heroesFiltered.map( hero => (
                            <HeroCard 
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
