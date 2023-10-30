import { useState } from 'react'

import { AsyncPaginate } from "react-select-async-paginate"
import { url, geoApiOptions } from '../async/api'
const Search = () => {
    const [search, setSearch] = useState(null)

    const handleOnchange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }

    const loadOptions = async (inputValue) => {

        return fetch(
            `${url}/cities?minPopulation=100000&namePrefix=${inputValue}`,
            geoApiOptions
        )
            .then(response => response.json())
            .then(response => console.log(response))
            .catch((err) => console.log(err))
    }

    return (
        <>
            <AsyncPaginate
                placeholder="search for city"
                deboucerTimeout={600}
                value={search}
                onChange={handleOnchange}
                loadOptions={loadOptions}
            />
        </>
    )
}

export default Search