import { Link } from 'react-router-dom';

const RouterApp = () => {
  return (
    <div>
      <h1>Hello from the main page of the app!</h1>
      <p>Here are some examples of links to other pages</p>
      <nav>
        <ul>
          <li>
            <Link to="profile/zekumoru">Zekumoru</Link>
          </li>
          <li>
            <Link to="profile/yuzuki">Yuzuki</Link>
          </li>
        </ul>
      </nav>
      <Link to="/">Go back to main page</Link>
    </div>
  );
};

export default RouterApp;
