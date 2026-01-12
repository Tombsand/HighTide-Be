import { Hono } from 'hono'
import { routes } from './routes'
import { cors } from 'hono/cors'

const app = new Hono().basePath('/api')

app.use('*', cors({
    origin: '*',
    allowMethods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Authorization']
}))

app.route('/film', routes)

export default app
