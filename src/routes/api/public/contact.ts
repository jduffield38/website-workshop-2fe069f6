import { createFileRoute } from '@tanstack/react-router'
import { z } from 'zod'
import { sendTemplateEmail } from '@/lib/email-templates/send-email'

const schema = z.object({
  name: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(320),
  message: z.string().trim().min(1).max(5000),
  // honeypot
  botField: z.string().max(0).optional().or(z.literal('')),
})

export const Route = createFileRoute('/api/public/contact')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let payload: unknown
        try {
          const ct = request.headers.get('content-type') || ''
          if (ct.includes('application/json')) {
            payload = await request.json()
          } else {
            const form = await request.formData()
            payload = Object.fromEntries(form.entries())
          }
        } catch {
          return Response.json({ ok: false, error: 'Invalid request body' }, { status: 400 })
        }

        const parsed = schema.safeParse(payload)
        if (!parsed.success) {
          return Response.json({ ok: false, error: 'Please fill in every field.' }, { status: 400 })
        }
        const { name, email, message, botField } = parsed.data
        if (botField) {
          // silently accept spam
          return Response.json({ ok: true })
        }

        try {
          const result = await sendTemplateEmail(
            'contact-message',
            'contact@vibeedge.app',
            {
              templateData: { name, email, message },
              replyTo: email,
              idempotencyKey: `contact-${email}-${Date.now()}`,
            },
          )
          if (!result.sent) {
            return Response.json({ ok: true })
          }
          return Response.json({ ok: true })
        } catch (error) {
          console.error('contact form send failed', error)
          return Response.json(
            { ok: false, error: 'We couldn\'t send your message. Please email us directly.' },
            { status: 500 },
          )
        }
      },
    },
  },
})
