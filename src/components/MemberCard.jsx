import React, { useState } from "react"
import ReactCardFlip from "react-card-flip"
import {
  Card,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
  Stack,
} from "@mui/material"
import {
  GitHub,
  Instagram,
  LinkedIn
} from "@mui/icons-material"

const MemberCard = ({ member }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  const toggleFlip = () => {
    setIsFlipped(!isFlipped)
    if (isFlipped === false)
      setTimeout(() => { setIsFlipped(false) }, 5000)
  }

  const colours = [
    { first: '#FF9800', second: '#7C0000' },
    { first: '#8E2E6A', second: '#311054' },
    { first: '#ED6663', second: '#31112C' },
    { first: '#EDD2F3', second: '#0E185F' },
    { first: '#53B8BB', second: '#055052' },
  ]

  const posts = ['General Secretary', 'Additional Secretary', 'Joint Secretary', 'Executive Member', 'Volunteer']

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      {/* Front side of the card */}
      <Card
        onClick={toggleFlip}
        sx={{
          backgroundImage: `linear-gradient(to bottom, ${colours[Number(member.priority)].first}, ${colours[Number(member.priority)].second})`,
          width: { xs: '160px', md: '200px' },
          height: { xs: '240px', md: '300px' },
          borderRadius: '20px'
        }}
      >
        <CardMedia
          component="img"
          image={member && member.pic ? member.pic : ""}
          alt={member && Number(member.priority) ? Number(member.priority) : ""}
          sx={{
            borderRadius: '50%',
            margin: "10px auto",
            objectFit: "cover",
            width: { xs: "110px", md: "144px" },
            height: { xs: "110px", md: "144px" },
          }}
        />
        <CardContent>
          <Typography variant='h5' component="div"
            sx={{ fontSize: { xs: '20px', md: '25px' } }}
          >
            {member?.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {posts[member.priority]}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {member && member.place ? member.place : ""}
          </Typography>
        </CardContent>
      </Card>

      {/* Back side of the card */}
      <Card
        onClick={toggleFlip}
        sx={{
          backgroundImage: `linear-gradient(to bottom, ${colours[Number(member.priority)].second}, ${colours[Number(member.priority)].first})`,
          width: { xs: '160px', md: '200px' },
          height: { xs: '240px', md: '300px' },
          borderRadius: '20px'
        }}
      >
        <CardContent>
          <Typography variant="body2" color="text.secondary"
            sx={{
              height: { xs: '160px', md: '200px' },
              overflowY: 'scroll',
              '&::-webkit-scrollbar': {
                display: 'none',
              },
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}>
            {member?.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Stack
            direction='row'
            justifyContent='space-evenly'
            alignItems='center'
            sx={{ width: '100%' }}
          >
            <a style={{ textDecoration: 'none', color: 'white' }} rel='noopener noreferrer' target='_blank' href={member?.github}>  <GitHub /></a>
            <a style={{ textDecoration: 'none', color: 'white' }} rel='noopener noreferrer' target='_blank' href={member?.insta}>  <Instagram /></a>
            <a style={{ textDecoration: 'none', color: 'white' }} rel='noopener noreferrer' target='_blank' href={member?.linkdein}>  <LinkedIn /></a>
          </Stack>
        </CardActions>
      </Card>
    </ReactCardFlip>
  )
}

export default MemberCard