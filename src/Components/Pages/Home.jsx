import React from "react";
import { Box, Flex, useColorModeValue, Text, Image } from "@chakra-ui/react";
import { Stack, Button } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
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
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          w={"full"}
          mt={4}
        >
          <Image
            src="./images/my.jpg"
            alt="my-image"
            boxSize="200px"
            borderRadius="full"
          />
          <Text
            fontWeight={600}
            bg={transparent}
            fontSize={"lg"}
            py={1}
            mt={2}
            px={3}
            textAlign={"center"}
            rounded={"md"}
          >
            Samir Alam
          </Text>
          <Text w={["95vw", "460px", "500px"]} textAlign={"center"} mt={4}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur recusandae iusto culpa eum dolorum voluptatum fuga
            cumque, necessitatibus impedit? Harum dicta libero unde, sequi porro
            maiores iure assumenda quaerat eius. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Delectus, ratione? Lorem, ipsum dolor
            sit amet consectetur adipisicing elit. Ab, perspiciatis.
          </Text>
        </Flex>
        <Stack
          spacing={4}
          direction="row"
          align="center"
          justify={"center"}
          mt={5}
        >
          <Button colorScheme="teal" color={"black"} size="md">
            Let's Talk
          </Button>
          <Button colorScheme="teal" color={"black"} size="md">
            Hire Me
          </Button>
        </Stack>
        <Stack direction={"row"} justifyContent={"center"} mt={5}>
          <IconButton
            _hover={{ color: "teal.200" }}
            size={"lg"}
            fontSize={"30px"}
            icon={<i className="fa-brands fa-github"></i>}
          ></IconButton>
          <IconButton
            _hover={{ color: "teal.200" }}
            size={"lg"}
            fontSize={"30px"}
            icon={<i className="fa-brands fa-facebook"></i>}
          ></IconButton>
          <IconButton
            _hover={{ color: "teal.200" }}
            size={"lg"}
            fontSize={"30px"}
            icon={<i className="fa-brands fa-instagram"></i>}
          ></IconButton>
        </Stack>
      </Box>
    </motion.div>
  );
}

export default Home;
