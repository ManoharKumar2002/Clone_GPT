import React from 'react'
import Sidebar from '../components/Sidebar'
import ChatContainer from '../components/ChatContainer'

const Homepage = () => {
    return (
        <div id='app-container'>
            <Sidebar />
            <ChatContainer />
        </div>
    )
}

export default Homepage