import React, { useContext } from 'react';
import { Box, Heading, Text, List, ListItem, Divider, Stack, Grid, GridItem, Container } from '@chakra-ui/react';
import { AuthContext } from '../context/AuthContext';

const ResumeDocument = () => {
  const {resumeData} = useContext(AuthContext);
  console.log(resumeData);
   return <>
      <Heading textAlign="center" mt="5px" color="blue">!! ``Select best template`` !!</Heading>
     <Container maxW="80%" mt={10} p={10} height="90vh" borderRadius="20px">
     <Grid templateColumns='repeat(3, 1fr)' gap={6} maxW="100%" >
    <GridItem w='100%' >
          <Box p={4} border="1px solid #ccc" borderRadius="8px" boxShadow= "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px" h="60vh">
            <Heading as="h2" size="lg" mb={4}>{resumeData.name}</Heading>
            <Text mb={2}><strong>Email:</strong> {resumeData.email}</Text>
            <Text mb={2}><strong>Phone:</strong> {resumeData.phone}</Text>
            <Divider my={4} />
            <Box mb={4}>
              <Heading as="h3" size="md">Summary</Heading>
              <Text>{resumeData.summary}</Text>
            </Box>
            <Box mb={4}>
              <Heading as="h3" size="md">Experience</Heading>
              <Text>{resumeData.experience}</Text>
            </Box>
            <Box mb={4}>
              <Heading as="h3" size="md">Education</Heading>
              <Text>{resumeData.education}</Text>
            </Box>
            <Box>
              <Heading as="h3" size="md">Skills</Heading>
              {/* <List>
                {resumeData.skills.split(',').map((skill, index) => (
                  <ListItem key={index}>{skill.trim()}</ListItem>
                ))}
              </List> */}
            </Box>
          </Box>
          </GridItem>
          <GridItem w='100%'>
          <Box p={4} border="2px solid #007BFF" borderRadius="8px" bg="gray.100" boxShadow= "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px" h="60vh">
            <Stack direction="row" align="center" mb={4}>
              <Heading as="h2" size="lg" color="#007BFF">{resumeData.name}</Heading>
              <Box ml="auto">
                <Text mb={2}><strong>Email:</strong> {resumeData.email}</Text>
                <Text mb={2}><strong>Phone:</strong> {resumeData.phone}</Text>
              </Box>
            </Stack>
            <Divider my={4} />
            <Box mb={4}>
              <Heading as="h3" size="md" color="#007BFF">Summary</Heading>
              <Text>{resumeData.summary}</Text>
            </Box>
            <Box mb={4}>
              <Heading as="h3" size="md" color="#007BFF">Experience</Heading>
              <Text>{resumeData.experience}</Text>
            </Box>
            <Box mb={4}>
              <Heading as="h3" size="md" color="#007BFF">Education</Heading>
              <Text>{resumeData.education}</Text>
            </Box>
            <Box>
              <Heading as="h3" size="md" color="#007BFF">Skills</Heading>
              {/* <List>
                {resumeData.skills.split(',').map((skill, index) => (
                  <ListItem key={index}>{skill.trim()}</ListItem>
                ))} 
              </List> */}
            </Box>
          </Box>
          </GridItem>

          <GridItem w='100%'>
          <Box p={4} border="1px dashed #00C851" borderRadius="8px" bg="gray.50" boxShadow= "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px" h="60vh">
            <Heading as="h2" size="lg" mb={4} color="#00C851">{resumeData.name}</Heading>
            <Text mb={2}><strong>Email:</strong> {resumeData.email}</Text>
            <Text mb={2}><strong>Phone:</strong> {resumeData.phone}</Text>
            <Divider my={4} />
            <Stack direction="row" mb={4}>
              <Box flex="1">
                <Heading as="h3" size="md" color="#00C851">Summary</Heading>
                <Text>{resumeData.summary}</Text>
              </Box>
              <Box flex="1">
                <Heading as="h3" size="md" color="#00C851">Experience</Heading>
                <Text>{resumeData.experience}</Text>
              </Box>
            </Stack>
            <Stack direction="row" mb={4}>
              <Box flex="1">
                <Heading as="h3" size="md" color="#00C851">Education</Heading>
                <Text>{resumeData.education}</Text>
              </Box>
              <Box flex="1">
                <Heading as="h3" size="md" color="#00C851">Skills</Heading>
                {/* <List>
                  {resumeData.skills.split(',').map((skill, index) => (
                    <ListItem key={index}>{skill.trim()}</ListItem>
                  ))}
                </List> */}
              </Box>
            </Stack>
          </Box>
          </GridItem>
       </Grid>
     </Container>
    </>
};

export default ResumeDocument;
