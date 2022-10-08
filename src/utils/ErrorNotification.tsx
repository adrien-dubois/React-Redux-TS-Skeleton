import { useSelector } from 'react-redux';


const ErrorNotification = () => {

    interface rootState{
        errors: any
    }

    const message = useSelector((state: rootState) => state.errors.message);
    const isError = useSelector((state: rootState) => state.errors.isError);

  return (
    <>
        {isError && (
            <div className="error-auth">
                <span>
                    {message}
                </span>
            </div>
        )}
    </>
  )
}

export default ErrorNotification