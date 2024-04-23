const { useRouteError } = "react-router-dom";
import Alert from "@mui/material/Alert";

const ErrorPage = () => {
  const error = useRouteError;
  return (
    <div 
    style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: 'black'}}>
      <Alert variant="filled" severity="error">
       404 page not found
      </Alert>
    </div>
  );
};

export default ErrorPage
