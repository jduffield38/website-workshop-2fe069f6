import * as React from 'react'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components'
import type { TemplateEntry } from './registry'

interface Props {
  name?: string
  email?: string
  message?: string
}

const Email = ({ name, email, message }: Props) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>New contact form message from {name || 'a visitor'}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New contact form message</Heading>
        <Text style={text}>You just received a new message from the VibeEdge contact form.</Text>
        <Section style={card}>
          <Text style={label}>From</Text>
          <Text style={value}>{name || 'Anonymous'}</Text>
          <Hr style={hr} />
          <Text style={label}>Email</Text>
          <Text style={value}>{email || '—'}</Text>
          <Hr style={hr} />
          <Text style={label}>Message</Text>
          <Text style={{ ...value, whiteSpace: 'pre-wrap' }}>{message || '—'}</Text>
        </Section>
        <Text style={footer}>Reply directly to this email to respond to the sender.</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: Email,
  subject: (data: Record<string, any>) =>
    `New contact form message${data?.name ? ` from ${data.name}` : ''}`,
  displayName: 'Contact form message',
  to: 'contactus@vibeedge.app',
  previewData: {
    name: 'Jane Doe',
    email: 'jane@example.com',
    message: 'Loving the apps — any chance you\'ll add an SAT prep one soon?',
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, sans-serif' }
const container = { padding: '24px', maxWidth: '560px' }
const h1 = { color: '#1c203b', fontSize: '22px', fontWeight: 700, margin: '0 0 8px' }
const text = { color: '#374151', fontSize: '14px', lineHeight: '22px' }
const card = {
  backgroundColor: '#f8fafc',
  borderRadius: '10px',
  border: '1px solid #e5e7eb',
  padding: '16px 20px',
  margin: '16px 0',
}
const label = { color: '#6b7280', fontSize: '11px', textTransform: 'uppercase' as const, margin: '0', letterSpacing: '0.05em' }
const value = { color: '#111827', fontSize: '15px', margin: '4px 0 0' }
const hr = { borderColor: '#e5e7eb', margin: '12px 0' }
const footer = { color: '#6b7280', fontSize: '12px', marginTop: '16px' }
