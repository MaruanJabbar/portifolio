import { DefaultTemplate } from "../../components/defaultTemplate";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <DefaultTemplate>
          <h1>404</h1>
          <Link to="/">Retornar para home</Link>
    </DefaultTemplate>
  );
};
