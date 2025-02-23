import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container, Paper, Box, IconButton } from '@mui/material';
import { Share, Notifications } from '@mui/icons-material';
import { useState } from 'react';
import BettingForm from './components/BettingForm';
import './App.css';

function App() {
  const [balance] = useState('0 FCFA');

  return (
    <Router>
      <div className="app">
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
          <Paper sx={{ p: 2, mb: 2 }}>
            <Typography variant="h5">Derniers Résultats</Typography>
            {/* Results will be added here */}
          </Paper>

          <Paper sx={{ p: 2, mb: 2 }}>
            <Typography variant="h5">Prochain Tirage</Typography>
            <Typography variant="h3" color="primary" sx={{ mt: 2 }}>
              20h 37m 24s
            </Typography>
          </Paper>

          <Paper sx={{ p: 2, mb: 2 }}>
            <Typography variant="h5">Placer une mise - JACKPOT</Typography>
            <BettingForm />
          </Paper>

          <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, bgcolor: 'background.paper' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-around', p: 1 }}>
              <Link to="/mises" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Typography>Mises</Typography>
              </Link>
              <Link to="/gains" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Typography>Mes Gains</Typography>
              </Link>
              <Link to="/historique" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Typography>Historique</Typography>
              </Link>
              <Link to="/transactions" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Typography>Transactions</Typography>
              </Link>
            </Box>
          </Box>
        </Container>
      </div>
    </Router>
  )
}

export default App
