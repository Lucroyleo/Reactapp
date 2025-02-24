import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container, Paper, Box, IconButton, BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Share, Notifications, History, AccountBalance, Receipt, Payment } from '@mui/icons-material';
import { useState } from 'react';
import BettingForm from './components/BettingForm';
import LotteryResults from './components/LotteryResults';
import CountdownTimer from './components/CountdownTimer';
import './App.css';

function App() {
  const [balance] = useState('0 FCFA');
  const [value, setValue] = useState(0);

  return (
    <Router>
      <div className="app" style={{ paddingBottom: '56px' }}>
        <AppBar position="static" sx={{ bgcolor: '#4CAF50' }}>
          <Toolbar>
            <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                LottoPool
              </Typography>
              <Typography variant="subtitle1" sx={{ mr: 2 }}>
                Solde: {balance}
              </Typography>
              <IconButton color="inherit">
                <Share />
              </IconButton>
              <IconButton color="inherit">
                <Notifications />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>

        <Container maxWidth="sm" sx={{ mt: 2 }}>
          <Routes>
            <Route path="/" element={
              <>
                <LotteryResults />
                
                <Paper sx={{ p: 2, mb: 2 }}>
                  <CountdownTimer />
                </Paper>

                <Paper sx={{ p: 2, mb: 2 }}>
                  <Typography variant="h5" gutterBottom>Placer une mise - JACKPOT</Typography>
                  <BettingForm />
                </Paper>
              </>
            } />
            <Route path="/mises" element={<Paper sx={{ p: 2 }}><Typography>Mes Mises</Typography></Paper>} />
            <Route path="/gains" element={<Paper sx={{ p: 2 }}><Typography>Mes Gains</Typography></Paper>} />
            <Route path="/historique" element={<Paper sx={{ p: 2 }}><Typography>Historique</Typography></Paper>} />
            <Route path="/transactions" element={<Paper sx={{ p: 2 }}><Typography>Transactions</Typography></Paper>} />
          </Routes>
        </Container>

        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction label="Mises" icon={<Receipt />} />
            <BottomNavigationAction label="Gains" icon={<AccountBalance />} />
            <BottomNavigationAction label="Historique" icon={<History />} />
            <BottomNavigationAction label="Transactions" icon={<Payment />} />
          </BottomNavigation>
        </Paper>
      </div>
    </Router>
  );
}

export default App;
