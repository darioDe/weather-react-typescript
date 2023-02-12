type ErrorProps = {
   msg : string;
};

const Error: React.FC<ErrorProps> = ({ msg }) => {
   return (
      <p>
         {msg}
      </p>

   );
}

export default Error