import { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set next draw time to 8 PM today or tomorrow if it's past 8 PM
    const calculateNextDraw = () => {
      const now = new Date();
      const drawTime = new Date(now);
      drawTime.setHours(20, 0, 0, 0);

      if (now > drawTime) {
        drawTime.setDate(drawTime.getDate() + 1);
      }

      return drawTime;
    };

    const calculateTimeLeft = () => {
      const now = new Date();
      const nextDraw = calculateNextDraw();
      const difference = nextDraw - now;

      if (difference > 0) {
        setTimeLeft({
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant="h3" color="primary">
        {`${timeLeft.hours.toString().padStart(2, '0')}h ${timeLeft.minutes.toString().padStart(2, '0')}m ${timeLeft.seconds.toString().padStart(2, '0')}s`}
      </Typography>
      <Typography variant="subtitle1" color="text.secondary">
        Prochain tirage
      </Typography>
    </Box>
  );
};

export default CountdownTimer;