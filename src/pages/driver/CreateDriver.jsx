import MainCard from "../../components/MainCard";
import { useState } from "react";
import { TbBrandPaypal } from "react-icons/tb";
import { BsBank } from "react-icons/bs";
import {
  TextField,
  Button,
  Grid,
  Stack,
  Box,
  CardContent,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemText,
  Divider,
  Switch,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {
  UserAddOutlined,
  CreditCardOutlined,
  LockOutlined,
  SettingOutlined,
  MailOutlined,
  FileDoneOutlined,
  TranslationOutlined,
} from "@ant-design/icons";
import img from "../../assets/images/truck-driver.jpg";
import { saveDriver } from "../../api/driver";
import {
  errorNotification,
  successNotification,
} from "../../services/notification";

const CreateDriver = () => {
  const [slot, setSlot] = useState("null");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    birthday: null,
    nationality: "",
    licenseId: "",
    licenseClass: "",
    licenseExpiryDate: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      await saveDriver(formData);
      successNotification("Driver information saved successfully.");
      clearForm();
    } catch (err) {
      errorNotification("Failed to save driver information.");
      console.log(err);
    }
  };

  const handleBirthdayDateChange = (date) => {
    setFormData((prevData) => ({
      ...prevData,
      birthday: date,
    }));
  };

  const handleExpiryLicenseDateChange = (date) => {
    setFormData((prevData) => ({
      ...prevData,
      expiryDate: date,
    }));
  };

  const clearForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      birthday: null,
      nationality: "",
      licenseId: "",
      licenseClass: "",
      licenseExpiryDate: null,
    });
  };

  return (
    <>
      <Grid container rowSpacing={4.5} columnSpacing={2.75} sx={{ p: 0 }}>
        {/* Driver Card */}
        <Grid item xs={12} md={5} lg={2}>
          <MainCard sx={{ mt: 0 }} content={false}>
            <Box sx={{ p: 0, pb: 0 }}>
              <Stack spacing={2}>
                <CardContent>
                  <Avatar
                    sx={{
                      width: 120,
                      height: 120,
                      margin: "auto",
                      marginBottom: 2,
                    }}
                    alt="User Photo"
                    src={img}
                  />
                  <Typography
                    variant="h4"
                    component="div"
                    sx={{ textAlign: "center", marginBottom: 1 }}
                  >
                    John Doe
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ textAlign: "center", marginBottom: 2 }}
                  >
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

        {/* Driver Form */}
        <Grid item xs={12} md={7} lg={10}>
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
                          value={formData.birthday}
                          onChange={handleBirthdayDateChange}
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
                        label="License Class"
                        type="text"
                        value={formData.licenseClass}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                          fullWidth
                          label="License Expiry Date"
                          inputVariant="outlined"
                          value={formData.licenseExpiryDate}
                          onChange={handleExpiryLicenseDateChange}
                        />
                      </LocalizationProvider>
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
            </Typography>
          </MainCard>
        </Grid>

        {/* Paymet Card */}
        <Grid item xs={12} md={7} lg={4}>
          <MainCard title="Payment">
            <Typography variant="body2" gutterBottom>
              <Box sx={{ p: 1 }}>
                <Grid item>
                  {/* Payment Type Buttons */}
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={0}
                    sx={{ my: 1 }}
                  >
                    <Button
                      sx={{ m: 1 }}
                      size="medium"
                      onClick={() => setSlot("card")}
                      color={slot === "card" ? "primary" : "secondary"}
                      variant={slot === "card" ? "outlined" : "text"}
                    >
                      <CreditCardOutlined />
                      &nbsp;Card
                    </Button>
                    <Button
                      sx={{ m: 1 }}
                      size="medium"
                      onClick={() => setSlot("paypal")}
                      color={slot === "paypal" ? "primary" : "secondary"}
                      variant={slot === "paypal" ? "outlined" : "text"}
                    >
                      <TbBrandPaypal />
                      &nbsp;Paypal
                    </Button>
                    <Button
                      sx={{ m: 1 }}
                      size="medium"
                      onClick={() => setSlot("bank")}
                      color={slot === "bank" ? "primary" : "secondary"}
                      variant={slot === "bank" ? "outlined" : "text"}
                    >
                      <BsBank />
                      &nbsp;Bank
                    </Button>
                  </Stack>
                </Grid>
              </Box>

              <Box sx={{ px: 2, pb: 0 }}>
                {/* Credit Card Form */}
                {slot === "card" ? (
                  <>
                    <form onSubmit={handleSubmit}>
                      <Grid container spacing={3} sx={{ py: 0, pb: 0, pt: 0 }}>
                        <Grid item xs={12} sm={12} lg={12}>
                          <TextField
                            fullWidth
                            name="cardholder"
                            label="Card Holder Name"
                            // value={formData.firstName}
                            // onChange={handleChange}
                          />
                        </Grid>
                        <Grid item xs={12} sm={12} lg={12}>
                          <TextField
                            fullWidth
                            name="cardnumber"
                            label="Card Number"
                            // value={formData.firstName}
                            // onChange={handleChange}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} lg={6}>
                          <TextField
                            fullWidth
                            name="expiry"
                            label="Expiry Date"
                            // value={formData.firstName}
                            // onChange={handleChange}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} lg={6}>
                          <TextField
                            fullWidth
                            name="cvv"
                            label="CVV"
                            // value={formData.firstName}
                            // onChange={handleChange}
                          />
                        </Grid>
                      </Grid>
                    </form>
                  </>
                ) : null}
                {/* Paypal Form */}
                {slot === "paypal" ? (
                  <>
                    <form onSubmit={handleSubmit}>
                      <Grid container spacing={3} sx={{ py: 0, pb: 0, pt: 0 }}>
                        <Grid item xs={12} sm={12} lg={12}>
                          <TextField
                            fullWidth
                            name="email"
                            label="Email Address"
                            // value={formData.firstName}
                            // onChange={handleChange}
                          />
                        </Grid>
                      </Grid>
                    </form>
                  </>
                ) : null}

                {/* Bank Account Form */}
                {slot === "bank" ? (
                  <>
                    <form onSubmit={handleSubmit}>
                      <Grid container spacing={3} sx={{ py: 0, pb: 0, pt: 0 }}>
                        <Grid item xs={12} sm={12} lg={12}>
                          <TextField
                            fullWidth
                            name="bank"
                            label="Bank"
                            // value={formData.firstName}
                            // onChange={handleChange}
                          />
                        </Grid>
                        <Grid item xs={12} sm={12} lg={12}>
                          <TextField
                            fullWidth
                            name="sortCode"
                            label="Sort Code"
                            // value={formData.firstName}
                            // onChange={handleChange}
                          />
                        </Grid>

                        <Grid item xs={12} sm={12} lg={12}>
                          <TextField
                            fullWidth
                            name="accountNumber"
                            label="Account Number"
                            // value={formData.firstName}
                            // onChange={handleChange}
                          />
                        </Grid>
                      </Grid>
                    </form>
                  </>
                ) : null}

                <Grid
                  container
                  justifyContent="flex-end"
                  xs={12}
                  sx={{ mt: 2 }}
                >
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
                    type="submit"
                    sx={{ m: 2 }}
                  >
                    Cancel
                  </Button>
                </Grid>
              </Box>
            </Typography>
          </MainCard>
        </Grid>

        {/* Password Card */}
        <Grid item xs={12} md={7} lg={4}>
          <MainCard title="Password">
            <Typography variant="body2" gutterBottom>
              <Box sx={{ p: 1 }}>
                <Grid item>
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={0}
                    sx={{ my: 1 }}
                  >
                    <form onSubmit={handleSubmit}>
                      <Grid container spacing={3} sx={{ py: 0, pb: 0, pt: 0 }}>
                        <Grid item xs={12} sm={12} lg={12}>
                          <TextField
                            fullWidth
                            name="carholder"
                            label="Old Password"
                            // value={formData.firstName}
                            // onChange={handleChange}
                          />
                        </Grid>
                        <Grid item xs={12} sm={12} lg={12}>
                          <TextField
                            fullWidth
                            name="cardnumber"
                            label="New Password"
                            // value={formData.firstName}
                            // onChange={handleChange}
                          />
                        </Grid>
                        <Grid item xs={12} sm={12} lg={12}>
                          <TextField
                            fullWidth
                            name="expiry"
                            label="Confirm Password"
                            // value={formData.firstName}
                            // onChange={handleChange}
                          />
                        </Grid>
                      </Grid>
                    </form>
                  </Stack>
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
              </Box>
            </Typography>
          </MainCard>
        </Grid>

        <Grid item xs={12} md={7} lg={4}>
          <MainCard title="Settings">
            <Typography variant="body2" gutterBottom>
              <Box>
                <Grid item>
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={0}
                    sx={{ my: 1 }}
                  >
                    <Grid item xs={12} md={12} lg={12}>
                      <List>
                        <ListItem>
                          <FileDoneOutlined
                            style={{
                              fontSize: "24px",
                              padding: "6px",
                              color: "#0A59DA",
                            }}
                          />
                          <ListItemText
                            sx={{ mt: 0 }}
                            primary="Delivery Order Confirmation"
                            secondary="You will be notified when delivery orders are done"
                          />
                          <Switch />
                        </ListItem>
                        <Divider />
                        <ListItem>
                          <MailOutlined
                            style={{
                              fontSize: "24px",
                              padding: "6px",
                              color: "#0A59DA",
                            }}
                          />
                          <ListItemText
                            primary="Email Notification"
                            secondary="Turn on email notification to get updates"
                          />
                          <Switch />
                        </ListItem>
                        <Divider />
                        <ListItem>
                          <MailOutlined
                            style={{
                              fontSize: "24px",
                              padding: "6px",
                              color: "#0A59DA",
                            }}
                          />
                          <ListItemText
                            primary="Text Message Notification"
                            secondary="Turn on SMS notification to get updates"
                          />
                          <Switch />
                        </ListItem>
                        <Divider />
                        <ListItem>
                          <TranslationOutlined
                            style={{
                              fontSize: "24px",
                              padding: "6px",
                              color: "#0A59DA",
                            }}
                          />
                          <ListItemText
                            primary="Language Change"
                            secondary="Translate messages to the driver language"
                          />
                          <Switch />
                        </ListItem>
                      </List>
                    </Grid>
                  </Stack>
                </Grid>
              </Box>
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
                  //   type="submit"
                  sx={{ m: 2 }}
                >
                  Cancel
                </Button>
              </Grid>
            </Typography>
          </MainCard>
        </Grid>
      </Grid>
    </>
  );
};

export default CreateDriver;
