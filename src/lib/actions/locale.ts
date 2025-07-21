'use server';

import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function setLocale(locale: string) {
    const cookieStore = await cookies();

    // Validate locale
    const validLocales = ['en', 'bn'];
    if (!validLocales.includes(locale)) {
        return;
    }

    // Set the locale cookie
    cookieStore.set('locale', locale, {
        path: '/',
        maxAge: 60 * 60 * 24 * 365, // 1 year
        httpOnly: false,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax'
    });

    // Revalidate the current path to reflect the language change
    revalidatePath('/', 'layout');

    // Redirect to refresh the page and apply the new locale
    redirect('/');
}
