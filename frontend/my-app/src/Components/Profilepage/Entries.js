import React, {useState} from 'react';
import "./Profile.css"
import {Button, Heading, Stack, HStack, VStack, Text} from '@chakra-ui/react'

const Entries = ({title, number, address, passToButton}) => {
    // title, number, address
    // once user favorites an entry, create new entry with info

    return (
        <HStack>
            <VStack  wordBreak={'break-word'}>
                <b><Text width={'300px'} wordBreak={'break-word'} fontSize={'2xl'}>{title}</Text></b>
                <Text width={'300px'}>{number}</Text>
                <Text width={'300px'}>{address}</Text>
            </VStack>
            <Button background={'lightred'} onClick={() => passToButton()}>x</Button>
        </HStack>
    )
}

export default Entries;