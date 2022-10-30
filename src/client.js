import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: 'kgjpyp2k',
  dataset: 'production',
  useCdn:true
})