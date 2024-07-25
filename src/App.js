import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import TableComponents from "./components/TableComponents";
import axios from "axios";
import LoadingButton from "@mui/lab/LoadingButton";
import BasicCard from "./components/BasicCard";
import Typography from "@mui/material/Typography";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  width: "60%",
  display: "flex",
  alignItems: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(1)})`,
  },
}));

export default function App() {
  const [searchValue, setSearchValue] = React.useState("");
  const [theading, setTheading] = React.useState(null);
  const [trows, setTrows] = React.useState([]);
  const [query, setQuery] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
    // handleButtonClick();
  };

  const handleButtonClick = () => {
    setLoading(true);
    setError(null);
    const requestBody = {
      question: searchValue,
    };

    axios
      .post("http://192.168.1.252:5000/generate_query", requestBody, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const responseData = response.data;
        console.log("Extracted query:", responseData);
        const { query, column_names, results } = responseData;
        setQuery(query);
        setTheading(column_names);
        setTrows(results);
      })
      .catch((error) => {
        console.error("Error fetching the API:", error);
        setError("Error fetching data. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Box sx={{ padding: "2rem" }}>
      <Typography
        sx={{
          justifyContent: "center",
          alignContent: "center",
          display: "flex",
          fontSize: "30px",
          fontWeight: "700",
          marginBottom: "0.5rem",
        }}
      >
        BYTEGENIE TEST
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "5rem",
          // background: "red",
          maxWidth: 1000,
          margin: "auto",
        }}
      >
        <Search sx={{ background: "#f1f1f1" }}>
          <StyledInputBase
            placeholder="Enter text to search"
            inputProps={{ "aria-label": "search" }}
            value={searchValue}
            onChange={handleInputChange}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                handleButtonClick();
              }
            }}
          />
        </Search>

        <LoadingButton
          onClick={handleButtonClick}
          loading={loading}
          variant="contained"
          sx={{ ml: 2 }}
        >
          Submit
        </LoadingButton>
      </Box>
      {error && (
        <Typography
          color="error"
          sx={{
            mt: "1rem",
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
          }}
        >
          {error}
        </Typography>
      )}

      <Box
        sx={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          paddingTop: "2rem",
          paddingBottom: "2rem",
        }}
      >
        {query && <BasicCard typo={query} />}
      </Box>
      <TableComponents header={theading} trows={trows} />
    </Box>
  );
}
