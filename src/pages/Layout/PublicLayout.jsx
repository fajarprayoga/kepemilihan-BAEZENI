// import { CircularProgress } from "@mui/material";
// import { StyledEngineProvider } from "@mui/material/styles";
import { useEffect, useState } from "react";

import { Outlet } from "react-router-dom";

function PublicLayout() {
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(false);
    }, 300);
  }, []);

  const html = (
    <div>
      {isLoaded ? 'Loading' : <Outlet />}
    </div>
  );
  return <div>{html}</div>;
}

export default PublicLayout;
