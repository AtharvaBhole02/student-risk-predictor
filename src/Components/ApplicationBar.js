import React from 'react';
import { AppBar, Menu, MenuItem, Typography } from '@mui/material';

const AppplicationBar = () => {
	return (
		<>
			<Menu>
				<MenuItem></MenuItem>
			</Menu>
			<AppBar style={{ padding: '1rem' }}>
				<Typography variant="h6" style={{ textAlign: 'left' }}>
					Student Risk Predictor App
				</Typography>{' '}
			</AppBar>
		</>
	);
};

export default AppplicationBar;
