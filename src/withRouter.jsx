import { useParams, useLocation } from "react-router";

const withRouter = (WrappedComponent) => {
  return (props) => {
    const params = useParams(); // Extract route params
    const location = useLocation(); // Extract location (for query params)

    return (
      <WrappedComponent
        {...props}
        params={params}
        location={location}
      />
    );
  };
};

export default withRouter;