import React from 'react';
import { Grid, Typography } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import * as Yup from 'yup';
import { Formik } from 'formik';
import AnimateButton from '../../components/AnimateButton';
import MainCard from '../../components/MainCard';

const CreateVehicle = () => {

	return (
		<>
			<Grid container rowSpacing={4.5} columnSpacing={2.75} sx={{ p: 2 }}>
				<Grid item xs={12} md={12} lg={12}>
					<MainCard title="Vehicle Information">
						<Typography variant="body1" gutterBottom>
							<Formik
								initialValues={{
									placa: '',
									modelo: '',
									motorista: '',
									kilometragem: '',
									ano: '',
									combustivel: '',
									submit: null,
								}}
								validationSchema={Yup.object().shape({
									placa: Yup.string().required('Placa é obrigatória'),
									modelo: Yup.string().required('Modelo é obrigatório'),
									motorista: Yup.string().required('Motorista é obrigatório'),
									kilometragem: Yup.number().required(
										'Kilometragem é obrigatória'
									),
									ano: Yup.number().required('Ano é obrigatório'),
									combustivel: Yup.string().required(
										'Combustível é obrigatório'
									),
								})}
								onSubmit={async (
									values,
									{ setErrors, setStatus, setSubmitting }
								) => {
									try {
										setStatus({ success: false });
										setSubmitting(false);
									} catch (err) {
										setStatus({ success: false });
										setErrors({ submit: err.message });
										setSubmitting(false);
									}
								}}>
								{({
									errors,
									handleBlur,
									handleChange,
									handleSubmit,
									isSubmitting,
									touched,
									values,
								}) => (
									<form noValidate onSubmit={handleSubmit}>
										<Grid container spacing={3}>
											<Grid item xs={12} lg={2}>
												<Stack spacing={1}>
													<InputLabel htmlFor="placa">Placa</InputLabel>
													<OutlinedInput
														id="placa"
														type="text"
														value={values.placa}
														name="placa"
														onBlur={handleBlur}
														onChange={handleChange}
														placeholder="Digite a placa"
														fullWidth
														error={Boolean(touched.placa && errors.placa)}
													/>
													{touched.placa && errors.placa && (
														<FormHelperText error id="placa-helper-text">
															{errors.placa}
														</FormHelperText>
													)}
												</Stack>
											</Grid>
											<Grid item xs={12} lg={3}>
												<Stack spacing={1}>
													<InputLabel htmlFor="modelo">Modelo</InputLabel>
													<OutlinedInput
														id="modelo"
														type="text"
														value={values.modelo}
														name="modelo"
														onBlur={handleBlur}
														onChange={handleChange}
														placeholder="Digite o modelo"
														fullWidth
														error={Boolean(touched.modelo && errors.modelo)}
													/>
													{touched.modelo && errors.modelo && (
														<FormHelperText error id="modelo-helper-text">
															{errors.modelo}
														</FormHelperText>
													)}
												</Stack>
											</Grid>
											<Grid item xs={12} lg={3}>
												<Stack spacing={1}>
													<InputLabel htmlFor="kilometragem">
														Kilometragem
													</InputLabel>
													<OutlinedInput
														id="kilometragem"
														type="number"
														value={values.kilometragem}
														name="kilometragem"
														onBlur={handleBlur}
														onChange={handleChange}
														placeholder="Digite a kilometragem"
														fullWidth
														error={Boolean(
															touched.kilometragem && errors.kilometragem
														)}
													/>
													{touched.kilometragem && errors.kilometragem && (
														<FormHelperText error id="kilometragem-helper-text">
															{errors.kilometragem}
														</FormHelperText>
													)}
												</Stack>
											</Grid>
											<Grid item xs={12} lg={4}>
												<Stack spacing={1}>
													<InputLabel htmlFor="motorista">Motorista</InputLabel>
													<OutlinedInput
														id="motorista"
														type="text"
														value={values.motorista}
														name="motorista"
														onBlur={handleBlur}
														onChange={handleChange}
														placeholder="Digite o motorista"
														fullWidth
														error={Boolean(
															touched.motorista && errors.motorista
														)}
													/>
													{touched.motorista && errors.motorista && (
														<FormHelperText error id="motorista-helper-text">
															{errors.motorista}
														</FormHelperText>
													)}
												</Stack>
											</Grid>
											<Grid item xs={12} lg={3}>
												<Stack spacing={1}>
													<InputLabel htmlFor="ano">Ano</InputLabel>
													<OutlinedInput
														id="ano"
														type="text"
														value={values.ano}
														name="ano"
														onBlur={handleBlur}
														onChange={handleChange}
														placeholder="Digite o ano"
														fullWidth
														error={Boolean(touched.ano && errors.ano)}
													/>
													{touched.ano && errors.ano && (
														<FormHelperText error id="ano-helper-text">
															{errors.ano}
														</FormHelperText>
													)}
												</Stack>
											</Grid>
											<Grid item xs={12} lg={3}>
												<Stack spacing={1}>
													<InputLabel htmlFor="combustivel">
														Combustível
													</InputLabel>
													<OutlinedInput
														id="combustivel"
														type="text"
														value={values.combustivel}
														name="combustivel"
														onBlur={handleBlur}
														onChange={handleChange}
														placeholder="Digite o combustível"
														fullWidth
														error={Boolean(
															touched.combustivel && errors.combustivel
														)}
													/>
													{touched.combustivel && errors.combustivel && (
														<FormHelperText error id="combustivel-helper-text">
															{errors.combustivel}
														</FormHelperText>
													)}
												</Stack>
											</Grid>
											{/* Adicione os campos restantes aqui */}
											{/* Exemplo:
								<Grid item xs={12}>
									<Stack spacing={1}>
										<InputLabel htmlFor="modelo">Modelo</InputLabel>
										<OutlinedInput
											id="modelo"
											type="text"
											value={values.modelo}
											name="modelo"
											onBlur={handleBlur}
											onChange={handleChange}
											placeholder="Digite o modelo"
											fullWidth
											error={Boolean(touched.modelo && errors.modelo)}
										/>
										{touched.modelo && errors.modelo && (
											<FormHelperText
												error
												id="modelo-helper-text">
												{errors.modelo}
											</FormHelperText>
										)}
									</Stack>
								</Grid> */}
											<Grid item xs={12} sx={{ mt: -1 }}>
												<Stack
													direction="row"
													justifyContent="space-between"
													alignItems="center"
													spacing={2}>
													{/* Adicione campos adicionais aqui, se necessário */}
												</Stack>
											</Grid>
											{errors.submit && (
												<Grid item xs={12}>
													<FormHelperText error>{errors.submit}</FormHelperText>
												</Grid>
											)}
											<Grid item xs={12}>
												<Button
													disableElevation
													disabled={isSubmitting}
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
								)}
							</Formik>
						</Typography>
					</MainCard>
				</Grid>
			</Grid>
		</>
	);
};

export default CreateVehicle;
