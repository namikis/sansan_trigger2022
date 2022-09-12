import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type HeaderPropsType = {
  isLogin: Boolean
};

const Header = ({isLogin}: HeaderPropsType) => {
  return (
  <header className="text-while body-font bg-yellow-400">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span className="ml-3 text-xl">Bookean</span>
      </a>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        {/* <form onSubmit={handlerOnSubmitSearch} className="text-center"> */}
        <form className="mr-5 text-center bg-white rounded">
          <input
            type="search"
            name="query"
            className="rounded py-2 px-4 text-left"
            placeholder={"本を検索"}
          />
          <button><FontAwesomeIcon icon={faMagnifyingGlass} className="px-2" /></button>
        </form>
        <a className="mr-5 hover:text-gray-900">本を預ける</a>
        <a className="mr-5 hover:text-gray-900">{isLogin ? "ログアウト" : "ログイン"}</a>
        {isLogin
          ? <button className="inline-flex items-center bg-gray-200 border-0 w-10 h-10 focus:outline-none hover:bg-gray-300 rounded-full text-base mt-4 md:mt-0 text-white"></button>
          : <button className="inline-flex items-center bg-red-500 border-0 py-1 px-3 focus:outline-none hover:bg-red-600 rounded text-base mt-4 md:mt-0 text-white">会員登録
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
        }
      </nav>
    </div>
  </header>
  )
}

export default Header