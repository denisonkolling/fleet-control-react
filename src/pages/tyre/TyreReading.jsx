import { Grid, TextField, Button, FormHelperText, Box } from '@mui/material';
import { Formik } from 'formik';
import * as Yup from 'yup';
import MainCard from '../../components/MainCard';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { saveTyreReading } from '../../api/tyre';
import {
  errorNotification,
  successNotification,
} from '../../services/notification';

const TyreReading = () => {
  return (
    <>
      <Grid container rowSpacing={4.5} columnSpacing={2.75} sx={{ p: 0 }}>
        <Grid item xs={12} md={12} lg={6}>
          <MainCard title='Tyre Wear Reading Information'>
            <Box sx={{ p: 3, pb: 0 }}>
              <Formik
                initialValues={{
                  tyreId: '',
                  insideTread: '',
                  midleTread: '',
                  outsideTread: '',
                  date: null,
                  pressure: '',
                  vehicleMileage: '',
                }}
                validationSchema={Yup.object().shape({
                  tyreId: Yup.string().required('Serial Number is required'),
                  insideTread: Yup.number().required(
                    'Inside tread is required'
                  ),
                  midleTread: Yup.number().required('Midle tread is required'),
                  outsideTread: Yup.number().required(
                    'Outside tread is required'
                  ),
                  date: Yup.date().required('Date is required'),
                })}
                onSubmit={async (
                  values,
                  { setErrors, setStatus, setSubmitting, resetForm }
                ) => {
                  try {
                    saveTyreReading(values);
                    setStatus({ success: false });
                    setSubmitting(false);
                    successNotification('Tyre information saved successfully.');
                    resetForm();
                  } catch (err) {
                    setStatus({ success: false });
                    setErrors({ submit: err.message });
                    setSubmitting(false);
                    errorNotification('Failed to save Tyre information.');
                  }
                }}
              >
                {({
                  errors,
                  handleBlur,
                  handleChange,
                  handleSubmit,
                  isSubmitting,
                  touched,
                  values,
                  setFieldValue,
                }) => (
                  <form noValidate onSubmit={handleSubmit}>
                    <Grid container spacing={3} sx={{ py: 3, pb: 0, pt: 0 }}>
                    

                      <Grid item xs={12} sm={6} lg={6}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker
                            fullWidth
                            label='Reading Date'
                            inputVariant='outlined'
                            value={values.date}
                            onChange={(date) => setFieldValue('date', date)}
                            error={Boolean(touched.date && errors.date)}
                          />
                        </LocalizationProvider>
                        {touched.date && errors.date && (
                          <FormHelperText error>{errors.date}</FormHelperText>
                        )}
                      </Grid>

                      <Grid item xs={12} sm={6} lg={6}>
                        <TextField
                          type='text'
                          value={values.tyreId}
                          fullWidth
                          name='tyreId'
                          label='Serial Number'
                          onBlur={handleBlur}
                          onChange={handleChange}
                          placeholder='Enter tyre serial number...'
                          error={Boolean(touched.tyreId && errors.tyreId)}
                        />
                        {touched.tyreId && errors.tyreId && (
                          <FormHelperText error>{errors.tyreId}</FormHelperText>
                        )}
                      </Grid>

                      <Grid item xs={12} sm={6} lg={4}>
                        <TextField
                          type='number'
                          value={values.insideTread}
                          fullWidth
                          name='insideTread'
                          label='Inside tread'
                          onBlur={handleBlur}
                          onChange={handleChange}
                          placeholder='Enter inside tread...'
                          error={Boolean(
                            touched.insideTread && errors.insideTread
                          )}
                        />
                        {touched.insideTread && errors.insideTread && (
                          <FormHelperText error>
                            {errors.insideTread}
                          </FormHelperText>
                        )}
                      </Grid>
                      <Grid item xs={12} sm={6} lg={4}>
                        <TextField
                          type='number'
                          value={values.midleTread}
                          fullWidth
                          name='midleTread'
                          label='Midle tread'
                          onBlur={handleBlur}
                          onChange={handleChange}
                          placeholder='Enter midle tread...'
                          error={Boolean(
                            touched.midleTread && errors.midleTread
                          )}
                        />
                        {touched.midleTread && errors.midleTread && (
                          <FormHelperText error>
                            {errors.midleTread}
                          </FormHelperText>
                        )}
                      </Grid>
                      <Grid item xs={12} sm={6} lg={4}>
                        <TextField
                          type='number'
                          value={values.outsideTread}
                          fullWidth
                          name='outsideTread'
                          label='Midle tread'
                          onBlur={handleBlur}
                          onChange={handleChange}
                          placeholder='Enter outside tread...'
                          error={Boolean(
                            touched.outsideTread && errors.outsideTread
                          )}
                        />
                        {touched.outsideTread && errors.outsideTread && (
                          <FormHelperText error>
                            {errors.outsideTread}
                          </FormHelperText>
                        )}
                      </Grid>
                    </Grid>

                    {/* Buttons */}
                    <Grid container justifyContent='flex-end' item xs={12}>
                      <Button
                        variant='contained'
                        color='primary'
                        type='submit'
                        sx={{ my: 2 }}
                        disabled={isSubmitting}
                      >
                        Save
                      </Button>
                      <Button
                        variant='outlined'
                        color='secondary'
                        sx={{ ml: 2, my: 2 }}
                      >
                        Cancel
                      </Button>
                    </Grid>
                    {errors.submit && (
                      <Grid item xs={12}>
                        <FormHelperText error>{errors.submit}</FormHelperText>
                      </Grid>
                    )}
                  </form>
                )}
              </Formik>
            </Box>
          </MainCard>
        </Grid>
      </Grid>
    </>
  );
};

export default TyreReading;
