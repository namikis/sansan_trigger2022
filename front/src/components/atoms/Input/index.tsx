type InputProps = {
  placeholder?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

const Input = ({placeholder="placeholder"}: InputProps) => {
  return (
    <div>
      <input type="text"
             placeholder={placeholder}
             required
             className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg hover:border-gray-500 block w-full p-2.5"
      ></input>
    </div>
  )
}

export default Input;