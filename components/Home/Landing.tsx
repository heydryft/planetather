import { TextScramble } from "../ScrambledText";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { motion } from "framer-motion";


import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

const Landing = ({children}: any) => {

    let isMobile = useMediaQuery('(max-width: 450px)')
    let isTablet = useMediaQuery('(max-width: 900px)')
    let isDesktop = useMediaQuery('(max-width: 1200px)')
    
    return (
        <>
        {/* <img src="../images/synthpop.jpeg" style={{height: '120vh', position: 'absolute', opacity: 0.1}} alt="" /> */}
            {!isMobile ? <Box sx={{display: 'flex', height: '80vh', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginLeft: '10%', marginRight: '10%', gap: 8}}>
            <Grid container gap={6}>
            <Grid item sx={{display: 'flex', flexDirection: 'column'}} xs>
                    <Box sx={{display: 'flex', alignItems: 'center', marginLeft: '1rem', gap: 2}}>
                        <motion.div
                        initial={{
                            boxShadow: '#fa4454 0px 0px 1px 0px'
                        }}
                        animate={{
                            boxShadow: '#fa4454 0px 0px 10px 1px',
                            transition: {
                                duration: 1,
                                yoyo: Infinity,
                            }
                        }}
                        style={{width: '0.5rem', height: '0.5rem', borderRadius: '50%', backgroundColor: '#fa4454'}}>
                        </motion.div>
                        <h1 style={{fontFamily: 'Mono', color: '#fa4454', fontSize: '1.1rem', letterSpacing: '3px', textTransform: 'uppercase'}}>ACT I : Prologue - AYR 1</h1>	
                    </Box>
                    <h1 style={{fontFamily: 'Mandalore', color: '#ece8e1', fontSize: '12rem', marginBlock: '0rem', textTransform: 'lowercase', textShadow: '0 0 0px rgb(192 219 255 / 48%), 0 0 16px rgb(65 120 255 / 24%)'}}>
                        <TextScramble text="ather"></TextScramble>
                    </h1>
                    <Box style={{border: '1px solid #ffffff30', clipPath: 'polygon(8% 0, 100% 0, 100% 70%, 92% 100%, 0 100%, 0 30%)', width: '23.5rem', height: '5rem', marginLeft: '0rem', marginTop: '1rem'}}>
                        <Box style={{display: 'flex', backgroundColor: '#fa4454', justifyContent: 'center', alignItems: 'center', textTransform: 'uppercase', color: '#ece8e1', fontSize: '1.3rem', fontFamily: 'FFMark', letterSpacing: '1px', margin: '5px', height: 'calc(5rem - 10px)'}}>
                            Explore
                        </Box>
                    </Box>
                    {/* <h1 style={{width: '85%', fontFamily: 'Mono', color: '#c7c3bb', fontSize: '0.875rem', letterSpacing: '1px', marginBlockStart: '1rem'}}>A planet rich in power and mystique consumed by death and disaster. A race against time to find a new home.</h1> */}
                </Grid>
                <Grid item sx={{display: 'flex', alignItems: 'center'}} xs>
                        {/* <motion.img 
                        style={{
                            marginTop: '2.5rem',
                            marginLeft: '38rem',
                            position: 'absolute',
                            alignItems: 'center',
                            justifyContent: 'center',
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                        }}
                        animate={{
                            y: 25,
                            scale: 1.05,
                            transition: {
                                duration: 7,
                                yoyo: Infinity,
                            }
                        }}
                        height='auto'
                        width={"900px"}
                        src={"/images/ather_00240.png"}
                        ></motion.img> */}
                </Grid>
            </Grid>
        </Box> 
        : 
        <Box sx={{marginRight: '10%', marginLeft: '10%', height: '25rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <Box sx={{display: 'flex', alignItems: 'center', gap: 2, marginTop: '5rem'}}>
                <motion.div
                initial={{
                    boxShadow: '#fa4454 0px 0px 1px 0px'
                }}
                animate={{
                    boxShadow: '#fa4454 0px 0px 10px 1px',
                    transition: {
                        duration: 1,
                        yoyo: Infinity,
                    }
                }}
                style={{width: '0.5rem', height: '0.5rem', borderRadius: '50%', backgroundColor: '#fa4454'}}>
                </motion.div>
                <h1 style={{fontFamily: 'Mono', color: '#fa4454', fontSize: '0.8rem', letterSpacing: '3px', textTransform: 'uppercase'}}>ACT I : Prologue - AYR 1</h1>	
            </Box>
            <h1 style={{fontFamily: 'Mandalore', color: '#ece8e1', fontSize: '8rem', marginBlock: '1rem', textTransform: 'lowercase'}}>
                <TextScramble text="ather"></TextScramble>
            </h1>
        </Box>
        }
        </>
    )
}

export default Landing