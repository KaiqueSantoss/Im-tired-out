import { GlobalStyle } from "./GlobaStyle";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <header>
      <h1>
         <Link to={'/'}>Router</Link>
         
         </h1>

      <ul>
        <li> <Link to={'/buy'}> Buy  </Link></li>
        <li> <Link to={'/about'}> About </Link></li>
        <li> <Link to={'/contact'}> Contact </Link></li>
      </ul>
        <GlobalStyle/>
        <Outlet/>
    </header>
  );
}

export default App;
