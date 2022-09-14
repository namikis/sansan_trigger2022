import { Link } from 'react-router-dom';

import headerImg from "../../assets/images/header.png";

type AppHeaderPropsType = {
  isLogin: Boolean
};

const AppHeader = ({isLogin}: AppHeaderPropsType) => {
  return (
  <header className="">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <Link to={"/"}>
        <img className='w-64' src={headerImg} alt="" />
      </Link>

      <nav className="md:ml-auto flex flex-wrap items-center justify-center">

        <Link to={"/store"}>
          <a className="mr-5 py-3 px-5 text-lg font-bold rounded-md bg-brown-dark text-gray-200 hover:bg-brown-base">
            本を預ける
          </a>
        </Link>
        <Link to={"hoge"}>
          <a className="mr-5 py-3 px-5 text-lg font-bold rounded-md bg-brown-dark text-gray-200 hover:bg-brown-base">
            {isLogin ? "ログアウト" : "ログイン / 登録"}
          </a>
        </Link>
        {isLogin
          ? <button className="inline-flex items-center bg-gray-200 border-0 w-10 h-10 focus:outline-none hover:bg-gray-300 rounded-full text-base mt-4 md:mt-0 text-white"></button>
          : null
        }
      </nav>
    </div>
  </header>
  )
}

export default AppHeader