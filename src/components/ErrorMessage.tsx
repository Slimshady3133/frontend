import React from 'react';

interface ErrorMess {
  error: string;
}

function ErrorMessage({ error }: ErrorMess) {
  return <p className="text-center text-red-600">{error}</p>;
}

export default ErrorMessage;
