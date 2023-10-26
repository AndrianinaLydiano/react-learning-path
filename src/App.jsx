import { useState } from "react";
import "./App.css";
import { Button, TextField } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#E3D026",
      light: "#E9DB5D",
      dark: "#A29415",
      contrastText: "#000000",
    },
  },
});

function App() {
  const listOfFruits = ["Banana", "Apple", "Orange", "Mango", "Pineapple"];
  const [fruits, updateFruits] = useState(listOfFruits);
  const [counter, setCounter] = useState(0);

  const filterFruits = (value) => {
    const res = listOfFruits.filter((fruit) =>
      fruit.toUpperCase().includes(value.toUpperCase())
    );
    updateFruits(res);
  };

  return (
    <ThemeProvider theme={theme}>
      <h1>Feature search filter in React</h1>
      <TextField
        id="outlined-basic"
        label="Search"
        color="primary"
        variant="outlined"
        focused
        style={{ color: "white" }}
        onChange={($event) => filterFruits($event.target.value)}
      />
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index} onClick={() => setCounter(counter + 1)}>
            {fruit}
          </li>
        ))}
      </ul>
      <Button color="primary" variant="outlined" onClick={() => setCounter(0)}>
        Number of fruits clicked : {counter}
      </Button>
    </ThemeProvider>
  );
}

export default App;
