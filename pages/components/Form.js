import ErrorMsg from './ErrorMsg'
const Form = ({ title }) => {
    let submitting = true

    return (
        <>
            <p className=" mb-2">{title}</p>
            {
                submitting && <p className="text-green-500  mb-2">Success</p>
            }
            <form className="max-w-sm">
                <div className="flex items-center border rounded-md border-gray-200 p-1 focus-within:border-blue-500 focus-within:ring-blue-200 focus-within:ring-4">
                    <input
                        className={`w-full bg-transparent focus:outline-none appearance-none border-none  text-gray-700 mr-3 py-1 px-2 leading-tight ${submitting ? 'opacity-50' : ''}`}
                        type="text"
                        placeholder="Your Email"
                        aria-label="Full name"
                        disabled={submitting}
                        />
                    <button
                        className={`flex-shrink-0 bg-red-500  border-red-500  text-sm border-4 text-white py-1 px-2 rounded ${submitting ? 'opacity-50 cursor-not-allowed' : 'hover:border-red-600 hover:bg-red-600'}`}
                        type="submit"
                        disabled={submitting}
                    >
                        Sign Up
            </button>
                </div>
                <ErrorMsg msg="Please enter a valid email" />
            </form>
        </>

    )
}

export default Form
