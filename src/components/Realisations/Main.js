import React from 'react'
import Create from './Create'
import Read from './Read'

const Main = () => {
    return (
        <div className="crud container">
            <Read />
            <Create />
        </div>
    )
}

export default Main
