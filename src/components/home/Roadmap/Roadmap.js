import React from 'react';
import {Box, Button, Stack} from "@mui/material";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import {TimelineOppositeContent} from "@mui/lab";
import ThreeDots from "../../common/ThreeDots";

const Roadmap = () => {
    return (
        <div className="container-col">
            <h1>RoadMap</h1>

            <Box sx={{
                display: 'block',
                width: '100%',
            }}>
                <Timeline>
                    <TimelineItem position="alternate">
                        <TimelineOppositeContent
                            // sx={{ m: 'auto 0' }}
                            align="right"
                            variant="body2"
                            color="text.secondary"
                        >

                            <Box
                                sx={{
                                    display: 'grid',
                                    gridTemplateColumns: '1fr auto',
                                    gridGap: '1rem',
                                    my: '3rem',
                                }}
                            >

                                <Box sx={{
                                    maxWidth: '365px',
                                    width: '100%',
                                    height: '325px',
                                    background: '#BED6E9',
                                    ml: 'auto',
                                    position: 'relative',
                                    display: 'grid',
                                    gridTemplateRows: 'auto 1fr auto',
                                    placeItems: 'center',
                                    boxShadow: '10px 10px 10px #00000029',
                                }}>

                                    <Box sx={{
                                        mx: 'auto',
                                        textAlign: 'center',
                                        fontFamily: 'Montserrat',
                                        fontWeight: 'semi-bold',
                                        fontSize: '45px',
                                        my: '1rem',
                                    }}>
                                        Event Data
                                    </Box>

                                    <Box sx={{
                                        mx: 'auto',
                                        maxWidth: '200px',
                                        textAlign: 'center',
                                        fontSize: '16px',
                                    }}>
                                        Lorem ipsum dolor sit amet,
                                        consectetuer adipiscing elit,
                                        sed diam nonummy nibh
                                        euismod tincidunt ut laoreet
                                        dolore magna
                                    </Box>

                                    <Box sx={{
                                        mx: 'auto',
                                        maxWidth: '200px',
                                        textAlign: 'center',
                                        fontSize: '28px',
                                        my: '1rem',
                                    }}>
                                        Event Title
                                    </Box>


                                </Box>

                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                }}>

                                    <ThreeDots/>

                                </Box>

                            </Box>

                        </TimelineOppositeContent>

                        <TimelineSeparator>
                            <TimelineConnector sx={{
                                background: 'transparent',
                            }}/>
                            <TimelineDot sx={{
                                width: '48px',
                                height: '48px',
                                background: '#005FA9',
                                border: '3px solid #333333'
                            }}>
                                {/*<FastfoodIcon />*/}
                            </TimelineDot>
                            <TimelineConnector/>
                        </TimelineSeparator>

                        <TimelineContent sx={{py: '12px', px: 2}}>
                            {/*aaaa*/}
                            {/*<Typography variant="h6" component="span">*/}
                            {/*    Eat*/}
                            {/*</Typography>*/}
                            {/*<Typography>Because you need strength</Typography>*/}
                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineOppositeContent
                            // sx={{ m: 'auto 0' }}
                            align="right"
                            variant="body2"
                            color="text.secondary"
                        >


                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector sx={{
                                // background: 'transparent',
                            }}/>
                            <TimelineDot sx={{
                                width: '48px',
                                height: '48px',
                                background: '#A8AFB5',
                                border: '3px solid #333333'
                            }}>
                                {/*<FastfoodIcon />*/}
                            </TimelineDot>
                            <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent
                            // sx={{ m: 'auto 0' }}
                            align="right"
                            variant="body2"
                            color="text.secondary"
                        >

                            <Box
                                sx={{
                                    display: 'grid',
                                    gridTemplateColumns: 'auto 1fr',
                                    gridGap: '1rem',
                                    my: '3rem',
                                }}
                            >

                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                }}>

                                    <ThreeDots/>

                                </Box>

                                <Box sx={{
                                    maxWidth: '365px',
                                    width: '100%',
                                    minHeight: '325px',
                                    padding: '1rem',
                                    background: '#BED6E9',
                                    boxShadow: '10px 10px 10px #00000029',
                                    mr: 'auto',
                                    position: 'relative',
                                    display: 'grid',
                                    gridTemplateRows: 'auto 1fr auto',
                                    placeItems: 'center',
                                }}>

                                    <Box sx={{
                                        mx: 'auto',
                                        textAlign: 'center',
                                        fontFamily: 'Montserrat',
                                        fontWeight: 'semi-bold',
                                        fontSize: '45px',
                                        my: '1rem',
                                    }}>
                                        Event Data
                                    </Box>

                                    <Box sx={{
                                        mx: 'auto',
                                        maxWidth: '200px',
                                        textAlign: 'center',
                                        fontSize: '16px',
                                    }}>
                                        Lorem ipsum dolor sit amet,
                                        consectetuer adipiscing elit,
                                        sed diam nonummy nibh
                                        euismod tincidunt ut laoreet
                                        dolore magna
                                    </Box>

                                    <Box sx={{
                                        mx: 'auto',
                                        maxWidth: '200px',
                                        textAlign: 'center',
                                        fontSize: '28px',
                                        my: '1rem',
                                    }}>
                                        Event Title
                                    </Box>


                                </Box>



                            </Box>

                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem position="alternate">
                        <TimelineOppositeContent
                            // sx={{ m: 'auto 0' }}
                            align="right"
                            variant="body2"
                            color="text.secondary"
                        >

                            <Box
                                sx={{
                                    display: 'grid',
                                    gridTemplateColumns: '1fr auto',
                                    gridGap: '1rem',
                                    my: '3rem',
                                }}
                            >

                                <Box sx={{
                                    maxWidth: '365px',
                                    width: '100%',
                                    height: '325px',
                                    background: '#BED6E9',
                                    boxShadow: '10px 10px 10px #00000029',
                                    ml: 'auto',
                                    position: 'relative',
                                    display: 'grid',
                                    gridTemplateRows: 'auto 1fr auto',
                                    placeItems: 'center',
                                }}>

                                    <Box sx={{
                                        mx: 'auto',
                                        textAlign: 'center',
                                        fontFamily: 'Montserrat',
                                        fontWeight: 'semi-bold',
                                        fontSize: '45px',
                                        my: '1rem',
                                    }}>
                                        Event Data
                                    </Box>

                                    <Box sx={{
                                        mx: 'auto',
                                        maxWidth: '200px',
                                        textAlign: 'center',
                                        fontSize: '16px',
                                    }}>
                                        Lorem ipsum dolor sit amet,
                                        consectetuer adipiscing elit,
                                        sed diam nonummy nibh
                                        euismod tincidunt ut laoreet
                                        dolore magna
                                    </Box>

                                    <Box sx={{
                                        mx: 'auto',
                                        maxWidth: '200px',
                                        textAlign: 'center',
                                        fontSize: '28px',
                                        my: '1rem',
                                    }}>
                                        Event Title
                                    </Box>


                                </Box>

                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                }}>

                                    <ThreeDots/>

                                </Box>

                            </Box>

                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector sx={{
                                // background: 'transparent',
                            }}/>
                            <TimelineDot sx={{
                                width: '48px',
                                height: '48px',
                                background: '#A8AFB5',
                                border: '3px solid #333333'
                            }}>
                                {/*<FastfoodIcon />*/}
                            </TimelineDot>
                            <TimelineConnector/>
                        </TimelineSeparator>

                        <TimelineContent sx={{py: '12px', px: 2}}>
                            {/*aaaa*/}
                            {/*<Typography variant="h6" component="span">*/}
                            {/*    Eat*/}
                            {/*</Typography>*/}
                            {/*<Typography>Because you need strength</Typography>*/}
                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineOppositeContent
                            // sx={{ m: 'auto 0' }}
                            align="right"
                            variant="body2"
                            color="text.secondary"
                        >


                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector sx={{
                                // background: 'transparent',
                            }}/>
                            <TimelineDot sx={{
                                width: '48px',
                                height: '48px',
                                background: '#A8AFB5',
                                border: '3px solid #333333'
                            }}>
                                {/*<FastfoodIcon />*/}
                            </TimelineDot>
                            <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent
                            // sx={{ m: 'auto 0' }}
                            align="right"
                            variant="body2"
                            color="text.secondary"
                        >

                            <Box
                                sx={{
                                    display: 'grid',
                                    gridTemplateColumns: 'auto 1fr',
                                    gridGap: '1rem',
                                    my: '3rem',
                                }}
                            >

                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                }}>

                                    <ThreeDots/>

                                </Box>

                                <Box sx={{
                                    maxWidth: '365px',
                                    width: '100%',
                                    height: '325px',
                                    background: '#BED6E9',
                                    boxShadow: '10px 10px 10px #00000029',
                                    mr: 'auto',
                                    position: 'relative',
                                    display: 'grid',
                                    gridTemplateRows: 'auto 1fr auto',
                                    placeItems: 'center',
                                }}>

                                    <Box sx={{
                                        mx: 'auto',
                                        textAlign: 'center',
                                        fontFamily: 'Montserrat',
                                        fontWeight: 'semi-bold',
                                        fontSize: '45px',
                                        my: '1rem',
                                    }}>
                                        Event Data
                                    </Box>

                                    <Box sx={{
                                        mx: 'auto',
                                        maxWidth: '200px',
                                        textAlign: 'center',
                                        fontSize: '16px',
                                    }}>
                                        Lorem ipsum dolor sit amet,
                                        consectetuer adipiscing elit,
                                        sed diam nonummy nibh
                                        euismod tincidunt ut laoreet
                                        dolore magna
                                    </Box>

                                    <Box sx={{
                                        mx: 'auto',
                                        maxWidth: '200px',
                                        textAlign: 'center',
                                        fontSize: '28px',
                                        my: '1rem',
                                    }}>
                                        Event Title
                                    </Box>


                                </Box>



                            </Box>

                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem position="alternate">
                        <TimelineOppositeContent
                            // sx={{ m: 'auto 0' }}
                            align="right"
                            variant="body2"
                            color="text.secondary"
                        >

                            <Box
                                sx={{
                                    display: 'grid',
                                    gridTemplateColumns: '1fr auto',
                                    gridGap: '1rem',
                                    my: '3rem',
                                }}
                            >

                                <Box sx={{
                                    maxWidth: '365px',
                                    width: '100%',
                                    height: '325px',
                                    background: '#BED6E9',
                                    boxShadow: '10px 10px 10px #00000029;',
                                    ml: 'auto',
                                    position: 'relative',
                                    display: 'grid',
                                    gridTemplateRows: 'auto 1fr auto',
                                    placeItems: 'center',
                                }}>

                                    <Box sx={{
                                        mx: 'auto',
                                        textAlign: 'center',
                                        fontFamily: 'Montserrat',
                                        fontWeight: 'semi-bold',
                                        fontSize: '45px',
                                        my: '1rem',
                                    }}>
                                        Event Data
                                    </Box>

                                    <Box sx={{
                                        mx: 'auto',
                                        maxWidth: '200px',
                                        textAlign: 'center',
                                        fontSize: '16px',
                                    }}>
                                        Lorem ipsum dolor sit amet,
                                        consectetuer adipiscing elit,
                                        sed diam nonummy nibh
                                        euismod tincidunt ut laoreet
                                        dolore magna
                                    </Box>

                                    <Box sx={{
                                        mx: 'auto',
                                        maxWidth: '200px',
                                        textAlign: 'center',
                                        fontSize: '28px',
                                        my: '1rem',
                                    }}>
                                        Event Title
                                    </Box>


                                </Box>

                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                }}>

                                    <ThreeDots/>

                                </Box>

                            </Box>

                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector sx={{
                                // background: 'transparent',
                            }}/>
                            <TimelineDot sx={{
                                width: '48px',
                                height: '48px',
                                background: '#A8AFB5',
                                border: '3px solid #333333'
                            }}>
                                {/*<FastfoodIcon />*/}
                            </TimelineDot>
                            <TimelineConnector sx={{
                                position: 'relative',
                            }}>
                                {/* Last Button   */}
                                <Box sx={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: "50%",
                                    transform: 'translate(-50%,0)',
                                }}>
                                    <Box sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: "center",
                                        background: "#333333",
                                        color: "#fff",
                                        width: '120px',
                                        cursor: 'pointer',
                                        height: '50px',
                                    }}>
                                        VIEW MORE
                                    </Box>
                                </Box>
                            </TimelineConnector>
                        </TimelineSeparator>

                        <TimelineContent sx={{py: '12px', px: 2}}>
                            {/*aaaa*/}
                            {/*<Typography variant="h6" component="span">*/}
                            {/*    Eat*/}
                            {/*</Typography>*/}
                            {/*<Typography>Because you need strength</Typography>*/}


                        </TimelineContent>
                    </TimelineItem>

                </Timeline>
            </Box>

        </div>
    );
};

export default Roadmap;