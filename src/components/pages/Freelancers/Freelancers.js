import React from 'react'
import {
  Container,
  Grid,
  Typography,
  Divider,
  Button,
  Chip,
  Stack,
  Paper,
} from '@mui/material'
import Footer from '../../organisms/Footer'

import {
  ArrowOutward,
  AutoStories,
  Diversity3,
  GitHub,
  Call,
  Twitter,
  Home,
} from '@mui/icons-material'
import { Link } from 'react-router-dom'

const nb = 3

function Item({ media, item }) {
  return (
    <Grid
      item
      className="ok"
      xs={12}
      md={4}
      p={3}
      style={{
        alignContent: 'space-between',
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <h3>{item.name}</h3>
          <p>{item.pseudonym}</p>
        </Grid>

        <Grid item xs={3} md={4}>
          <img src={item.photo} alt={item.name} width="100%" />
        </Grid>

        <Grid item xs={12} md={12}>
          <Typography
            variant="body1"
            component="p"
            dangerouslySetInnerHTML={{
              __html: item.description,
            }}
          />
        </Grid>
      </Grid>
      <Grid spacing={2} sx={{ marginTop: 0, paddingTop: 0 }}>
        <Grid item xs={12} md={12}>
          <Grid container>
            <Grid item xs={12} md={12}>
              {item.skills.map((skill) => (
                <Chip
                  key={skill}
                  label={skill}
                  color="secondary"
                  size="small"
                  sx={{ m: 0.5 }}
                />
              ))}
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={12} sx={{}}>
          <Grid container direction="column">
            <Grid item xs={12} md={12}>
              <Stack direction="row" spacing={2}>
                {item.github && item.github !== '' && (
                  <a
                    href={item.github}
                    target="_blank"
                    label={`${item.pseudonym} Github`}
                    rel="noreferrer"
                  >
                    <GitHub sx={{ color: 'black' }} />
                  </a>
                )}
                {item.twitter && item.twitter !== '' && (
                  <a
                    href={item.twitter}
                    target="_blank"
                    label={`${item.pseudonym} twitter`}
                    rel="noreferrer"
                  >
                    <Twitter sx={{ color: 'black' }} />
                  </a>
                )}
                {item.url && item.url !== '' && (
                  <a
                    href={item.url}
                    target="_blank"
                    label={`${item.pseudonym} URL`}
                    rel="noreferrer"
                  >
                    <Home sx={{ color: 'black' }} />
                  </a>
                )}
                <a
                  href={'https://t.me/slashbin'}
                  target="_blank"
                  label={`${item.pseudonym} Contact`}
                  rel="noreferrer"
                >
                  <Call sx={{ color: 'black' }} />
                </a>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

function Items({ items }) {
  return (
    <Grid container>
      {items
        .sort((a, b) => 0.5 - Math.random())
        .map((item) => (
          <Item key={item.id} item={item} />
        ))}
    </Grid>
  )
}

function Freelancers({ media }) {
  console.log(media)
  const items = [
    {
      id: 3,
      name: 'Stéphane',
      pseudonym: 'JanakaSteph',
      description:
        'Experienced front-end developer. In-depth knowledge of blockchain technology, primarily Bitcoin and Liquid sidechain, but also Ethereum and Monero.',
      skills: [
        'Bitcoin, Monero, Ethereum',
        'React',
        'React-Native',
        'Next.js',
        'Flutter',
        'Ionic',
        'Figma',
        'Sketch',
        'Serverless',
      ],
      twitter: 'https://twitter.com/janakaSteph',
      github: 'https://github.com/Janaka-Steph',
      url: 'https://www.bitcoin-studio.com/',
      photo: '/images/photos/janakasteph.png',
    },
    {
      id: 1,
      name: 'Romain',
      pseudonym: 'Slashbin',
      description:
        'Founder & Builder of this guild of freelancers. Bitcoiner since always. Miner. Develops mining pools. Former developer in a Sport Betting Company.<br />Build front and backend.',
      skills: [
        'Bitcoin Ecosystem',
        'Ethereum Ecosystem & EVM',
        'PoW, PoS',
        'React',
        'APIs',
        'MongoDB',
        'Redis',
        'Realtime',
        'Bots',
        'Docker',
        'Smartcontracts',
      ],
      photo: '/images/photos/slash.png',
      twitter: 'https://twitter.com/slashbin',
      github: 'https://github.com/slashbinslashnoname',
      url: 'https://slashbin.xyz',
    },
    {
      id: 5,
      name: 'Pierre-Alexis',
      pseudonym: 'PAB',
      description:
        'Web developer. Experienced in building well-designed and intuitive web applications from frontend to backend.',
      skills: [
        'Javascript / Typescript',
        'Node.js',
        'React',
        'Redux',
        'Next.js',
        'Gatsby',
        'Express',
        'NestJS',
        'Python',
        'Docker',
      ],
      twitter: 'https://twitter.com/PABlond_',
      github: 'https://github.com/PABlond',
      url: 'https://github.com/PABlond',
      photo: '/images/photos/nakamoto.png',
    },
    {
      id: 6,
      name: 'Dolu',
      pseudonym: 'Dolu',
      description:
        'Fullstack developer with a strong backend experience since 10 years. Bitcoin/LN apps developer since 2018',
      skills: [
        'Bitcoin, Lightning Network',
        'Node.js',
        'C#',
        'React',
        'Vue',
        'Angular',
      ],
      twitter: 'https://twitter.com/dolu_web',
      github: 'https://github.com/dolu89',
      photo: '/images/photos/nakamoto.png',
    },
    {
      id: 7,
      name: 'David',
      pseudonym: 'chillingpadawan',
      description:
        'AI/ML engineer and Bitcoin enthusiast. Develops bots and AI.',
      skills: [
        'Python',
        'Tensorflow',
        'AI',
        'Data Science',
        'Pandas',
        'Finance',
      ],
      twitter: 'https://twitter.com/intelliance1',
      github: 'https://github.com/davidlarcher',
      url: 'https://intelliance.ai',
      photo: '/images/photos/nakamoto.png',
    },
    {
      id: 17,
      name: 'Nicolas',
      pseudonym: 'nohay',
      description:
        'Dev Newby',
      skills: [
        'Dead Language',
      ],
      github: 'https://github.com/nohay',
      photo: '/images/photos/nakamoto.png',
    },
  ]

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
                Our freelancers
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Grid>

      <Grid className="container-section container-grey">
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
          </Grid>
        </Container>
      </Grid>
      <Grid className="container-section container-white container-border">
        <Container maxWidth="lg">
          <Grid container>
            {
              // 3 by 3 with Reduce
              items
                .reduce(
                  (r, e, i) =>
                    (i % nb ? r[r.length - 1].push(e) : r.push([e])) && r,
                  []
                )
                .map((itemLite) => (
                  <Items media items={itemLite} />
                ))
            }
          </Grid>
        </Container>
      </Grid>
      <Grid className="container-section container-grey">
        <Container maxWidth="xl">
          <Grid container>
            <Grid item xs={12} md={6}>
              <Grid
                container
                direction="column"
                alignItems="center"
                justify="center"
              >
                <Link to="/process">
                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<Diversity3 />}
                  >
                    See our Process
                  </Button>
                </Link>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid
                container
                direction="column"
                alignItems="center"
                justify="center"
              >
                <Link to="/contact">
                  <Button
                    variant="outlined"
                    size="large"
                    style={{ marginLeft: '20px' }}
                    endIcon={<ArrowOutward />}
                  >
                    Contact Us
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Grid>
      <Footer />
    </>
  )
}

export default Freelancers
