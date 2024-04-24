const { useRouteError } = "react-router-dom";
import Alert from "@mui/material/Alert";
import ButtonComponents from "../components/Elements/Button";
import LayoutsDiv from "../components/layouts/AuthLayouts";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  const error = useRouteError;
  return (
    <LayoutsDiv>
      <div className="grid gap-12">
      <Alert variant="filled" severity="error">
       404 page not found
      </Alert>
        <ButtonComponents name="Back to page" variant="contained" >
           <Link to="/"/>
        </ButtonComponents> 
      </div>
  </LayoutsDiv>
  );
};

export default ErrorPage
