import Button from '@mui/material/Button';

const NeonButton = (props) => {
  const { handleClick, registered, children } = props;

  return (
    <Button
      sx={{
        position: 'relative',
        overflow: 'hidden',
        fontWeight: 'bold',
        letterSpacing: '0.1em',
        color: '#FFFFFF',
        backgroundColor: '#FF72CA',
        boxShadow: '0 0 5px #FF72CA, 0 0 10px #FF72CA, 0 0 15px #FF72CA',
      }}
      size="small"
      variant='contained'
      onClick={handleClick}
    >
      {children}
    </Button>
  );
};

export default NeonButton;
