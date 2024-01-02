import React, { useEffect, useState } from "react";
import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import MemberCard from "../components/MemberCard";
const members = require("../Assets/members.json").sort(
  (a, b) => a.priority - b.priority
);

const listOfTeams = [
  {
    name: "Epicode",
    description:
      "The other Tech team of the association which is the counter-part of the Electronics Team. It is charged with conducting events related to software and maintaining the tech of the association.",
    bigDescription:
      "The Epicode Team excels in software development, coding, and algorithm design. They organize engaging events, like coding competitions, and maintain the society's tech infrastructure. Their collective expertise advances the technical landscape, fostering innovation and collaboration among software enthusiasts.",
    members: ["Bhanu Yashwanth Reddy", "Jitesh D", "Shashank Desai", "Mubashir", "Somil"],
  },
  {
    name: "Electronics",
    description:
      "The Electronics team is charged with preparing and conducting workshops related to hardware part of ECE and also performs the necessary preparation of content for the events pertaining to hardware.",
    bigDescription:
      "The Electronics Team conducts workshops and events dedicated to hardware innovations and also actively participates in hands-on project development in the same domain. The  practical approach offers members valuable real-world experiences, fostering collaboration and skill enhancement among hardware enthusiasts.",
    members: [
      "K Naga Sarachhandra ",
      "Shashank vishwas damle ",
      "Asmit Sou",
      "Aditya Kondam",
    ],
  },
  {
    name: "Events",
    description:
      "This team takes care of in-event happenings: organising the venue, crowd-control, seeking permissions and making sure an event goes smoothly.",
    bigDescription:
      "The Events Team is the backbone of seamless event execution. Tasked with organizing venues, managing crowds, securing necessary permissions, and ensuring overall event logistics, this dedicated team ensures the smooth flow of every occasion. Their meticulous planning and execution guarantee that events run efficiently, providing a positive and engaging experience for participants.",
    members: ["Srutilaya Rupesh", "Kinshuk Yadav"],
  },
  {
    name: "Elements",
    description:
      "This team necessarily dictates the looks of the association. It is responsible for making the event posters, social media posts and stories and the beautiful presentations of workshops.",
    bigDescription:
      "The Elements Team serves as the creative force behind the society's visual presence. Responsible for crafting eye-catching event posters, engaging social media posts, and compelling workshop presentations, this team adds a dynamic touch to the society's communications. Their expertise lies in graphic design and content creation.",
    members: ["Sai Vamsi "],
  },
  {
    name: "Engagements",
    description:
      "This team defines what the association communicates and how well it reaches people. It takes care of drafting the write-ups, prepare content for events and handle the social media of the association.",
    bigDescription:
      "The Engagements Team  is the creative engine that drives content and communication strategies. Tasked with drafting compelling write-ups, preparing event content, and managing the society's social media presence, this team plays a pivotal role in shaping the narrative of ECES. Their expertise lies in content creation and social media management.",
    members: ["Meghana Bhanuprasad"],
  },
];

const Team = motion(
  React.forwardRef(({ team, setActive, active }, ref) => {
    const [hover, setHover] = useState(false);
    // make the box with name in top and description in bottom
    return (
      <Box
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => {
          setActive(team.name);
        }}
        display="flex"
        flexDirection="column"
        justifyContent="space-around"
        alignItems="center"
        m={2}
        borderRadius="20px"
        boxShadow={hover ? 10 : 0}
        maxWidth={{
          sm: "45%",
        }}
        style={{
          transition: "box-shadow 0.5s ease",
          background: hover ? "#fff" : "#121212",
          color: hover ? "#000" : "#fff",
          zIndex: "10",
          padding: "10px",
        }}
        ref={ref}
      >
        {active && (
          <Button
            onClick={(e) => {
              setActive(false);
              e.stopPropagation();
            }}
          >
            x{" "}
          </Button>
        )}
        <Typography variant="h4">{team.name}</Typography>
        {!active && <Typography variant="p">{team.description}</Typography>}
      </Box>
    );
  })
);

const TeamInfo = motion(
  React.forwardRef(({ team }, ref) => {
    const teamMembers = members.filter((member) =>
      team?.members.includes(member.name)
    );
    return (
      <Box
        ref={ref}
        width={"80%"}
        style={{
          transition: "box-shadow 0.5s ease",
          background: "#121212",
          color: "#fff",
          zIndex: "10",
          padding: "10px",
        }}
      >
        <Typography> {team.bigDescription} </Typography>
        <Divider sx={{ marginBottom: "1em", marginTop: "1em" }} />
        <Stack
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          gap={3}
          flexWrap="wrap"
          sx={{ margin: "auto" }}
        >
          {teamMembers.map((member, index) => (
            <Grid item key={index}>
              <MemberCard member={member} />
            </Grid>
          ))}
        </Stack>
      </Box>
    );
  })
);

const Teams = () => {
  const [teams, setTeams] = useState(listOfTeams);
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (!active) setTeams(listOfTeams);
    if (active) {
      setTeams((teams) => teams.filter((team) => team.name === active));
    }
  }, [active]);

  return (
    <Box>
      <Box display="flex" flexWrap="wrap" justifyContent="center">
        <AnimatePresence mode={"sync"}>
          {teams.map((team) => (
            <Team
              layout
              key={team.name}
              {...{
                team,
                setActive,
                active,
              }}
              // initial={{ scale: 1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring" }}
            />
          ))}
          {active && (
            <TeamInfo
              key={`active-${active}`}
              layout
              team={listOfTeams.find((team) => team.name === active)}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring" }}
            />
          )}
        </AnimatePresence>
      </Box>
    </Box>
  );
};

export default Teams;
