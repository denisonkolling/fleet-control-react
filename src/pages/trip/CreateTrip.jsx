import { Grid, InputLabel, Box } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import FormHelperText from "@mui/material/FormHelperText";
import * as Yup from "yup";
import { Formik } from "formik";
import MainCard from "../../components/MainCard";
import { saveTrip } from "../../api/trip";
import {
  errorNotification,
  successNotification,
} from "../../services/notification";

const CreateTrip = () => {
  return (
    <>
      <Grid
        container
        rowSpacing={4.5}
        columnSpacing={2.75}
        sx={{ p: 2, alignItems: "center", justifyContent: "center" }}
      >
        <Grid item xs={12} md={12} lg={8}>
          <MainCard title="New Trip Information">
            <Formik
              initialValues={{
                plate: "",
                origin: "",
                destination: "",
                distance: "",
                driver: "",
                submit: null,
              }}
              validationSchema={Yup.object().shape({
                plate: Yup.string().required("Please provide the plate number"),
                driver: Yup.string().required("Please specify the driver"),
                origin: Yup.string().required("Please specify the origin"),
                destination: Yup.string().required(
                  "Please specify the destination"
                ),
                distance: Yup.number().required("Please enter the distance"),
              })}
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                try {
                  await saveTrip(values);
                  successNotification("Trip information saved successfully.");
                  setSubmitting(false);
                  resetForm();
                } catch (err) {
                  errorNotification("Failed to save trip information.");
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
                    <Grid item xs={12} lg={6}>
                      <Stack spacing={1}>
                        <InputLabel htmlFor="plate">Plate*</InputLabel>
                        <OutlinedInput
                          id="plate"
                          type="text"
                          value={values.plate}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          placeholder="ABC-1234"
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
                    <Grid item xs={12} lg={6}>
                      <Stack spacing={1}>
                        <InputLabel htmlFor="origin">Origin*</InputLabel>
                        <OutlinedInput
                          id="origin"
                          type="text"
                          value={values.origin}
                          name="origin"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          placeholder="Volvo FH"
                          ance
                          fullWidth
                          error={Boolean(touched.origin && errors.origin)}
                        />
                        {touched.origin && errors.origin && (
                          <FormHelperText error id="origino-helper-text">
                            {errors.origin}
                          </FormHelperText>
                        )}
                      </Stack>
                    </Grid>

                    <Grid item xs={12} lg={6}>
                      <Stack spacing={1}>
                        <InputLabel htmlFor="destination">
                          Destination*
                        </InputLabel>
                        <OutlinedInput
                          id="destination"
                          type="text"
                          value={values.destination}
                          name="destination"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          placeholder="San Diego"
                          fullWidth
                          error={Boolean(
                            touched.destination && errors.destination
                          )}
                        />
                        {touched.destination && errors.destination && (
                          <FormHelperText error id="destination-helper-text">
                            {errors.destination}
                          </FormHelperText>
                        )}
                      </Stack>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      <Stack spacing={1}>
                        <InputLabel htmlFor="distance">Distance*</InputLabel>
                        <OutlinedInput
                          id="distance"
                          type="number"
                          value={values.distance}
                          name="distance"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          placeholder="2.500"
                          fullWidth
                          error={Boolean(touched.distance && errors.distance)}
                        />
                        {touched.distance && errors.distance && (
                          <FormHelperText error id="distance-helper-text">
                            {errors.distance}
                          </FormHelperText>
                        )}
                      </Stack>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      <Stack spacing={1}>
                        <InputLabel htmlFor="driver">Driver*</InputLabel>
                        <OutlinedInput
                          id="driver"
                          type="text"
                          value={values.driver}
                          name="driver"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          placeholder="John Doe"
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
          </MainCard>
        </Grid>
      </Grid>
    </>
  );
};

export default CreateTrip;
