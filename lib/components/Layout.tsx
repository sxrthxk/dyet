import { Box } from "@chakra-ui/layout";
import {
  Drawer,
  useDisclosure,
  DrawerOverlay,
  DrawerBody,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { CSSObject } from "@chakra-ui/styled-system";
import React from "react";
import BottomNavbar from "./BottomNavbar";

const Layout = ({
  children,
  isFlexCentered = false,
  hasBottomNavbar = true,
}: {
  children: JSX.Element | string | null | never[];
  isFlexCentered?: boolean;
  hasBottomNavbar?: boolean;
}) => {
  const styles: {
    flexboxLayout: CSSObject;
  } = {
    flexboxLayout: {
      display: isFlexCentered ? "flex" : "block",
      color: "primary",
      bg: "#082032",
      height: hasBottomNavbar ? "calc(100vh + 10rem)" : "100vh",
      width: "100%",
      boxSizing: "border-box",
      justifyContent: isFlexCentered ? "center" : undefined,
      alignItems: isFlexCentered ? "center" : undefined,
    },
  };

  return (
    <>
      <Box as="main" sx={styles.flexboxLayout}>
        {children}
      </Box>
      {/* <BottomNavbar /> */}
    </>
  );
};

export default Layout;
