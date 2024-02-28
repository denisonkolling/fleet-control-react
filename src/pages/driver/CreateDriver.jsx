import MainCard from '../../components/MainCard';
import React, { useState } from 'react';
import { TbBrandPaypal } from 'react-icons/tb';
import { BsBank } from 'react-icons/bs';
import {
	TextField,
	Button,
	Grid,
	Stack,
	Box,
	CardContent,
	Typography,
	Avatar,
	Menu,
	MenuItem,
	List,
	ListItem,
	ListItemText,
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import {
	UserAddOutlined,
	CreditCardOutlined,
	LockOutlined,
	SettingOutlined,
} from '@ant-design/icons';

const CreateDriver = () => {
	const [selectedDate, handleDateChange] = React.useState(new Date());
	const [value, setValue] = useState('today');
	const [slot, setSlot] = useState('week');
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		birthDate: null,
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
		console.log(formData);
	};

	return (
		<>
			<Grid container rowSpacing={4.5} columnSpacing={2.75} sx={{ p: 2 }}>
				<Grid item xs={12} md={5} lg={3}>
					<MainCard sx={{ mt: 0 }} content={false}>
						<Box sx={{ p: 3, pb: 0 }}>
							<Stack spacing={2}>
								<CardContent>
									<Avatar
										sx={{
											width: 100,
											height: 100,
											margin: 'auto',
											marginBottom: 2,
										}}
										alt="User Photo"
										src="/path/to/user-photo.jpg"
									/>
									<Typography
										variant="h5"
										component="div"
										sx={{ textAlign: 'center', marginBottom: 1 }}>
										John Doe
									</Typography>
									<Typography
										variant="body2"
										color="text.secondary"
										sx={{ textAlign: 'center', marginBottom: 2 }}>
										Truck Driver
									</Typography>

									<List component="nav" aria-label="User Menu">
										<ListItem button component="a" href="#personal-information">
											<UserAddOutlined />
											<ListItemText primary="&nbsp;Personal Information" />
										</ListItem>
										<ListItem button component="a" href="#payment">
											<CreditCardOutlined />
											<ListItemText primary="&nbsp;Payments" />
										</ListItem>
										<ListItem button component="a" href="#password">
											<LockOutlined />
											<ListItemText primary="&nbsp;Password" />
										</ListItem>
										<ListItem button component="a" href="#settings">
											<SettingOutlined />
											<ListItemText primary="&nbsp;Settings" />
										</ListItem>
									</List>
								</CardContent>
							</Stack>
						</Box>
					</MainCard>
				</Grid>

				<Grid item xs={12} md={7} lg={9}>
					<MainCard title="Personal Information">
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

				<Grid item xs={12} md={7} lg={4}>
					<MainCard title="Payment">
						<Typography variant="body2" gutterBottom>
							<Box sx={{ p: 1 }}>
								<Grid item>
									<Stack
										direction="row"
										alignItems="center"
										spacing={0}
										sx={{ my: 1 }}>
										<Button
											sx={{ m: 1 }}
											size="medium"
											onClick={() => setSlot('card')}
											color={slot === 'card' ? 'primary' : 'secondary'}
											variant={slot === 'card' ? 'outlined' : 'text'}>
											<CreditCardOutlined />
											&nbsp;Card
										</Button>
										<Button
											sx={{ m: 1 }}
											size="medium"
											onClick={() => setSlot('paypal')}
											color={slot === 'paypal' ? 'primary' : 'secondary'}
											variant={slot === 'paypal' ? 'outlined' : 'text'}>
											<TbBrandPaypal />
											&nbsp;Paypal
										</Button>
										<Button
											sx={{ m: 1 }}
											size="medium"
											onClick={() => setSlot('bank')}
											color={slot === 'bank' ? 'primary' : 'secondary'}
											variant={slot === 'bank' ? 'outlined' : 'text'}>
											<BsBank />
											&nbsp;Bank
										</Button>
									</Stack>
								</Grid>
							</Box>
						</Typography>
					</MainCard>
				</Grid>

				<Grid item xs={12} md={7} lg={4}>
					<MainCard title="Password">
						<Typography variant="body2" gutterBottom>
							<Box sx={{ p: 1 }}>
								<Grid item>
									<Stack
										direction="row"
										alignItems="center"
										spacing={0}
										sx={{ my: 1 }}></Stack>
								</Grid>
							</Box>
						</Typography>
					</MainCard>
				</Grid>

				<Grid item xs={12} md={7} lg={4}>
					<MainCard title="Settings">
						<Typography variant="body2" gutterBottom>
							<Box sx={{ p: 1 }}>
								<Grid item>
									<Stack
										direction="row"
										alignItems="center"
										spacing={0}
										sx={{ my: 1 }}></Stack>
								</Grid>
							</Box>
						</Typography>
					</MainCard>
				</Grid>
			</Grid>
		</>
	);
};

export default CreateDriver;
