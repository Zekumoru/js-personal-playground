type ErrorProps = {
  error: unknown;
};

const isError = (error: unknown): error is Error => {
  return error instanceof Error;
};

const ErrorPreview = ({ error }: ErrorProps) => {
  return (
    <div className="p-4">
      <h2 className="mb-2 font-bold text-xl">
        Error:{' '}
        <span className="text-red-600">
          {isError(error) ? error.message : (error as string)}
        </span>
      </h2>
      {isError(error) && (
        <pre className="overflow-x-auto p-2 border-2 border-neutral-500">
          {error.stack}
        </pre>
      )}
    </div>
  );
};

export default ErrorPreview;
