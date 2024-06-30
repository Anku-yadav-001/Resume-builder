import React from 'react';
import { Box, Heading, Text, List, ListItem, Divider, Stack } from '@chakra-ui/react';

const ResumeDocument = ({ resumeData, template }) => {
  const renderTemplate = () => {
    switch (template) {
      case 'Template1':
        return (
          <Box p={4} border="1px solid #ccc" borderRadius="8px">
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
              <List>
                {resumeData.skills.split(',').map((skill, index) => (
                  <ListItem key={index}>{skill.trim()}</ListItem>
                ))}
              </List>
            </Box>
          </Box>
        );
      case 'Template2':
        return (
          <Box p={4} border="2px solid #007BFF" borderRadius="8px" bg="gray.100">
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
              <List>
                {resumeData.skills.split(',').map((skill, index) => (
                  <ListItem key={index}>{skill.trim()}</ListItem>
                ))}
              </List>
            </Box>
          </Box>
        );
      case 'Template3':
        return (
          <Box p={4} border="1px dashed #00C851" borderRadius="8px" bg="gray.50">
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
                <List>
                  {resumeData.skills.split(',').map((skill, index) => (
                    <ListItem key={index}>{skill.trim()}</ListItem>
                  ))}
                </List>
              </Box>
            </Stack>
          </Box>
        );
      default:
        return null;
    }
  };

  return renderTemplate();
};

export default ResumeDocument;
