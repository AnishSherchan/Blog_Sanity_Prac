import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "w5g88yaf",
  dataset: "production",
  apiVersion: "2024-01-01",
  // unless you have caching for your front end, `useCdn` should be `true` for most production environments
  useCdn: false,
});
[
  {
    _type: 'blog',
    _id: '82e27228-31f8-4ba7-afa3-c54ecfa6999b',
    title: 'A350 Lufthansa ',
    _updatedAt: '2024-03-13T20:01:44Z',
    poster: {
      asset: [Object],
      _type: 'image',
      attribution: 'sasas',
      caption: 'A350'
    },
    content: [ [Object], [Object], [Object] ],
    _createdAt: '2024-03-12T19:05:06Z',
    _rev: 'VbR46MstEM4tqarYZKRFXF'
  }
]