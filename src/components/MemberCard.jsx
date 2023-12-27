import React, { useState } from 'react';
import { Card, CardMedia, Chip, Typography, CardContent, CardActions, Button, Stack } from '@mui/material';
import ReactCardFlip from 'react-card-flip';

const MemberCard = ({ member }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  

  const handleMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };

  const cardStyle = {
    width: '200px', 
    height: '300px', 
    borderRadius: '20px',
    boxShadow:'0 0 5px #FF72CA, 0 0 10px #FF72CA, 0 0 15px #FF72CA',
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      {/* Front side of the card */}
      <Card style={cardStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <CardMedia
          component="img"
          height="140"
          image={member.image} 
          alt={member.name}
        />
        <CardContent>
          <Typography variant="h5" component="div">
            {member.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {member.position}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {member.year}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            View Profile
          </Button>
        </CardActions>
      </Card>

      {/* Back side of the card */}
      <Card style={cardStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {member.bio}
          </Typography>
        </CardContent>
        <CardActions>
          <Stack direction="row" spacing={1}>
            {member.skills.map((skill, index) => (
              <Chip key={index} label={skill} />
            ))}
          </Stack>
        </CardActions>
      </Card>
    </ReactCardFlip>
  );
};

export default MemberCard;
