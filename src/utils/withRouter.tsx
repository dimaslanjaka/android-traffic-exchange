import { useLocation, useNavigate, useParams } from 'react-router-dom';

/**
 * react router wrapper
 * @param Component class component or function
 * @link https://stackoverflow.com/a/71817828/6404439
 */
function withRouter(Component: any) {
  function ComponentWithRouterProp(props: any) {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}
export default withRouter;
