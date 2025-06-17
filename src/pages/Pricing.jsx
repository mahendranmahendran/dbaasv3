// src/pages/Pricing.jsx
import { Box, Typography, Grid, Button, Paper, Container } from '@mui/material';
import { Bolt, Star, RocketLaunch } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const tiers = [
  {
    name: "Starter",
    icon: <Star color="primary" sx={{ fontSize: 40 }} />,
    price: "$20/month",
    features: [
      "2 GB Memory",
      "10 GB Storage",
      "Basic Support",
      "Up to 5 databases",
      "Community Access"
    ],
    cta: "Get Started",
    highlight: false
  },
  {
    name: "Professional",
    icon: <Bolt color="warning" sx={{ fontSize: 40 }} />,
    price: "$30/month",
    features: [
      "4 GB Memory",
      "30 GB Storage",
      "Priority Support",
      "Up to 15 databases",
      "Daily Backups"
    ],
    cta: "Most Popular",
    highlight: true
  },
  {
    name: "Enterprise",
    icon: <RocketLaunch color="success" sx={{ fontSize: 40 }} />,
    price: "$50/month",
    features: [
      "8 GB Memory",
      "80 GB Storage",
      "24/7 Support",
      "Unlimited databases",
      "Hourly Backups",
      "Dedicated Resources"
    ],
    cta: "Scale Up",
    highlight: false
  }
];

export const Pricing = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box textAlign="center" mb={6}>
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
          Choose Your Plan
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Select the perfect solution for your data needs
        </Typography>
      </Box>

      <Grid container spacing={4} alignItems="flex-end">
        {tiers.map((tier) => (
          <Grid item xs={12} md={4} key={tier.name}>
            <Paper
              elevation={tier.highlight ? 6 : 3}
              sx={{
                p: 4,
                height: '100%',
                border: tier.highlight ? '2px solid' : 'none',
                borderColor: tier.highlight ? 'primary.main' : 'transparent',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {tier.highlight && (
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    px: 2,
                    py: 0.5,
                    bgcolor: 'primary.main',
                    color: 'primary.contrastText',
                    fontSize: '0.8rem',
                    fontWeight: 'bold',
                    borderBottomLeftRadius: 4
                  }}
                >
                  Recommended
                </Box>
              )}

              <Box textAlign="center" mb={3}>
                {tier.icon}
                <Typography variant="h5" sx={{ mt: 1, fontWeight: 'bold' }}>
                  {tier.name}
                </Typography>
                <Typography variant="h4" sx={{ my: 2, fontWeight: 'bold' }}>
                  {tier.price}
                </Typography>
              </Box>

              <Box component="ul" sx={{ 
                listStyle: 'none',
                p: 0,
                mb: 3,
                '& li': { 
                  py: 1,
                  display: 'flex',
                  alignItems: 'center',
                  '&:before': {
                    content: '"✓"',
                    color: 'success.main',
                    mr: 1
                  }
                }
              }}>
                {tier.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </Box>

              <Button
                component={Link}
                to="/signup"
                fullWidth
                variant={tier.highlight ? "contained" : "outlined"}
                size="large"
                sx={{ mt: 'auto' }}
              >
                {tier.cta}
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Box textAlign="center" mt={6}>
        <Typography variant="body1" color="text.secondary">
          Need custom solutions?{' '}
          <Link to="/contact" style={{ fontWeight: 'bold' }}>
            Contact our team
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};