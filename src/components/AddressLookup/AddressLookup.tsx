'use client'

interface AddressLookupProps {
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const AddressLookup: React.FC<AddressLookupProps> = (props) => {
  
  return (
    <div>
      <input
        placeholder={props.placeholder}
        type="number"
        value={props.value}
        onChange={props.onChange}
        maxLength={8}
        minLength={0}
      />
    </div>
  );
};

export default AddressLookup;
