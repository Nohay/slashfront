import React from 'react'
import {Container,Grid,Typography,} from '@mui/material'
import PriceIncr from '../../atoms/PriceIncr'
import Footer from '../../organisms/Footer'

function Page({ media }) {
  console.log(media)

  return (
    <>
      <Grid className="container container-head">
        <Container>
          <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
          >
            <Grid item xs={12} md={12}>
              <Typography variant="h1" component="h1">
                Mon composant
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Grid>

      <Grid className="container container-body">
        <Container>
          <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
          >
            <Grid item xs={12} md={12}>
              <p style={{ textAlign: 'center' }}>
                Our freelancers are available to work, from{' '}
                <strong>mobile frontends and desktops</strong> to{' '}
                <strong>huge backends</strong>, some{' '}
                <strong>solidity smartcontracts</strong> depending on your needs
                to <strong>nodes setup</strong> and node administration.
                <br /> You can contact specifically one of them or hire the
                guild.
              </p>
            </Grid>
            <PriceIncr 
                price
                currency
                delay
                increaseBy
            />
          </Grid>
        </Container>
      </Grid>
      <Footer />
    </>
  )
}

export default Page
