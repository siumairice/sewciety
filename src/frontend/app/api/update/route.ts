import {NextRequest, NextResponse} from 'next/server'

/**
 * POST /api/update
 * 
 * Webhook endpoint that receives data from the Discord bot.
 * 
 * Security: Validates the X-Webhook-Secret header to ensure requests
 * are coming from the authorized bot.
 */
export async function POST(request: NextRequest) {
  try {
    // 1. Verify the webhook secret
    const webhookSecret = request.headers.get('X-Webhook-Secret')
    const expectedSecret = process.env.WEBHOOK_SECRET

    if (!expectedSecret) {
      console.error('❌ WEBHOOK_SECRET is not configured')
      return NextResponse.json(
        {error: 'Server configuration error'},
        {status: 500}
      )
    }

    if (webhookSecret !== expectedSecret) {
      console.warn('⚠️ Invalid webhook secret received')
      return NextResponse.json(
        {error: 'Unauthorized'},
        {status: 401}
      )
    }

    // 2. Parse the request body
    const body = await request.json()

    // 3. Log the webhook data (for debugging/monitoring)
    console.log('📥 Webhook received:', {
      timestamp: new Date().toISOString(),
      data: body,
      ip: request.ip || request.headers.get('x-forwarded-for'),
    })

    // 4. Validate required fields
    const {userId, username, channelId, timestamp, commandType} = body

    if (!userId || !username || !channelId || !timestamp || !commandType) {
      return NextResponse.json(
        {
          error: 'Missing required fields',
          required: ['userId', 'username', 'channelId', 'timestamp', 'commandType'],
        },
        {status: 400}
      )
    }

    // 5. Process the webhook (add your business logic here)
    // For example: save to database, trigger notifications, etc.
    const processedData = {
      received: true,
      processedAt: new Date().toISOString(),
      user: username,
      userId,
      channelId,
      commandType,
    }

    // 6. Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Webhook received and processed',
        data: processedData,
      },
      {status: 200}
    )
  } catch (error) {
    // Handle JSON parsing errors
    if (error instanceof SyntaxError) {
      console.error('❌ Invalid JSON in request body:', error)
      return NextResponse.json(
        {error: 'Invalid JSON in request body'},
        {status: 400}
      )
    }

    // Handle other errors
    console.error('❌ Error processing webhook:', error)
    return NextResponse.json(
      {
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      {status: 500}
    )
  }
}

// Optional: Handle GET requests for health checks
export async function GET() {
  return NextResponse.json(
    {
      status: 'ok',
      endpoint: '/api/update',
      method: 'POST',
    },
    {status: 200}
  )
}



