import React, { useState } from "react";
import {
  Card,
  CardMedia,
  Chip,
  Typography,
  CardContent,
  CardActions,
  Button,
  Stack,
} from "@mui/material";
import ReactCardFlip from "react-card-flip";

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
    boxShadow: "0 0 10px 5px rgba(0, 0, 255, 0.5)",
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
          style={{ borderRadius: "50%", margin: "10px", marginLeft: "30px", border: "3px solid blue", objectFit: "cover",
          width: "70%",
          height: "48%", }}
        />
        <CardContent>
          <Typography variant="h5" component="div">
            {member && member.name ? member.name : ""}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {member && member.native ? member.native : ""}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {member && member.year ? member.year : ""}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            View Profile
          </Button>
        </CardActions>
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
