import React from "react";
import { Grid, Box, Text, Flex, Center } from "@chakra-ui/react";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Box w={"full"} h={"100vh"}>
        <Flex
          py={70}
          justifyContent={"space-around"}
          alignItems={"center"}
          flexDirection={"column"}
          h={"100vh"}
          fontSize={["2xl", "3xl", "xl"]}
          fontWeight={600}
        >
          <Box
            fontSize={["sm", "md", "lg"]}
            w={["98vw", "70vw"]}
            textAlign={"left"}
            overflow={"auto"}
            bg={"transparent"}
            rounded={"md"}
            p={4}
          >
            <Text
              textDecoration={"underline"}
              textColor={"blue.400"}
              textDecorationColor={"#525252"}
              textDecorationThickness={"4px"}
              mb={1}
              lineHeight={2}
              textUnderlineOffset={"5px"}
            >
              <li>About Me</li>
            </Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            atque minima debitis velit sit, exercitationem totam natus
            blanditiis aliquid? Eligendi error architecto aliquam. Earum
            possimus iure iusto quaerat quo exercitationem tempora? Et vero
            magni ea eveniet mollitia, error alias quasi voluptate perspiciatis
            dignissimos beatae aliquid officiis iure ipsa accusantium. Fugiat
          </Box>
          <Box
            fontSize={["sm", "md", "lg"]}
            w={["98vw", "70vw"]}
            textAlign={"left"}
            overflow={"hidden"}
            bg={"transparent"}
            rounded={"md"}
            p={4}
          >
            <Text
              textDecoration={"underline"}
              textDecorationColor={"#525252"}
              textDecorationThickness={"4px"}
              mb={1}
              lineHeight={2}
              textUnderlineOffset={"5px"}
              textColor={"teal.300"}
            >
              <li>Work</li>
            </Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            atque minima debitis velit sit, exercitationem totam natus
            blanditiis aliquid? Eligendi error architecto aliquam. Earum
            possimus iure iusto quaerat quo exercitationem tempora? Et vero
            magni ea eveniet mollitia, error alias quasi voluptate perspiciatis
            dignissimos beatae aliquid officiis iure ipsa accusantium. Fugiat
          </Box>
          <Box
            fontSize={["sm", "md", "lg"]}
            w={["98vw", "70vw"]}
            textAlign={"left"}
            overflow={"hidden"}
            bg={"transparent"}
            rounded={"md"}
            p={4}
            overflowY={"auto"}
          >
            <Text
              textDecoration={"underline"}
              textDecorationColor={"#525252"}
              textDecorationThickness={"4px"}
              mb={1}
              lineHeight={2}
              textUnderlineOffset={"5px"}
              textColor={"red.300"}
            >
              <li>Education</li>
            </Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            atque minima debitis velit sit, exercitationem totam natus
            blanditiis aliquid? Eligendi error architecto aliquam. Earum
            possimus iure iusto quaerat quo exercitationem tempora? Et vero
            magni ea eveniet mollitia, error alias quasi voluptate perspiciatis
            dignissimos beatae aliquid officiis iure ipsa accusantium. Fugiat
          </Box>
        </Flex>
      </Box>
    </motion.div>
  );
}

export default About;
