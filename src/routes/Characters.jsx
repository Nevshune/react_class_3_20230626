import { Box, Grid, GridItem, HStack, Image, Select, Text, VStack } from "@chakra-ui/react";
import { charactersList } from "../api";
import { useQuery } from "react-query";

export default function Characters() {

    const {data, isLoading} = useQuery("caracters" , charactersList)


    return <VStack w="full">
        <Box w="full" h="64" overflow="hidden">
            <Image
                w="full"
                src="https://images.unsplash.com/photo-1562563436-a73bab993173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Chartacters Img"
                objectFit="cover"
            />
        </Box>
        <VStack w="7xl">
            {/* 타이틀 */}
            <HStack w="full" py="16" justifyContent="space-between">
                <Box>
                    <Text fontSize={"32"} fontWeight={600} >Characters</Text>
                </Box>
                <Select w="32">
                    <option value="6">6</option>
                    <option value="12">12</option>
                    <option value="18">18</option>
                    <option value="24">24</option>
                    <option value="30">30</option>
                    <option value="36">36</option>
                </Select>
            </HStack>
            {/* 게시판 */}
            <Grid templateColumns={"repeat(6, 1fr)"} w="full" gap="4">
                {data?.data?.results.map((item, i)=>(
                <GridItem w="220px" bg="red.600" role="group">
                    <VStack w='full' spacing="1">
                        <Box w="full" h="48" overflow="hidden" >
                            <Image
                                _groupHover={{
                                    transform : "scale(1.1)",
                                }}
                                transition="0.2s"
                                src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                                alt="characters content"
                                w="full" h="full"
                                objectFit="cover"
                            />
                        </Box>
                        <Box w="full" h="36" position="relative" overflow="hidden">
                            {/* 호버시 이동하는 빈박스 */}
                            <Box
                                position="absolute"
                                top="0"
                                left="0"
                                w="full"
                                h="full"
                                bg="gray.700"
                                _groupHover={{
                                    top : "180px"
                                }}
                                transition="0.5s"
                            />
                            {/* 하단구석 잘린모양 만들기 위한 작은박스 */}
                            <Box 
                            position="absolute" 
                            bottom="-15px"
                            right="-15px"
                            bg="white"
                            w="30px"
                            h="30px"
                            transform={"rotate(45deg) scale(2)"}
                            />
                            {/* 타이틀을 넣기위한부분 */}
                            <Text 
                            color="white" 
                            position="absolute" 
                            top="10px"
                            left="10px"
                            fontSize="14"
                            fontWeight="semibold"
                            >안녕하세요</Text>
                        </Box>
                    </VStack>
                </GridItem>
                ))}
            </Grid>
        </VStack>
    </VStack>
}