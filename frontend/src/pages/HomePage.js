import React, { useEffect } from 'react'
import{Container,Box,Text,Tabs ,TabList ,Tab ,TabPanels,TabPanel,}from "@chakra-ui/react";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import { useHistory } from 'react-router-dom';

const HomePage = () => {
     const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    

    if (user) 
    {
        history.push("/chats");

}
    
  }, [history]);


    return (
        <Container maxW='xl' centerContent> 
            <Box
            d="flex"
            justifyContent={"center"}
            p={3}
            bg={"White"}
            w={"100%"}
            m={"40px 0 15px 0"}
            borderRadius={"lg"}
            borderWidth={"1px"}
            >
                <Text fontSize={"4xl"}fontFamily={"work sans"}>Re-UNION</Text>
            </Box>
            <Box
            p={4}
            bg={"White"}
            w={"100%"}
            // m={"40px 0 15px 0"}
            borderRadius={"lg"}
            borderWidth={"1px"}
            >
                <Tabs variant='soft-rounded' colorScheme='green'>
                    <TabList mb={"1em"}>
                        <Tab width={"50%"}>Login</Tab>
                        <Tab width={"50%"}>Sign Up</Tab>
                    </TabList>
                    <TabPanels>

                        <TabPanel><Login /></TabPanel>
                        <TabPanel><Signup /></TabPanel>
                    
                    </TabPanels>
                </Tabs>
            </Box>
        </Container>
    );
};

export default HomePage
