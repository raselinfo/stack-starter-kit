interface ErrorType {
  message: string;
}
const formateError = (err: ErrorType | string) =>
  (err as { message: string }).message ?? err;

export default formateError;
