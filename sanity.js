// sanity.js
import { createClient } from '@sanity/client'
// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'

export const sanityClient = createClient({
    projectId: 'rvjtx1je',
    dataset: 'users',
    useCdn: true, // set to `false` to bypass the edge cache
    apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
    token: process.env.SANITY_SECRET_TOKEN, // or leave blank for unauthenticated usage
})
// uses GROQ to query content: https://www.sanity.io/docs/groq
export async function getUsers() {
    const users = await sanityClient.fetch('*[_type == "users"]')
    return users
}


