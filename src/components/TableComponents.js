import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Typography } from "@mui/material";

export default function TableComponents({ header, trows }) {
  const [expandedRows, setExpandedRows] = React.useState({});

  const toggleExpand = (rowIndex, columnIndex) => {
    const key = `${rowIndex}-${columnIndex}`;
    setExpandedRows((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: "60%", overflowX: "auto" }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {header &&
                  header.map((column) => (
                    <TableCell
                      sx={{
                        fontSize: 16,
                        fontWeight: "bold",
                        // borderRight: "1px solid rgba(224, 224, 224, 1)",
                      }}
                      key={column}
                    >
                      <thead>{column.replace(/_/g, " ").toUpperCase()}</thead>
                    </TableCell>
                  ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {trows &&
                trows.map((row, rowIndex) => {
                  return (
                    <TableRow
                      sx={{
                        height: "2rem",
                      }}
                      role="checkbox"
                      key={rowIndex}
                    >
                      {row.map((column, columnIndex) => {
                        column =
                          typeof column === "string" ? column : String(column);

                        let words = column.split(" ");
                        let truncatedText = words.slice(0, 20).join(" ");
                        let remainingText = words.slice(20).join(" ");
                        let isExpanded =
                          expandedRows[`${rowIndex}-${columnIndex}`];

                        return (
                          <TableCell
                            key={columnIndex}
                            sx={{
                              height: "1rem",
                              width: "20rem",
                              padding: "0.5rem",
                              whiteSpace: "normal",
                              wordWrap: "break-word",
                              wordBreak: "break-all",
                              verticalAlign: "top",
                              borderRight: "1px solid #f1f1f1",
                            }}
                          >
                            {isExpanded ? column : truncatedText}
                            {remainingText && (
                              <span>
                                {" "}
                                <a
                                  href="#"
                                  onClick={() =>
                                    toggleExpand(rowIndex, columnIndex)
                                  }
                                >
                                  {isExpanded ? "Hide" : "See more"}
                                </a>
                              </span>
                            )}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      {header && (!trows || trows.length === 0) && (
        <Typography
          sx={{
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            mt: "3rem",
          }}
          color="error"
        >
          No relevant data found in the database.
        </Typography>
      )}
    </>
  );
}
