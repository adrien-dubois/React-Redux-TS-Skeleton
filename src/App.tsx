import { Navigate, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Home from "./pages/Home";
import CustomSwitch from "./utils/CustomSwitch";


function App() {
  return (
    <>
      <GlobalStyles/>
      <CustomSwitch>
        <Route index path="/" element={<Home/>}/>
        <Route path="*" element={<Navigate to="/" replace/>} />
      </CustomSwitch>
    </>
  );
}

export default App;
