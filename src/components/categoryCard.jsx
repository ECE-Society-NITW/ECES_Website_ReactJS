import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14, color: 'white', marginLeft: 'auto' }} color="text.secondary" gutterBottom>
        Category
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Explore category</Button>
    </CardActions>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Box sx={{ maxWidth: 200, maxHeight: 30, mt: 5 }}>
      <Card variant="outlined" sx={{borderRadius: 6, border: '0.5px solid #1c626e', backgroundColor: '#1F2020' }}>{card}</Card>
    </Box>
  );
}