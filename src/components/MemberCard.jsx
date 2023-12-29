import React, { useState } from "react";
import {
  Card,
  CardMedia,
  Chip,
  Typography,
  CardContent,
  CardActions,
  Stack,
} from "@mui/material";
import ReactCardFlip from "react-card-flip";

const MemberCard = ({ member }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => {
    setIsFlipped(!isFlipped)
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };

  const toggleFlip = ()=>{
    setIsFlipped(!isFlipped);
  }

  const cardStyle = {
    width: "200px",
    height: "300px",
    borderRadius: "20px",
    // boxShadow: "0 0 10px 5px rgba(0, 0, 255, 0.5)",
  };

  const colours = [
    {first:'#ED6663',second:'#31112C'},
    {first:'#EDD2F3',second:'#0E185F'},
    {first:'#53B8BB',second:'#055052'},
    {first:'#ED6663',second:'#31112C'},
    {first:'#ED6663',second:'#31112C'},
    {first:'8E2E6A',second:'#311054'},
    {first:'#FF9800',second:'7C0000'},
  ]

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      {/* Front side of the card */}
      <Card
        style={cardStyle}
        // onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}
        onClick={toggleFlip}
        sx={{backgroundImage:`linear-gradient(to bottom, ${colours[Number(member.priority)].first}, ${colours[Number(member.priority)].second})`}}
        // sx={{backgroundImage:"linear-gradient(to bottom, #FF9800, #a80000)"}}
        // sx={{backgroundImage:"linear-gradient(to bottom, #EDD2F3, #0E185F)"}}
        // sx={{backgroundImage:"linear-gradient(to top, #055052, #53B8BB)"}}
        // sx={{backgroundImage:"linear-gradient(to bottom, #ED6663, #31112C)"}}
        // sx={{backgroundImage:"linear-gradient(to bottom, #8E2E6A, #311054)"}}
        // sx={{backgroundImage:"linear-gradient(to top, #0C356A, #F4CE14)"}}
      >
        <CardMedia
          component="img"
          height="140"
          image={member && member.pic ? member.pic : ""}
          alt={member && Number(member.priority) ? Number(member.priority) : ""}
          style={{ borderRadius: "50%", margin: "10px", marginLeft: "30px", objectFit: "cover",
          width: "70%",
          height: "48%", }}
        />
        <CardContent>
          <Typography variant="h5" component="div">
            {member && member.name ? member.name : ""}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {member && member.place ? member.place : ""}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {member && member.year ? member.year : ""}
          </Typography>
        </CardContent>
      </Card>

      {/* Back side of the card */}
      <Card
        style={cardStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={toggleFlip}
        sx={{backgroundImage:`linear-gradient(to bottom, ${colours[Number(member.priority)].second}, ${colours[Number(member.priority)].first})`}}
        >
        <CardContent sx={{}}>
          <Typography variant="body2" color="text.secondary">
            {member && member.description ? member.description : ""}
          </Typography>
        </CardContent>
        <CardActions>
          <Stack direction="row" spacing={1}>
            {member && member.skills ? (
              member.skills.map((skill, index) => (
                <Chip key={index} label={skill} />
              ))
            ) : (
              <Chip label="No skills available" />
            )}
          </Stack>
        </CardActions>
      </Card>
    </ReactCardFlip>
  );
};

export default MemberCard;
