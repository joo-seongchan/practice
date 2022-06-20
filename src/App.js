import { ClickEx } from "./5_Event/ClickEx";
import { Homework } from "./components/4_map/Homework";
import { ClickHomework } from "./components/5_Click/ClickHomework";
// import { Clone } from "./components/practice/Clone";
import { Grid } from "./components/practice/Grid";
import { Frontlanguage, griddb } from "./db/Data";
import { GlobalStyled } from "./style/GlobalStyled";

const App = () => {
  return (
    <>
      <GlobalStyled />
      {/* <Homework ftl={Frontlanguage} /> */}
      {/* <Clone /> */}
      {/* <Grid grid={griddb} /> */}
      <ClickEx />
      <ClickHomework />
    </>
  );
};

export default App;
