import { NextPage } from 'next'

import Head from 'next/head'

import Box from '@mui/material/Box'

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import Landing from '../components/Home/Landing'
import Prologue from '../components/Home/Prologue'
import Collection from '../components/Home/Collection'
import Creators from '../components/Home/Creators'
import StarQuest from '../components/Home/StarQuest'
import Vision from '../components/Home/Vision'

import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import React from 'react'

const Home: NextPage = () => {

	return (
		<>
			<Head>
				<title>Planet Ather | Home</title>
				<meta name="description" content="idk right now I'll change this later" />
				<link rel="icon" href="/favicon.ico" />

				{Array.from({length: 22}, (_, i) => <link key={i} rel="preload" as="image" href={`/images/atherians/${i+1}.png`} />)}

				<link rel="preload" as="font" href="/fonts/Mandalore.woff2" />
				<link rel="preload" as="font" href="/fonts/Poppins-Bold.woff2" />
				<link rel="preload" as="font" href="/fonts/Poppins-Regular.woff2" />
				<link rel="preload" as="font" href="/fonts/SpaceMono-Regular.woff2" />
				<link rel="preload" as="font" href="/fonts/FFMark.woff2" />
				<link rel="preload" as="font" href="/fonts/subheading.woff2" />

			</Head>

			<Navbar />
			<Box sx={{overflowX: 'hidden'}}>
				<ParallaxProvider>
					<Box sx={{overflowX: 'hidden'}}>
						{/* <Box style={{position: 'absolute', height: '100%', width: '10rem', left: '35%', background: 'linear-gradient(to right, #080913, black)'}} />
						<img src="/images/stars.png" style={{position: 'absolute', left: '45%', bottom: '0%', filter: 'contrast(140%)'}} height={"800vh"} alt="ather" />
						<img src="/images/Sun.png" style={{position: 'absolute', left: '47.5%', bottom: '0%', filter: 'blur(10px) contrast(140%)'}} height={"800vh"} alt="ather" />
						<img src="/images/Ather.png" style={{position: 'absolute', left: '45%', top: '0%', filter: 'contrast(140%)'}} height={"800vh"} alt="ather" />
						<img src="/images/Flare.png" style={{position: 'absolute', left: '47.5%', bottom: '0%'}} height={"800vh"} alt="ather" />
						<img src="/images/P3.png" style={{position: 'absolute', left: '47.5%', bottom: '0%', filter: 'blur(2px) contrast(140%)'}} height={"800vh"} alt="ather" />
						<img src="/images/P2.png" style={{position: 'absolute', left: '47.5%', bottom: '0%', filter: 'blur(1px) contrast(140%)'}} height={"800vh"} alt="ather" /> */}
						<Parallax scale={[0.9, 1.05]} speed={10} style={{overflow: 'hidden'}}>
							<Landing />
						</Parallax>
						<Box sx={{marginTop: '7.6rem', marginBottom: '5rem', display: 'flex', flexDirection: 'column', gap: '12rem'}}>
							<Parallax scale={[1, 0.95]}>
								<Prologue />
							</Parallax>
							<Parallax scale={[1, 0.95]}>
								<Vision />
							</Parallax>
							<Parallax scale={[1, 0.95]}>
								<StarQuest />
							</Parallax>
							<Parallax scale={[1, 0.95]}>
								<Collection />
							</Parallax>
							<Parallax scale={[1, 0.95]}>
								<Creators />
							</Parallax>
						</Box>
						<Footer />
					</Box>
				</ParallaxProvider>
			</Box>
		</>
	)
}

export default Home