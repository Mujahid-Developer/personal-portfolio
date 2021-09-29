import { Box } from '@mui/system';
import React from 'react';
import './MainContainer.css';
import profilePicture from '../../assets/hero.jpg'
import { MdAccountBox, MdCardTravel, MdSettings, MdLanguage } from "react-icons/md";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Details from '../Pages/Details';
import Portfolio from '../Pages/Portfolio';
import Skills from '../Pages/Skills';
import Social from '../Pages/Social';



const MainContainer = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                width: '100%',
                flexDirection: { xs: 'column', md: 'row' },
                justifyContent: { xs: 'center', md: 'center' },
                alignItems: { xs: 'center', md: 'center' }
            }}>
            <Box mx={2} sx={{
                width: { xs: 350, md: 300 },
                height: { xs: 420, md: 350 },
                bgcolor: '#C9DCFF',
                borderRadius: '10px'
            }}>
                <img style={{ width: '100%', height: '100%', borderRadius: '20px', padding: '10px' }} src={profilePicture} alt="" srcset="" />
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                justifyContent: { xs: 'flex-start', md: 'center' },
                alignItems: { xs: 'center', md: 'center' },
                width: { xs: 350, md: 600 },
                height: { xs: 350, md: 350 },
                bgcolor: '#C9DCFF',
                borderRadius: '10px',
                padding: '10px',
                margin: '10px'
            }}>
                <Router>
                    <Box
                        sx={{
                            display: 'flex',
                            width: { xs: '100%', md: '80px' },
                            height: { xs: '80px', md: '100%' },
                            flexDirection: { xs: 'row', md: 'column' },
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: '10px'
                        }}
                        style={{ justifyContent: 'space-around', backgroundColor: '#ECF3FF' }}>
                        <Link className="link" to='/'><MdAccountBox size='2em' /></Link>
                        <Link className="link" to='/portfolio'><MdCardTravel size='2em' /></Link>
                        <Link className="link" to='/skills'><MdSettings size='2em' /></Link>
                        <Link className="link" to='/social'><MdLanguage size='2em' /></Link>




                    </Box>
                    <Switch>
                        <Box sx={{
                            flexWrap: 'wrap',
                            padding: { xs: '10px' },
                            marginTop: { xs: '10px' },
                            width: '100%',
                            height: '100%',
                            borderRadius: '10px',
                            textAlign: 'center'

                        }}>
                            <Route path='/' exact component={Details}>
                                <Details />
                            </Route>
                            <Route path='/portfolio' component={Portfolio}>
                                <Portfolio />
                            </Route>
                            <Route path='/skills' component={Skills}>
                                <Skills />
                            </Route>
                            <Route path='/social' component={Social}>
                                <Social />
                            </Route>
                        </Box>
                    </Switch>
                </Router>
            </Box>
        </Box >
    );
};

export default MainContainer;