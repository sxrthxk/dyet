import { Box, Container } from '@chakra-ui/layout'
import WaterIntake from 'components/WaterIntake'
import Card from 'components/Card'
import Layout from 'components/Layout'
import React from 'react'
import ExpectedSleep from 'components/ExpectedSleep'

const Home = () => {
    return (
        <Layout>
            <Container width="full" p="1rem">
                <WaterIntake/>
                <Card>
                    Diet Intake
                </Card>
                <Card>Did you workout today</Card>
                <ExpectedSleep/>
            </Container>
        </Layout>
    )
}

export default Home
