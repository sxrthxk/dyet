import React, { useContext } from "react";

interface rtdbContextType {}

const rtdbContextDefaults = {};

const rtdbContext = React.createContext(rtdbContextDefaults);

const useRtdb = () => {
  return useContext(rtdbContext);
};

const RTDBProvider = ({
  children,
}: {
  children: JSX.Element | string | JSX.Element[] | string[] | null | undefined;
}): JSX.Element => {
  const value: rtdbContextType = {};

  return <rtdbContext.Provider value={value}>{children}</rtdbContext.Provider>;
};

export default RTDBProvider;
export { useRtdb };
