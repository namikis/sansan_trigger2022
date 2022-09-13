import React from 'react'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const BaseSearch = () => {
  return (
    <form className="mr-5 text-center bg-gray-200 rounded flex justify-between">
      <div>
        <input
            type="search"
            name="query"
            className="rounded py-2 px-4 text-left bg-gray-200 w-full"
            placeholder={"本を検索"}
          />
      </div>
        <button>
          <FontAwesomeIcon icon={faMagnifyingGlass} className="px-4" />
        </button>
    </form>
  )
}

export default BaseSearch
