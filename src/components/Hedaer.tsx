import { FC, useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "13ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const StyledToolbar = styled(Toolbar)({
  justifyContent: "space-between",
});

const StyledAppBar = styled(AppBar)({
  backgroundColor: "#1a1a1a",
  borderRadius: "0px 0px 19px 19px",
});

type SearchAppBarProps = {
  handleSearch: (location: string) => void;
};
const SearchAppBar: FC<SearchAppBarProps> = ({ handleSearch }) => {
  const [value, setValue] = useState("");

  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        <Typography variant="h6" noWrap component="div">
          Weather App
        </Typography>
        <Search>
          <SearchIconWrapper
            onClick={() => {
              if (value.trim() !== "") handleSearch(value);
            }}
          >
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            value={value}
            placeholder="City or Country Name..."
            inputProps={{ "aria-label": "search" }}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.code === "Enter" && value.trim() !== "") {
                handleSearch(value);
              }
            }}
          />
        </Search>
      </StyledToolbar>
    </StyledAppBar>
  );
};
export default SearchAppBar;
