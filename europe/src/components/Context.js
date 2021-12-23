import React from 'react'

const allData = React.createContext()

const Context = ({ children }) => {

    const [count, setCount] = React.useState(1)
    const [index, setIndex] = React.useState(0)

    return (
        <allData.Provider value={{count, setCount, index, setIndex }}>{children}</allData.Provider>
    )
}

export const useGlobalContext = () => {
    return React.useContext(allData)
}
export { allData, Context }
