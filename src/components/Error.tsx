type ErrorProps = {
   msg : string;
};

const Error: React.FC<ErrorProps> = ({ msg }) => {
   return (
      <p className="error-msg">
         {msg}
      </p>

   );
}

export default Error