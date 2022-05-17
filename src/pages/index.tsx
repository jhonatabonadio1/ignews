import Head from 'next/head'

import Avatar from '../assets/images/avatar.svg'
import { SubscribeButton } from '../components/SubscribeButton'

import {
  ContentContainer,
  Hero
} from './home'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>

      <ContentContainer>
        <Hero>
          <span>👏  Hey, welcome</span>
          <h1>
            News about <br /> 
            the <span>React</span> world.
          </h1>
          <p>
            Get access to all the publications <br />
            <span>for $9.90 month</span>
          </p>

          <SubscribeButton />
        </Hero>

        <Avatar />
      </ContentContainer>
    </>
  )
}
