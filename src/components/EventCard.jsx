import React, { useEffect, useState } from "react"
import NodeJS from "../utils/NodeJS"
import { useContextSnackBar } from "../context/SnackBarContext"
import TeammatesDialog from "./miscellaneous/RegistrationDialog"
import FeedbackDialog from "./miscellaneous/FeedbackDialog"
import "../css/App.css"

import {
  Card,
  CardMedia,
  Chip,
  Typography,
  CardContent,
  CardActions,
  Button,
  Box,
  Stack,
} from "@mui/material"

import {
  AccessTimeRounded,
  EventAvailableRounded,
  LocationOnRounded,
} from "@mui/icons-material"

function getFmtDate(date) {
  const day = date.getDate()
  const suffixes = ["th", "st", "nd", "rd"]
  const v = day % 100
  const f1 = day + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0])
  return `${f1} ${date.toLocaleString("en-US", {
    month: "short",
    timeZone: "UTC",
  })}`
}

const EventCard = ({
  data: {
    event_id,
    title,
    description,
    location,
    dateTime,
    photo,
    registeredUsers,
    numberOfTeammates,
    color1,
    color2,
    feedbacks },
  email: {
    email,
    JWT }
}) => {

  const credential = JWT
  const [registered, setRegistered] = useState(false)
  const [fbDone, setFbDone] = useState(false)
  const { setSnackBarState, setSnackBarSeverity, setSnackBarMessage } = useContextSnackBar()
  const [loading, setLoading] = useState(false)
  const [fbOpen, setFbOpen] = useState(false)
  const [tmOpen, setTmOpen] = useState(false)
  const [teammates, setTeammates] = useState(Array(numberOfTeammates).fill(""))

  useEffect(() => {
    const user = registeredUsers.find((user) => user.email === email)
    if (user)
      setRegistered(true)
    if (feedbacks && feedbacks.find((user) => user.email === email))
      setFbDone(true)
  }, [registeredUsers, email, feedbacks])

  const handleClick = async () => {
    const action = registered ? "unRegister" : "register"
    if (!JWT) {
      setSnackBarSeverity("warning")
      setSnackBarMessage(`Sign in to ${action}`)
      setSnackBarState(true)
      return
    }
    if (numberOfTeammates > 0 && !tmOpen && !registered) {
      setTmOpen(true)
      return
    }
    if (numberOfTeammates === 0 || tmOpen || registered) {
      try {
        setLoading(true)
        const { success, message } = await NodeJS.POST(`/api/events/${action}/${event_id}`, {
          credential,
          teammates,
        })
        setSnackBarSeverity(success ? "success" : "info")
        setSnackBarSeverity(registered ? "error" : "success")
        setSnackBarMessage(message)
        setSnackBarState(true)
        setRegistered(!registered)
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
    }
  }

  return (
    <>
      <Card
        sx={{
          margin: "auto",
          borderRadius: 6,
          transition: "all 0.5s ease",
          opacity: 0.9,
          backgroundImage: `linear-gradient(to bottom, ${color1}, ${color2})`,
      "&:hover": { },
        }}
      >
      <Stack
        direction={{ xs: "column", md: "row" }}
        sx={{
          width: { xs: "320px", md: "900px" },
          minHeight: { xs: "0px", md: "270px" },
          padding: { xs: "7px", md: "10px" },
        }}
        justifyContent="center"
      >
        <CardMedia
          sx={{
            width: { xs: "300px", md: "500px" },
            height: { xs: "300px", md: "250px" },
            borderRadius: 6,
            margin: "auto",
            mt: "10px",
          }}
          image={photo}
          title={title}
        ></CardMedia>
        <CardContent
          sx={{
            height: "100%",
            width: { xs: "300px", md: "700px" },
          }}
        >
          <Stack direction="column">
            <Typography
              gutterBottom
              variant="h5"
              color="#ED5AB3"
              component="div"
              sx={{
                fontFamily: 'Luckiest Guy, sans-serif', margin: 'auto', color: 'ED5AB3'
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              color="white"
              sx={{ fontFamily: 'Abhaya Libre, serif', fontSize: '15px' }}
            >
              {description}
            </Typography>
            <Box>
              <Chip
                sx={{ borderRadius: "20px", mr: "5px", mt: "5px" }}
                label={location}
                icon={<LocationOnRounded />}
              />
              <Chip
                sx={{ borderRadius: "20px", mr: "5px", mt: "5px" }}
                label={getFmtDate(new Date(dateTime))}
                icon={<EventAvailableRounded />}
              />
              <Chip
                sx={{ borderRadius: "20px", mr: "5px", mt: "5px" }}
                label={new Date(dateTime).toLocaleString("en-US", {
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true,
                  timeZone: "UTC",
                })}
                icon={<AccessTimeRounded />}
              />
            </Box>
            <CardActions>
              {new Date() > new Date(dateTime) ? (
                <>
                  <Button
                    size="small"
                    variant="contained"
                    disabled={fbDone || loading}
                    onClick={() => setFbOpen(true)}
                  >
                    {!fbDone ? "Submit Feedback" : "Feedback submitted"}
                  </Button>
                  <FeedbackDialog
                    open={fbOpen}
                    onClose={() => setFbOpen(false)}
                    {...{
                      event_id,
                      JWT,
                      setSnackBarState,
                      setSnackBarSeverity,
                      setSnackBarMessage,
                      setLoading,
                      setFbDone,
                    }}
                  />
                </>
              ) : (
                <Button
                  className="neonButton"
                  size="small"
                  variant="contained"
                  disabled={loading}
                  onClick={handleClick}
                >
                  {registered ? "UnRegister" : "Register"}
                </Button>
              )}
              <TeammatesDialog
                open={tmOpen}
                onClose={() => { setTmOpen(false) }}
                numberOfTeammates={numberOfTeammates}
                onSubmit={() => { handleClick() }}
                {...{
                  teammates,
                  setTeammates,
                  setSnackBarMessage,
                  setSnackBarSeverity,
                  setSnackBarState
                }
                }
              />
            </CardActions>
          </Stack>
        </CardContent>
      </Stack >
    </Card >
    </>
  )
}

export default EventCard
