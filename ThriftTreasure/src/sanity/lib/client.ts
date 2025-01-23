import { createClient } from 'next-sanity'

console.log('Sanity Project ID:', process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
console.log('Sanity Access Token:', process.env.SANITY_ACCESS_TOKEN);


export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset:"production",
  apiVersion:"2025-01-02",
  token:process.env.SANITY_ACCESS_TOKEN,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})


