import { Stack } from "@mui/material";
import styles from  "./input.module.css";
function InputComp({
  value,
  placeholder="Enter text",
  type,
  id,
  onChange,
  required,
  disabled,
  width,
  label,
  style,
  maxLength,
  minLength,
  defaultValue,
}) {
 
  return (
    <Stack>
      <label
        htmlFor={id}
        style={{
          color: "lightgray",
          display: "block",
          fontSize: "18px",
          width: "100%",
          fontWeight: 500,
        }}
      >
        {label}
      </label>
      <input
        defaultValue={defaultValue}
        type={type}
        width={width}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        maxLength={maxLength}
        minLength={minLength}
        style={{ ...style, }}
        className={styles.hoveringInp}
      />
    </Stack>
  );
}
export default InputComp;
