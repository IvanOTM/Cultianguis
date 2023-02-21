// middleware.ts
import { NextFetchEvent, NextResponse } from 'next/server';
import type {NextRequest} from 'next/server';
import { getToken } from 'next-auth/jwt'

// This function can be marked `async` if using `await` inside
export async function middleware(req: NextRequest | any, ev: NextFetchEvent ) {

    const session: any = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    const validRoles = ['admin','super-user','SEO'];
    // Información útil sobre el usuario
    // console.log({ session })
    if ( !session ) {
        const requestedPage = req.nextUrl.pathname;
        const url = req.nextUrl.clone();
        url.pathname = `auth/login`;
        url.search = `p=${ requestedPage }`;

        if ( validRoles.includes( session.user.role )) {
          return NextResponse.redirect('/pages/index');
         }

        return NextResponse.redirect( url );
    }
  }

    // if ( !session ) {
      // const requestedPage = req.page.name;
      // return NextResponse.redirect(`/auth/login?p=${ requestedPage }`);
    // }

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/checkout/address/path','/checkout/summary/path']
}