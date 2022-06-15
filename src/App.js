import { Menu } from "./components/3_props/Menu";
import { Db } from "./db/Db";

const App = () => {
  return (
    <>
      <Menu car={Db} />
    </>
  );
};

export default App;
