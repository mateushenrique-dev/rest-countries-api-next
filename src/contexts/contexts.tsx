import React, { useEffect, useState } from 'react'

type contextData = {
    filterRegion: string
    setFilterRegion: Function
}

const FilterContextData = React.createContext({} as contextData)

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