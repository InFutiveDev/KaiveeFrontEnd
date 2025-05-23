import { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal, ModalBody } from "reactstrap";
import { DELETE_USER_FAMILY_MEMBER, GET_USER_FAMILY_MEMBERS } from "redux/actions/member";

const DeleteMembers = ({ itemToDelete, setItemToDelete }) => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)

    const deleteItem = async () => {
        setLoading(true)
        let res = await dispatch(DELETE_USER_FAMILY_MEMBER(itemToDelete?._id))
        if (res?.success) {
            setItemToDelete(null)
            dispatch(GET_USER_FAMILY_MEMBERS());
        }
        setLoading(false)
    }


    return (
        <>
            <Modal
                aria-labelledby="contained-modal-title-vcenter"
                centered
                size="sm"
                isOpen={itemToDelete !== null}
                toggle={() => setItemToDelete(null)}
            >
                <ModalBody className="flex justify-center">
                    <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                        {/* Modal content */}
                        <div className="relative p-4 text-center bg-white rounded-lg">
                            <button
                                onClick={() => setItemToDelete(null)}
                                type="button"
                                className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center "
                                data-modal-toggle="deleteModal"
                            >
                                <svg
                                    aria-hidden="true"
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                            <svg
                                className="text-[#8abc59] w-11 h-11 mb-3.5 mx-auto"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <p className="mb-4 text-gray-500 ">
                                Are you sure you want to delete this Member <span className="text-black font-[500]">({itemToDelete?.fullName})</span>?
                            </p>
                            <div className="flex justify-center items-center space-x-4">
                                <button
                                    onClick={() => setItemToDelete(null)}
                                    type="button"
                                    className="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 "
                                >
                                    No, cancel
                                </button>
                                <button
                                    disabled={loading}
                                    onClick={deleteItem}
                                    className="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
                                >
                                    {loading ? 'Progressing...' : "Yes, I'm sure"}

                                </button>
                            </div>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        </>
    );
};

export default DeleteMembers;
