import React, { useState } from "react";
import {
  Card,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
  Stack,
  IconButton,
} from "@mui/material";
import ReactCardFlip from "react-card-flip";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const MemberCard = ({ member }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };

  const cardStyle = {
    width: "200px",
    height: "300px",
    borderRadius: "20px",
    //boxShadow: "0 0 10px 5px rgba(0, 0, 255, 0.5)",
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      {/* Front side of the card */}
      <Card
        style={cardStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <CardMedia
          component="img"
          height="140"
          image={member && member.pic ? member.pic : ""}
          alt={member && member.name ? member.name : ""}
          style={{
            borderRadius: "50%",
            margin: "10px",
            marginLeft: "30px",
            background: "linear-gradient(to right, #00ff00, #0000ff)", // Linear gradient as background
            padding: "3px",
            objectFit: "cover",
            width: "70%",
            height: "48%",
          }}
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
        <CardActions></CardActions>
      </Card>

      {/* Back side of the card */}
      <Card
        style={cardStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {member && member.description ? member.description : ""}
          </Typography>
        </CardContent>
        <CardActions>
          <Stack direction="row" spacing={1}></Stack>
          <Stack direction="row" spacing={1} mt={2}>
            {member && member.github ? (
              <IconButton
                target="_blank"
                href={member.github}
                aria-label="GitHub"
                color="primary"
              >
                <GitHubIcon style={{ fontSize: 50, color: "white" }} />
              </IconButton>
            ) : null}
            {member && member.linkdein ? (
              <IconButton
                target="_blank"
                href={member.linkdein}
                aria-label="LinkedIn"
                color="primary"
              >
                <LinkedInIcon style={{ fontSize: 50, color: "white" }}/>
              </IconButton>
            ) : null}
          </Stack>
        </CardActions>
      </Card>
    </ReactCardFlip>
  );
};

export default MemberCard;
