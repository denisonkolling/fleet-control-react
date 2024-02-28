import Typography from '@mui/material/Typography';
import MainCard from '../../components/MainCard';
import React, { useState } from 'react';
import { TextField, Button, Grid, Stack, Box } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

const FormDemo = () => {
	const [selectedDate, handleDateChange] = React.useState(new Date());
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		birthDate: null, // Alterado para birthDate e inicializado como null
		licenseNumber: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData); // Here you can submit the form data to your backend or perform any necessary action
	};

	const [value, setValue] = useState('today');
	const [slot, setSlot] = useState('week');

	return (
		<>
			<Grid container rowSpacing={4.5} columnSpacing={2.75} sx={{ p: 2,}}>
				{/* <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Typography variant="h5">Dashboard</Typography>
    </Grid> */}
				<Grid item xs={12} sm={6} md={4} lg={3}>
					<MainCard>Teste</MainCard>
				</Grid>
				<Grid item xs={12} sm={6} md={4} lg={3}>
					<MainCard>Teste</MainCard>
				</Grid>
				<Grid item xs={12} sm={6} md={4} lg={3}>
					<MainCard>Teste</MainCard>
				</Grid>
				<Grid item xs={12} sm={6} md={4} lg={3}>
					<MainCard>Teste</MainCard>
				</Grid>
				<Grid
					item
					md={8}
					sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }}
				/>

				<Grid item xs={12} md={7} lg={8}>
					<Grid container alignItems="center" justifyContent="space-between">
						<Grid item>
							<Typography variant="h5">Unique Visitor</Typography>
						</Grid>

						<Grid item>
							<Stack
								direction="row"
								alignItems="center"
								spacing={0}
								sx={{ my: 1 }}>
								<Button
									size="small"
									onClick={() => setSlot('month')}
									color={slot === 'month' ? 'primary' : 'secondary'}
									variant={slot === 'month' ? 'outlined' : 'text'}>
									Month
								</Button>
								<Button
									size="small"
									onClick={() => setSlot('week')}
									color={slot === 'week' ? 'primary' : 'secondary'}
									variant={slot === 'week' ? 'outlined' : 'text'}>
									Week
								</Button>
							</Stack>
						</Grid>
					</Grid>

					<MainCard title="Personal Information" codeHighlight>
						<Typography variant="body2" gutterBottom>
							<Box sx={{ p: 3, pb: 0 }}>
								<form onSubmit={handleSubmit}>
									<Grid container spacing={2} sx={{ py: 3, pb: 0, pt: 0 }}>
										<Grid item xs={12} sm={6}>
											<TextField
												fullWidth
												name="firstName"
												label="First Name"
												value={formData.firstName}
												onChange={handleChange}
											/>
										</Grid>
										<Grid item xs={12} sm={6}>
											<TextField
												fullWidth
												name="lastName"
												label="Last Name"
												value={formData.lastName}
												onChange={handleChange}
											/>
										</Grid>
										<Grid item xs={12} sm={6}>
											<LocalizationProvider dateAdapter={AdapterDayjs}>
												<DatePicker
													fullWidth
													label="Birth Date"
													inputVariant="outlined"
													value={dayjs(value.birthDate)}
													onChange={handleDateChange}
												/>
											</LocalizationProvider>
										</Grid>
										<Grid item xs={12} sm={6}>
											<TextField
												fullWidth
												name="nationality"
												label="Nationality"
												type="text"
												value={formData.nationality}
												onChange={handleChange}
											/>
										</Grid>
										<Grid item xs={12} sm={6}>
											<TextField
												fullWidth
												name="licenseId"
												label="License Number"
												type="text"
												value={formData.licenseId}
												onChange={handleChange}
											/>
										</Grid>

										<Grid item xs={12} sm={6}>
											<TextField
												fullWidth
												name="licenseClass"
												label="Class"
												type="text"
												value={formData.licenseClass}
												onChange={handleChange}
											/>
										</Grid>
										<Grid item xs={12} sm={6}>
											<LocalizationProvider dateAdapter={AdapterDayjs}>
												<DatePicker
													fullWidth
													label="Expiry Date"
													inputVariant="outlined"
													value={dayjs(value.expiryDate)}
													onChange={handleDateChange}
												/>
											</LocalizationProvider>
										</Grid>
										<Grid item xs={12}>
											<Button
												variant="contained"
												color="primary"
												type="submit"
												sx={{ my: 2 }}>
												Save
											</Button>
											<Button
												variant="outlined"
												color="secondary"
												type="submit"
												sx={{ m: 2 }}>
												Cancel
											</Button>
										</Grid>
									</Grid>
								</form>
							</Box>
						</Typography>
					</MainCard>
				</Grid>
				<Grid item xs={12} md={5} lg={4}>
					<Grid container alignItems="center" justifyContent="space-between">
						<Grid item>
							<Typography variant="h5">Income Overview</Typography>
						</Grid>
						<Grid item />
					</Grid>
					<MainCard sx={{ mt: 2 }} content={false}>
						<Box sx={{ p: 3, pb: 0 }}>
							<Stack spacing={2}>
								<Typography variant="h6" color="textSecondary">
									This Week Statistics
								</Typography>
								<Typography variant="h3">$7,650</Typography>
							</Stack>
							<h1>Montly Bar Chart</h1>
						</Box>
					</MainCard>
				</Grid>
			</Grid>
		</>
	);
};

export default FormDemo;