import Button from "@mui/material/Button";
import { GoogleOutlined, AppleOutlined } from "@ant-design/icons";

function OtherLogin() {
  return (
    <div style={{ display: "grid", gap: "10px" }}>
      <Button
        variant="outlined"
        color="primary"
        fullWidth={true}
        onClick={() => console.log("Google Login")}
      >
        <GoogleOutlined />
        &nbsp;Log in with Google
      </Button>
      <Button
        variant="outlined"
        color="primary"
        fullWidth={true}
        onClick={() => console.log("Apple Login")}
      >
        <AppleOutlined />
        &nbsp;Log In with Apple
      </Button>
    </div>
  );
}

export default OtherLogin;
