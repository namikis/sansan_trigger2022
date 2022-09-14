type TextAreaPropsType = {
  rows?: number;
  placeholder?: string;
};

const TextArea = ({rows=8, placeholder="placeholder"}: TextAreaPropsType) => {
  return (
    <>
        <textarea rows={rows}
                  className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg hover:border-gray-500 block w-full p-2.5"
                  placeholder={placeholder}
        ></textarea>
    </>
  );
};

export default TextArea;