import React, { useEffect, useState } from 'react'

const FilterContextData = React.createContext({})

export function FilterContext(props) {

    const [filterRegion, setFilterRegion] = useState('')

    return (
        <FilterContextData.Provider value={
            {
                filterRegion,
                setFilterRegion
            }
        }>
            {props.children}
        </FilterContextData.Provider>
    )
}

export function useFilterContext() {
    return React.useContext(FilterContextData)
}