import {NextResponse} from 'next/server'
import type {NextRequest} from 'next/server'

const allowedOrigins = [
    'http://localhost:3000',
    'http://localhost:3001',
    'https://mazainulhasan1.sch.id',
    'https://www.mazainulhasan1.sch.id',
    'https://web-ma-nextjs.vercel.app',
];

export function middleware(nextRequest: NextRequest) {
    const res = NextResponse.next()
    if (nextRequest.nextUrl.pathname !== '/api/auth/detail') {
        const origin = nextRequest.headers.get('Origin')
        if (!origin) {
            console.log(`Direct access is denied !!!`);
            return NextResponse.json({error: 'No Origin detect'}, {status: 403})
        }

        if (origin && !allowedOrigins.includes(origin)) {
            console.log(`Your address is not allowed !!!`);
            return NextResponse.json({error: 'Origin denied'}, {status: 403})
        }

        if (nextRequest.method === 'OPTIONS') {
            const optionsResponse = new NextResponse(null, {status: 200})
            optionsResponse.headers.append('Access-Control-Allow-Origin', "*")
            optionsResponse.headers.append('Access-Control-Allow-Methods', 'GET,DELETE,PATCH,POST,PUT')
            optionsResponse.headers.append(
                'Access-Control-Allow-Headers',
                'Authorization, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
            )
            return optionsResponse
        }
        return res
    }
    return res
}

export const config = {
    matcher: '/api/:path*',
}