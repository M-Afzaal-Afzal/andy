import React from 'react';
import {Box, Stack} from "@mui/material";

const ThreeDots = () => {
    return (
        <Stack direction={'row'} spacing={1}>
            <Box sx={{borderRadius: '50%', background: '#000',}} width={'10px'} height={'10px'} />
            <Box sx={{borderRadius: '50%', background: '#000',}} width={'10px'} height={'10px'} />
            <Box sx={{borderRadius: '50%', background: '#000',}} width={'10px'} height={'10px'} />
        </Stack>
    );
};

export default ThreeDots;