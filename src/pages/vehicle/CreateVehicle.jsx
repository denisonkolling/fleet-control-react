import { Grid, Typography } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import FormHelperText from "@mui/material/FormHelperText";
import * as Yup from "yup";
import { Formik } from "formik";
import MainCard from "../../components/MainCard";
import { saveVehicle } from "../../api/vehicle";
import {
  errorNotification,
  successNotification,
} from "../../services/notification";

const CreateVehicle = () => {
  return (
    <>
      <Grid container rowSpacing={4.5} columnSpacing={2.75} sx={{ p: 2 }}>
        <Grid item xs={12} md={12} lg={12}>
          <MainCard title="Vehicle Information">
            <Typography variant="body1" gutterBottom>
              <Formik
                initialValues={{
                  plate: "",
                  model: "",
                  driver: "",
                  mileage: "",
                  year: "",
                  fuel: "",
                  submit: null,
                }}
                validationSchema={Yup.object().shape({
                  plate: Yup.string().required("Plate is required"),
                  model: Yup.string().required("Model is required"),
                  driver: Yup.string().required("Driver is required"),
                  mileage: Yup.number().required("Mileage is required"),
                  year: Yup.number().required("Year is required"),
                  fuel: Yup.string().required("Fuel is required"),
                })}
                onSubmit={async (values, { setSubmitting, resetForm }) => {
                  try {
                    await saveVehicle(values);
                    successNotification(
                      "Vehicle information saved successfully."
                    );
                    setSubmitting(false);
                    resetForm();
                  } catch (err) {
                    errorNotification("Failed to save vehicle information.");
                    setSubmitting(false);
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
                }) => (
                  <form noValidate onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} lg={2}>
                        <Stack spacing={1}>
                          <OutlinedInput
                            id="plate"
                            type="text"
                            value={values.plate}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            placeholder="Plate"
                            fullWidth
                            error={Boolean(touched.plate && errors.plate)}
                          />
                          {touched.plate && errors.plate && (
                            <FormHelperText error id="plate-helper-text">
                              {errors.plate}
                            </FormHelperText>
                          )}
                        </Stack>
                      </Grid>
                      <Grid item xs={12} lg={3}>
                        <Stack spacing={1}>
                          <OutlinedInput
                            id="model"
                            type="text"
                            value={values.model}
                            name="model"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            placeholder="Model"
                            fullWidth
                            error={Boolean(touched.model && errors.model)}
                          />
                          {touched.model && errors.model && (
                            <FormHelperText error id="modelo-helper-text">
                              {errors.model}
                            </FormHelperText>
                          )}
                        </Stack>
                      </Grid>
                      <Grid item xs={12} lg={3}>
                        <Stack spacing={1}>
                          <OutlinedInput
                            id="mileage"
                            type="number"
                            value={values.mileage}
                            name="mileage"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            placeholder="Mileage"
                            fullWidth
                            error={Boolean(touched.mileage && errors.mileage)}
                          />
                          {touched.mileage && errors.mileage && (
                            <FormHelperText error id="mileage-helper-text">
                              {errors.mileage}
                            </FormHelperText>
                          )}
                        </Stack>
                      </Grid>
                      <Grid item xs={12} lg={4}>
                        <Stack spacing={1}>
                          <OutlinedInput
                            id="driver"
                            type="text"
                            value={values.driver}
                            name="driver"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            placeholder="Driver"
                            fullWidth
                            error={Boolean(touched.driver && errors.driver)}
                          />
                          {touched.driver && errors.driver && (
                            <FormHelperText error id="driver-helper-text">
                              {errors.driver}
                            </FormHelperText>
                          )}
                        </Stack>
                      </Grid>
                      <Grid item xs={12} lg={3}>
                        <Stack spacing={1}>
                          <OutlinedInput
                            id="year"
                            type="text"
                            value={values.year}
                            name="year"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            placeholder="Year"
                            fullWidth
                            error={Boolean(touched.year && errors.year)}
                          />
                          {touched.year && errors.year && (
                            <FormHelperText error id="year-helper-text">
                              {errors.year}
                            </FormHelperText>
                          )}
                        </Stack>
                      </Grid>
                      <Grid item xs={12} lg={3}>
                        <Stack spacing={1}>
                          <OutlinedInput
                            id="fuel"
                            type="text"
                            value={values.fuel}
                            name="fuel"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            placeholder="Fuel"
                            fullWidth
                            error={Boolean(touched.fuel && errors.fuel)}
                          />
                          {touched.fuel && errors.fuel && (
                            <FormHelperText error id="fuel-helper-text">
                              {errors.fuel}
                            </FormHelperText>
                          )}
                        </Stack>
                      </Grid>
                      <Grid item xs={12} sx={{ mt: -1 }}>
                        <Stack
                          direction="row"
                          justifyContent="space-between"
                          alignItems="center"
                          spacing={2}
                        ></Stack>
                      </Grid>
                      <Grid container justifyContent="flex-end" item xs={12}>
                        <Button
                          disableElevation
                          disabled={isSubmitting}
                          variant="contained"
                          color="primary"
                          type="submit"
                          sx={{ my: 2 }}
                        >
                          Save
                        </Button>
                        <Button
                          variant="outlined"
                          color="secondary"
                          type="submit"
                          sx={{ m: 2 }}
                        >
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
