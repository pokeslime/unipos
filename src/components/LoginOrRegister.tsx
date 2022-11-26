import { BrowserRouter, Link } from 'react-router-dom';

export const LoginOrRegister = () => {
    return (
        <BrowserRouter>
          <h1>Unipos</h1>
          <ul>
            <li>
                <Link to="/login">ログイン</Link>
            </li>
            <li>
                <Link to="/register">新規登録</Link>
            </li>
          </ul>
        </BrowserRouter>
    );
};