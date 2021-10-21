import { Flex } from '@chakra-ui/layout'
import React from 'react'
import Card from './Card'

const BottomNavbar = () => {
    return (
        <Flex position="fixed" bottom="0" left="0" w="100%" bg="blackAlpha.800" justifyContent="center">
            {['🍕','🍔','🍟','🌭'].map((item, index) => <Card key={index}>
                {item}
            </Card>)}
        </Flex>
    )
}

export default BottomNavbar
