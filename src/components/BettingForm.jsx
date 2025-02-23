import { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

function BettingForm() {
  const [number, setNumber] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement bet submission logic
    console.log('Bet submitted:', { number, amount });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <TextField
        fullWidth
        label="Numéro (1-90)"
        type="number"
        value={number}
        onChange={(e) => {
          const val = parseInt(e.target.value);
          if (!isNaN(val) && val >= 1 && val <= 90) {
            setNumber(val);
          }
        }}
        margin="normal"
        InputProps={{ inputProps: { min: 1, max: 90 } }}
        required
      />
      <TextField
        fullWidth
        label="Montant (Minimum 25 FCFA)"
        type="number"
        value={amount}
        onChange={(e) => {
          const val = parseInt(e.target.value);
          if (!isNaN(val) && val >= 25) {
            setAmount(val);
          }
        }}
        margin="normal"
        InputProps={{ inputProps: { min: 25 } }}
        required
      />
      <Button
        type="submit"
        variant="contained"
        fullWidth
        sx={{ mt: 2, bgcolor: '#4CAF50' }}
      >
        Placer la mise
      </Button>
    </Box>
  );
}

export default BettingForm;