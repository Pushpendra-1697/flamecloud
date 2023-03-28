import { Box } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Landing from './Landing'
import ProxyLocation from './ProxyLocation'

const AllRoutes = () => {
    return (
        <Box>
            <Routes>
                <Route path='/' element={<Landing />}></Route>
                <Route path='/proxy' element={<ProxyLocation />}></Route>
            </Routes>
        </Box>
    );
}

export default AllRoutes;