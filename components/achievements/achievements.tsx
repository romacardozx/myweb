import * as React from 'react'
import {
  FiPackage,
  FiHome,
  FiEdit2,
  FiUsers,
  FiBarChart2,
} from 'react-icons/fi'
import { FaTools } from 'react-icons/fa'
import { VStack, Heading, Box, Link, LinkProps } from '@chakra-ui/react'
import { TimelineItem } from './Timeline'
import { PageSlideFade } from 'components/shared/animations/page-transitions'
import Header from 'components/shared/header'
import NextLink from 'next/link'
import { useLinkColor } from 'components/theme'

interface ExternalLinkProps extends LinkProps {
  url: string
  linkProps?: LinkProps
  text: string
}

const ExternalLink: React.FC<ExternalLinkProps> = ({
  url,
  linkProps,
  text,
  ...props
}) => {
  return (
    <NextLink href={url} passHref>
      <Link {...linkProps} {...props}>
        {text}
      </Link>
    </NextLink>
  )
}

const InternalLink: React.FC<ExternalLinkProps> = ({
  url,
  linkProps,
  text,
  ...props
}) => {
  return (
    <NextLink href={url} passHref>
      <Link {...linkProps} {...props}>
        {text}
      </Link>
    </NextLink>
  )
}
const Achievements = () => {
  const linkColor = useLinkColor()

  return (
    <PageSlideFade>
      <Box align="start" mb={6}>
        <Header mt={0} mb={0}>
          Achievements
        </Header>
      </Box>
      <VStack textAlign="start" align="start" mb={5}>
        <Box zIndex={5}>
          <Heading fontSize="2xl" fontWeight="600" my={5}>
            2022
          </Heading>
          <Box>
          <TimelineItem icon={FiHome} skipTrail>
              Start as a GO developer in {' '}
              <ExternalLink
                color={linkColor}
                url="https://tecnoazar.com/"
                text={'Tecnoazar'}
                target="_blank"
              />
              .
            </TimelineItem>
            <TimelineItem icon={FaTools}>
              Learnt{' '}
              <ExternalLink
                color={linkColor}
                url="https://www.typescriptlang.org"
                text={'Typescript'}
                target="_blank"
              />{' '}
              and{' '}
              <ExternalLink
                color={linkColor}
                url="https://nextjs.org"
                text={'Next.js'}
                target="_blank"
              />
            </TimelineItem>
            <TimelineItem icon={FiUsers}>Became a Back End Dev ❤️</TimelineItem>
            <TimelineItem icon={FiPackage}>
              Published or contributed to{' '}
              <InternalLink
                color={linkColor}
                url="/open-source"
                text={'20+ open-source repositories'}
              />
            </TimelineItem>
            <TimelineItem icon={FiBarChart2}>
              Start a new Job Position as a Front End Dev in {' '}  
              <ExternalLink
                color={linkColor}
                url="https://mperativ.com/"
                text={'Mperativ'}
                target="_blank"
              />
            </TimelineItem>
            <TimelineItem icon={FiHome} skipTrail>
              Start as a ruby on rails developer in {' '}
              <ExternalLink
                color={linkColor}
                url="https://Rootstrap.com/"
                text={'Rootstrap'}
                target="_blank"
              />
              .
            </TimelineItem>
          </Box>
        </Box>
        <Box zIndex={5}>
          <Heading fontSize="2xl" fontWeight="600" my={5}>
            2021
          </Heading>
          <Box>
            <TimelineItem icon={FiEdit2}>Start as a tutor in CoderHouse</TimelineItem>
            <TimelineItem icon={FiPackage}>
              My fist PWA
            </TimelineItem>
            <TimelineItem icon={FiBarChart2}>
              My first Job as a Full stack developer in{' '}
              <ExternalLink
                color={linkColor}
                url="https://distrisuper.com/"
                text={'Distrisuper'}
                target="_blank"
              />
            </TimelineItem>
            <TimelineItem icon={FiHome} skipTrail>
              Start Henry Bootcamp,{' '}
              <ExternalLink
                color={linkColor}
                url="https://soyhenry.com/"
                text={'Henry Bootcamp'}
                target="_blank"
              />
              .
            </TimelineItem>
          </Box>
        </Box>
      </VStack>
    </PageSlideFade>
  )
}

export default Achievements
