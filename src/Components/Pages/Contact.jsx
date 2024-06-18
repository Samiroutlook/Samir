import React from "react";
import {
  Grid,
  Button,
  Input,
  Stack,
  Flex,
  Textarea,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

function Contact() {
  const transparent = useColorModeValue("transparent.502", "transparent.50");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Flex
        w={"full"}
        h={"100vh"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Stack spacing={3} w={"450px"} px={4}>
          <Input
            w={"full"}
            sx={{ transition: "all 0.1s ease-in-out" }}
            variant="flushed"
            placeholder="Name"
          />
          <Input
            w={"full"}
            sx={{ transition: "all 0.1s ease-in-out" }}
            variant="flushed"
            placeholder="Address"
          />
          <Input
            w={"full"}
            sx={{ transition: "all 0.1s ease-in-out" }}
            variant="flushed"
            placeholder="Phone-Number"
          />
          <Textarea
            w={"full"}
            sx={{ transition: "all 0.1s ease-in-out" }}
            variant="filled"
            h={"20vh"}
            textAlign={"top"}
            placeholder="Enter your massage"
          />
          <Button w={"90px"} mx={"auto"}>
            Submit
          </Button>
        </Stack>
      </Flex>
    </motion.div>
  );
}

export default Contact;
