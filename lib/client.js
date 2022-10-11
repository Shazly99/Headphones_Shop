import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'yqmqhwta',
  dataset: 'production',
  apiVersion: '2021-10-21',
  useCdn: true,
  token:'skv7SvOoOATyzBTVxxRn9GyTvZITdo5LWD0Wwzq1i9BfkxIDYIhi8Yxnm0u6cSSfAcUJjUjxGK1X8i2M9PMPPlVRF6BwWaoCjgQSh7Csx9VYTsxg7oL1wDKtV26KLBxof33s6kzdYO1RtlZG9JIHGeXkGkioOCaRKzmH9cs6ueYIGjX9rWuU'
});


const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
