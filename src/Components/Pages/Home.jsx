import React from "react";
import { Grid } from "@chakra-ui/react";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <Grid
        placeItems={"center"}
        h={"100vh"}
        fontWeight={600}
        fontSize={["2xl", "3xl", "3xl"]}
      >
        Hello, I am Home
      </Grid>
    </motion.div>
  );
}

export default Home;
