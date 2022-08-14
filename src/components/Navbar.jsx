import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import ClearIcon from "@mui/icons-material/Clear";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "5px",
  backgroundColor: "#232323",
  "&:hover": {
    backgroundColor: "#3a3a3a",
  },
  width: "100%",
  [theme.breakpoints.up("sm")]: {
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
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Navbar = (props) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        marginBottom: "20px",
      }}
    >
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#efc944",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            marginLeft: "5vw",
            marginRight: "5vw",
          }}
        >
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              display: { xs: "none", sm: "flex", color: "#232323" },
              alignItems: "center",
            }}
          >
            <MovieFilterIcon fontSize="large" />
            &nbsp; Movie Database
          </Typography>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              id="search-value"
              value={props.value}
              onChange={(event) => {
                props.setSearchInput(event.target.value);
              }}
              placeholder="Search title..."
              inputProps={{ "aria-label": "search" }}
            />
            <Button className="materialBtn" onClick={props.clearSearch}>
              <ClearIcon sx={{ color: "white" }} />
            </Button>
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
