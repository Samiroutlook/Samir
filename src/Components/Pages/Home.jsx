import React from "react";
import {
  Grid,
  Box,
  Flex,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

function Home() {
  const transparent = useColorModeValue("transparent.502", "transparent.50");
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Box w={"full"} h={"100vh"} pt={14}>
        <Flex justifyContent={"center"} w={"full"} px={6}>
          <Box
            bg={transparent}
            mt={"32px"}
            w={"450px"}
            p={3}
            rounded={"lg"}
            mx={"auto"}
            fontWeight={600}
            textAlign={"center"}
          >
            Hello, I'm a Web-Developer from Bangladesh.
          </Box>
        </Flex>
      </Box>
    </motion.div>
  );
}

export default Home;
