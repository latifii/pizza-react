import { useNavigate, useRouteError } from "react-router-dom";
type RouteError = {
  data?: string;
  message?: string;
};
function Error() {
  const navigate = useNavigate();
  const error = useRouteError() as RouteError;
  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      <button
        className='"text-sm hover:underline"; text-blue-500 hover:text-blue-600'
        onClick={() => navigate(-1)}
      >
        &larr; Go back
      </button>
    </div>
  );
}

export default Error;
