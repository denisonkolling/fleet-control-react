import {
  Button,
  Grid,
  TextField,
  Box,
  InputLabel,
  MenuItem,
  FormControl,
} from "@mui/material";
import MainCard from "../../components/MainCard";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";
import {
  errorNotification,
  successNotification,
} from "../../services/notification";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Select from "@mui/material/Select";
import { saveTyre } from "../../api/tyre";

const CreateTyre = () => {
  const [formData, setFormData] = useState({
    serial: "",
    manufacturer: "",
    model: "",
    size: "",
    position: "",
    vehicle: "",
    purchaseDate: null,
  });

  const [manufacturer, setManufacturer] = useState("");

  const handleChangeSelect = (e) => {
    setManufacturer(e.target.value);
    setFormData((prevData) => ({
      ...prevData,
      manufacturer: e.target.value,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await saveTyre(formData);
      successNotification("Tyre information saved successfully.");
      clearForm();
    } catch (err) {
      errorNotification("Failed to save Tyre information.");
      console.log(err);
    }
  };

  const handlePurchaseDateChange = (date) => {
    setFormData((prevData) => ({
      ...prevData,
      purchaseDate: date,
    }));
  };

  const clearForm = () => {
    setFormData({
      serial: "",
      manufacturer: "",
      model: "",
      size: "",
      position: "",
      vehicle: "",
      purchaseDate: null,
    });
    setManufacturer('');
  };

  return (
    <>
      <Grid container rowSpacing={4.5} columnSpacing={2.75} sx={{ p: 0 }}>
        <Grid item xs={12} lg={6}>
          <MainCard title="Information" codeHighlight>
            <Box sx={{ p: 3, pb: 0 }}>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2} sx={{ py: 3, pb: 0, pt: 0 }}>
                  <Grid item xs={12} lg={6}>
                    <TextField
                      fullWidth
                      name="serial"
                      label="Serial Number"
                      value={formData.serial}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                      <InputLabel>Manufacturer</InputLabel>
                      <Select
                        value={manufacturer}
                        label="Manufacturer"
                        onChange={handleChangeSelect}
                      >
                        <MenuItem value={"Pirelli"}>Pirelli</MenuItem>
                        <MenuItem value={"Michelin"}>Michelin</MenuItem>
                        <MenuItem value={"Bridgestone"}>Bridgestone</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        fullWidth
                        label="Purchase Date"
                        inputVariant="outlined"
                        value={formData.purchaseDate}
                        onChange={handlePurchaseDateChange}
                      />
                    </LocalizationProvider>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      name="size"
                      label="Size"
                      type="text"
                      value={formData.size}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      name="model"
                      label="Model"
                      type="text"
                      value={formData.model}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      name="position"
                      label="Position"
                      type="text"
                      value={formData.position}
                      onChange={handleChange}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      name="vehicle"
                      label="Vehicle"
                      type="text"
                      value={formData.vehicle}
                      onChange={handleChange}
                    />
                  </Grid>

                  <Grid container justifyContent="flex-end" item xs={12}>
                    <Button
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
                      onClick={clearForm}
                      sx={{ m: 2 }}
                    >
                      Cancel
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </MainCard>
        </Grid>

        <Grid item xs={12} lg={6}>
          <MainCard title="Wear Condition">
            <Box sx={{ p: 3, pb: 0 }}>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2} sx={{ py: 3, pb: 0, pt: 0 }}>
                  <Grid item xs={12} lg={6}>
                    <TextField
                      fullWidth
                      name="firstName"
                      label="Serial Number"
                    />
                  </Grid>
                </Grid>
              </form>
            </Box>
          </MainCard>

          <Grid item xs={12} lg={12} sx={{ my: 2 }}>
            <MainCard title="Position History">
              <Box sx={{ p: 3, pb: 0 }}>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2} sx={{ py: 3, pb: 0, pt: 0 }}>
                    <Grid item xs={12} lg={6}>
                      <TextField
                        fullWidth
                        name="firstName"
                        label="Serial Number"
                      />
                    </Grid>
                  </Grid>
                </form>
              </Box>
            </MainCard>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default CreateTyre;
