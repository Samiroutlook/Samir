import React from "react";
import { Box, Flex, useColorModeValue, Image } from "@chakra-ui/react";
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
        <Flex justifyContent={"center"} w={"full"} mt={4}>
          <Image
            src="./images/my.jpg"
            alt="hello"
            boxSize="200px"
            borderRadius="full"
          />
        </Flex>
      </Box>
    </motion.div>
  );
}

export default Home;
