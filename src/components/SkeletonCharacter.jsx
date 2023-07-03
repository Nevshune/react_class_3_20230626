import { HStack, Skeleton } from "@chakra-ui/react";

export default function SkelretonCharacters() {
    return (
        <HStack templateColumns={"repeat(6, 1fr)"} w="full" gap="4">
            <Skeleton w="220px" h="330px" />
            <Skeleton w="220px" h="330px" />
            <Skeleton w="220px" h="330px" />
            <Skeleton w="220px" h="330px" />
            <Skeleton w="220px" h="330px" />
            <Skeleton w="220px" h="330px" />
        </HStack>
    )
    
}