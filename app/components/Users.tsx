"use client"
import UsersTable from "./UsersTable";
import { useUsers } from "../contexts/UsersContext";

const Users = () => {
  const { currentPage, totalPages, setCurrentPage } = useUsers();

  const moveNext = () => setCurrentPage((prev: number) => prev + 1);
  const movePrevious = () => setCurrentPage((prev: number) => prev - 1);

  return (
    <div className="flex flex-wrap justify-center">
      <h1 className="text-lg font-semibold mb-4">Distelsa Users</h1>
      <UsersTable />
      <div className="flex flex-col items-center my-5">
        <div className="text-gray-600">
          Page {currentPage} of {totalPages}
        </div>
        <div className="flex justify-center mt-4">
        <button
          className="bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded"
          onClick={movePrevious}
          disabled={currentPage === 1}
          
        >
          Previous
        </button>
        <button
          className="bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={moveNext}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
      </div>
    </div>
  )
}

export default Users;