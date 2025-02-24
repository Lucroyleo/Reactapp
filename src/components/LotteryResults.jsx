import { Paper, Typography, Grid, Box } from '@mui/material';

const LotteryResults = () => {
  // Mock data - this would come from an API in production
  const latestResults = {
    drawDate: '2024-02-15',
    winningNumbers: [7, 13, 25, 32, 48],
    jackpot: '10,000,000 FCFA',
    winners: 2
  };

  return (
    <Paper sx={{ p: 2, mb: 2 }}>
      <Typography variant="h6" gutterBottom>
        Tirage du {new Date(latestResults.drawDate).toLocaleDateString('fr-FR')}
      </Typography>
      
      <Grid container spacing={2} sx={{ mt: 1 }}>
        {latestResults.winningNumbers.map((number, index) => (
          <Grid item xs={2.4} key={index}>
            <Box
              sx={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'primary.main',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto'
              }}
            >
              {number}
            </Box>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 2 }}>
        <Typography variant="subtitle1" color="primary">
          Jackpot: {latestResults.jackpot}
        </Typography>
        <Typography variant="body2">
          Nombre de gagnants: {latestResults.winners}
        </Typography>
      </Box>
    </Paper>
  );
};

export default LotteryResults;