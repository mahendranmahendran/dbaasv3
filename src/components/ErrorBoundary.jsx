// src/components/ErrorBoundary.jsx
import React from 'react';
import { Box, Typography, Button } from '@mui/material';

class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };
  
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <Box sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom>
            Something went wrong
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            {this.state.error?.toString()}
          </Typography>
          <Button 
            variant="contained" 
            onClick={this.handleReset}
          >
            Try Again
          </Button>
        </Box>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;