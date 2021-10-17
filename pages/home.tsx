import { Box, Container } from '@chakra-ui/layout'
import WaterIntake from 'components/WaterIntake'
import Card from 'components/Card'
import Layout from 'components/Layout'
import React from 'react'

const Home = () => {
    return (
        <Layout>
            <Container width="full" p="1rem">
                <WaterIntake></WaterIntake>
                <Card>
                    Diet Intake Boyos
                </Card>
                <Card>Did you workout today bitch</Card>
                <Card>Sleep expected</Card>
            </Container>
        </Layout>
    )
}

export default Home
