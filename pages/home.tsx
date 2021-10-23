import { Container } from '@chakra-ui/layout'
import WaterIntake from 'components/WaterIntake'
import Layout from 'components/Layout'
import React from 'react'
import ExpectedSleep from 'components/ExpectedSleep'
import WorkoutTracker from 'components/WorkoutTracker'
import FoodTracker from 'components/FoodTracker'

const Home = () => {
    return (
        <Layout>
            <Container width="full" p="1rem">
                <WaterIntake/>
                {/* <FoodTracker /> */}
                <WorkoutTracker />
                <ExpectedSleep/>
            </Container>
        </Layout>
    )
}

export default Home
