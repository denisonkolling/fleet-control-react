import PropTypes from "prop-types";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import NumberFormat from "react-number-format";
import Dot from "./Dot";

function createData(plate, name, city, speed, status, distance) {
  return { plate, name, speed, city, status, distance };
}

const rows = [
  createData("ABC-1234", "Scania R450", "São Paulo", 40, 2, 40570),
  createData("DEF-5678", "Volvo FH16", "Recife", 300, 0, 180139),
  createData("GHI-9012", "Mercedes-Benz Actros", "Belo horizonte", 355, 1, 90989),
  createData("JKL-3456", "MAN TGX", "Curitiba", 50, 1, 10239),
  createData("MNO-7890", "Iveco Stralis", "Porto Alegre", 100, 1, 83348),
  createData("PQRS-2468", "Renault T", "Goiânia", 99, 0, 410780),
  createData("TUV-1357", "DAF XF", "Cuiabá", 125, 2, 70999),
  createData("WXYZ-8023", "Ford Cargo", "CampoGrande", 89, 2, 10570),
  createData("OPQ-4682", "Scania S500", "Rio de Janeiro", 185, 1, 98063),
  createData("LMN-9753", "Volvo FMX", "Joinville", 100, 0, 14001),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "plate",
    align: "left",
    disablePadding: false,
    label: "Plate",
  },
  {
    id: "name",
    align: "left",
    disablePadding: true,
    label: "Vehicle Model",
  },
  {
    id: "city",
    align: "left",
    disablePadding: true,
    label: "City",
  },
  {
    id: "speed",
    align: "right",
    disablePadding: false,
    label: "Speed",
  },
  {
    id: "status",
    align: "left",
    disablePadding: false,
    label: "Status",
  },
  {
    id: "distance",
    align: "right",
    disablePadding: false,
    label: "Distance",
  },
];

function OrderTableHead({ order, orderBy }) {
  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.align}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

OrderTableHead.propTypes = {
  order: PropTypes.string,
  orderBy: PropTypes.string,
};

// ==============================|| ORDER TABLE - STATUS ||============================== //

const OrderStatus = ({ status }) => {
  let color;
  let title;

  switch (status) {
    case 0:
      color = "warning";
      title = "On";
      break;
    case 1:
      color = "success";
      title = "Driving";
      break;
    case 2:
      color = "error";
      title = "Off";
      break;
    default:
      color = "primary";
      title = "None";
  }

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Dot color={color} />
      <Typography>{title}</Typography>
    </Stack>
  );
};

OrderStatus.propTypes = {
  status: PropTypes.number,
};

export default function VehiclesPositionTable() {
  const [order] = useState("desc");
  const [orderBy] = useState("speed");
  const [selected] = useState([]);

  const isSelected = (plate) => selected.indexOf(plate) !== -1;

  return (
    <Box>
      <TableContainer
        sx={{
          width: "100%",
          overflowX: "auto",
          position: "relative",
          display: "block",
          maxWidth: "100%",
          "& td, & th": { whiteSpace: "nowrap" },
        }}
      >
        <Table
          aria-labelledby="tableTitle"
          sx={{
            "& .MuiTableCell-root:first-of-type": {
              pl: 2,
            },
            "& .MuiTableCell-root:last-child": {
              pr: 3,
            },
          }}
        >
          <OrderTableHead order={order} orderBy={orderBy} />
          <TableBody>
            {stableSort(rows, getComparator(order, orderBy)).map(
              (row, index) => {
                const isItemSelected = isSelected(row.plate);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    role="checkbox"
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.plate}
                    selected={isItemSelected}
                  >
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      align="left"
                    >
                      <Link color="secondary" component={RouterLink} to="">
                        {row.plate}
                      </Link>
                    </TableCell>
                    <TableCell align="left">{row.name}</TableCell>
                    <TableCell align="left">{row.city}</TableCell>
                    <TableCell align="right">{row.speed} km/h</TableCell>
                    <TableCell align="left">
                      <OrderStatus status={row.status} />
                    </TableCell>
                    <TableCell align="right">
                      <NumberFormat
                        value={row.distance}
                        displayType="text"
                        thousandSeparator
                      />
                    </TableCell>
                  </TableRow>
                );
              }
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
