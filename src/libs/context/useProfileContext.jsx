import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
  const [isValid, setValid] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    zipCode: "",
    city: "",
  });

  const validate = useCallback(
    (fields) => {
      const errors = {};
      for (let field in fields) {
        if (fields[field].trim().length < 2) {
          errors[field] = `${field} est requis`;
          break;
        }
      }
      setValid(Object.keys(errors).length < 1);
      return Object.keys(errors).length < 1;
    },
    [formData]
  );

  const handleChangeProfile = useCallback(
    (evt) => {
      const name = evt.target.name;
      const value = evt.target.value;
      setFormData((state) => ({ ...state, [name]: value }));
    },
    [formData]
  );
  const value = useMemo(
    () => ({
      formData,
      isValid,
      validate,
      handleChangeProfile,
    }),
    [formData, isValid]
  );
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
const UseUserContext = () => useContext(UserContext);
export default UseUserContext;
