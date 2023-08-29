import { Box, ButtonGroup, Container, Flex, Heading, HStack, IconButton, Image, Tag, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { FaEnvelope, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaPhone, FaTwitter } from 'react-icons/fa'
import Education from './Education'
 

export default function Banner() {
    return (
        <Container maxW={'7xl'} alignItems='center' my={5}>
            <Flex width={'100%'} maxW={['full', 'full', '7xl']} justifyContent='center' alignItems={'center'} flexDir={['column', 'column', 'row', 'row']}>
                <Flex width={['md', 'md', '2xl']} flexDir={'column'} justifyContent='space-between' bgColor={'white'} color='black' maxHeight='2xl' minHeight={'4xl'} borderRadius='3xl' p='10' mb={10}>
                    <Box>
                        <Flex alignItems={'center'} justifyContent='center'>
                            <Image borderColor={'gray.100'} src='https://cdn3d.iconscout.com/3d/premium/thumb/boy-avatar-6299533-5187865.png' width='32' />
                        </Flex>

                        <Heading textAlign={'center'}>Sean Ho</Heading>
                        <Text fontSize={'lg'} textAlign='center'>
                            Toronto(Open Work Permit)<br></br><br></br>
                        </Text>
                        <Text fontSize={'sm'} textAlign='center'>
                        Proficient in analysing, designing, and customising web frameworks to create top notch solutions with expertise in web development. Additionally, skilled in implementing CI/CD, automated process and mobile development. Seeking a <Tag mt={-0.5} variant={'solid'}>Web Software Developer</Tag> role to apply my technical mastery and contribute to the development of state-of-the-art web solutions.
                        </Text>

                        <VStack my={4}>
                            <Tag px={5} variant={'subtle'} colorScheme='primary'>Front-end Developer</Tag>
                            <Tag px={5} variant={'subtle'} colorScheme='primary'>Full Stack Developer</Tag>
                            <Tag px={5} variant={'subtle'} colorScheme='primary'>Mobile App Developer</Tag>
                        </VStack>
                        <Box orientation='horizontal' bgColor='gray.300' my={4} height={0.2} />
                        {/* Icons  */}
                        <VStack spacing={6} alignItems='start'>
                            <HStack>
                                <Box me={2}>
                                    <IconButton shadow={'md'} variant={'ghost'} border='1px solid' borderColor={'gray.300'}><FaEnvelope /></IconButton>
                                </Box>
                                <VStack alignItems={'start'} spacing={0.1}>
                                    <Text fontSize={'sm'}>Email</Text>
                                    <Text fontWeight={'600'}>hosiuchuen05@gmail.com</Text>
                                </VStack>
                            </HStack>


                            <HStack>
                                <Box me={2} >
                                    <IconButton shadow={'md'} variant={'ghost'} border='1px solid' borderColor={'gray.300'}><FaPhone /></IconButton>
                                </Box>
                                <VStack alignItems={'start'} spacing={0.1}>
                                    <Text fontSize={'sm'}>Phone</Text>
                                    <Text fontWeight={'600'}>+14376609899</Text>
                                </VStack>
                            </HStack>


                            <HStack>
                                <Box me={2}>
                                    <IconButton shadow={'md'} variant={'ghost'} border='1px solid' borderColor={'gray.300'}><FaGithub /></IconButton>
                                </Box>
                                <VStack alignItems={'start'} spacing={0.1}>
                                    <Text fontSize={'sm'}>Github</Text>
                                    <a href="https://github.com/ho1225" target="_blank"><Text fontWeight={'600'}>Github Profile</Text></a>
                                </VStack>
                            </HStack>

                            <HStack>
                                <Box me={2}>
                                    <IconButton shadow={'md'} variant={'ghost'} border='1px solid' borderColor={'gray.300'}><FaLinkedin /></IconButton>
                                </Box>
                                <VStack alignItems={'start'} spacing={0.1}>
                                    <Text fontSize={'sm'}>Linkedin</Text>
                                    <a href="https://www.linkedin.com/in/sean-ho-779966225/" target="_blank"><Text fontWeight={'600'}>Linkedin Profile</Text></a>
                                </VStack>
                            </HStack>

                            <HStack>
                                
                            </HStack>

                        </VStack>
                    </Box>

                    {/* <ButtonGroup justifyContent={'center'} alignItems={'center'} variant='ghost' spacing={1.9}>
                        <IconButton _hover={{ color: 'primary.700', bgColor: 'primary.50', border: '1px solid', borderColor: 'primary.700' }}><FaFacebook size={24} /></IconButton>
                        <IconButton _hover={{ color: 'primary.700', bgColor: 'primary.50', border: '1px solid', borderColor: 'primary.700' }}><FaInstagram size={24} /></IconButton>
                        <IconButton _hover={{ color: 'primary.700', bgColor: 'primary.50', border: '1px solid', borderColor: 'primary.700' }}><FaTwitter size={24} /></IconButton>
                    </ButtonGroup> */}
                </Flex>
                <Box ms={['0', '0', '8']} flexDir={'column'} justifyContent='space-between' bgColor={'white'} color='black' maxHeight='4xl' scrollBehavior={'smooth'} minHeight={'4xl'} borderRadius='3xl' p='10' mb={10}>
                    <Heading>
                        Work Experience
                    </Heading>
                    <Education />
                </Box>
            </Flex>
        </Container>
    )
}
