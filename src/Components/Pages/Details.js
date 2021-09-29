import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Details = () => {
    return (
        <Box>
            <Typography align="center" style={{ fontSize: 25, textTransform: 'uppercase' }} >Mujahid Islam</Typography>
            <Typography align="center" variant='subtitle2' style={{ fontSize: 12, textTransform: 'uppercase', fontWeight: 300 }} >Front End Developer & Animator</Typography>
            <Typography align="center" variant="caption" style={{ fontSize: 12, marginTop: '5px' }}>
                Hi, I'm a professional Motion Designer & Video Editor with 3 years of experience. I have done many projects with perfection. I have much knowledge about visualization, animation, Explaining. also I never stop my learning. Every new thing new technique, I like to explore and wanted to know.
            </Typography>
        </Box>
    );
};

export default Details;