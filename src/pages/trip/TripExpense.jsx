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

const TripExpense = () => {
  return (
    <>
      <Grid
        container
        rowSpacing={4.5}
        columnSpacing={2.75}
        sx={{ p: 2, alignItems: "center", justifyContent: "center" }}
      >
        <Grid item xs={12} md={12} lg={8}>
          <MainCard title="New Trip Expense">
            <Formik
              initialValues={{
                date: "",
                tripNumber: "",
                description: "",
                category: "",
                value: "",
                submit: null,
              }}
              validationSchema={Yup.object().shape({
                date: Yup.date().required("Please provide the expense date"),
                tripNumber: Yup.number().required("Please specify the trip number"),
                description: Yup.string().required("Please specify the expense description"),
                value: Yup.number().required("Please specify the value"),
                category: Yup.string().required("Please enter the expense category"),
              })}
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                try {
                  await saveTrip(values);
                  successNotification("Trip expense saved successfully.");
                  setSubmitting(false);
                  resetForm();
                } catch (err) {
                  errorNotification("Failed to save trip expense information.");
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
                        <InputLabel htmlFor="date">Date*</InputLabel>
                        <OutlinedInput
                          id="date"
                          type="text"
                          value={values.date}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          placeholder="28/12/2019"
                          fullWidth
                          error={Boolean(touched.date && errors.date)}
                        />
                        {touched.date && errors.date && (
                          <FormHelperText error id="date-helper-text">
                            {errors.date}
                          </FormHelperText>
                        )}
                      </Stack>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      <Stack spacing={1}>
                        <InputLabel htmlFor="tripNumber">Trip Number*</InputLabel>
                        <OutlinedInput
                          id="tripNumber"
                          type="number"
                          value={values.tripNumber}
                          name="tripNumber"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          placeholder="2576"
                          ance
                          fullWidth
                          error={Boolean(touched.tripNumber && errors.tripNumber)}
                        />
                        {touched.tripNumber && errors.tripNumber && (
                          <FormHelperText error id="tripNumbero-helper-text">
                            {errors.tripNumber}
                          </FormHelperText>
                        )}
                      </Stack>
                    </Grid>

                    <Grid item xs={12} lg={6}>
                      <Stack spacing={1}>
                        <InputLabel htmlFor="description">
                          Description*
                        </InputLabel>
                        <OutlinedInput
                          id="description"
                          type="text"
                          value={values.description}
                          name="description"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          placeholder="Tyre Change"
                          fullWidth
                          error={Boolean(
                            touched.description && errors.description
                          )}
                        />
                        {touched.description && errors.description && (
                          <FormHelperText error id="description-helper-text">
                            {errors.description}
                          </FormHelperText>
                        )}
                      </Stack>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      <Stack spacing={1}>
                        <InputLabel htmlFor="category">Category*</InputLabel>
                        <OutlinedInput
                          id="category"
                          type="text"
                          value={values.category}
                          name="category"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          placeholder="Tyres"
                          fullWidth
                          error={Boolean(touched.category && errors.category)}
                        />
                        {touched.category && errors.category && (
                          <FormHelperText error id="category-helper-text">
                            {errors.category}
                          </FormHelperText>
                        )}
                      </Stack>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      <Stack spacing={1}>
                        <InputLabel htmlFor="value">Value*</InputLabel>
                        <OutlinedInput
                          id="value"
                          type="number"
                          value={values.value}
                          name="value"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          placeholder="$45.00"
                          fullWidth
                          error={Boolean(touched.value && errors.value)}
                        />
                        {touched.value && errors.value && (
                          <FormHelperText error id="value-helper-text">
                            {errors.value}
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

export default TripExpense;
