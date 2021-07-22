import { createTheme, ThemeProvider } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import "./Pagination.css";

const darkTheme = createTheme({
  palette: {
    type: "dark",
  },
});

const CustomPagination = ({ setPage, numOfPages = 10 }) => {
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="pagination">
        <Pagination
          count={numOfPages}
          onChange={(e) => handlePageChange(e.target.textContent)}
          hideNextButton
          color="primary"
        />
      </div>
    </ThemeProvider>
  );
};

export default CustomPagination;
