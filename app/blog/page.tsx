import Link from 'next/link';
import Image from 'next/image';

interface Post {
  title: string;
  brief: string;
  slug: string;
  coverImage: string;
  dateAdded: string;
}

const getPosts = async (): Promise<Post[]> => {
  try {
    const response = await fetch('https://api.hashnode.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query {
            user(username: "${process.env.NEXT_PUBLIC_HASHNODE_USERNAME}") {
              publication {
                posts(page: 0) {
                  title
                  brief
                  slug
                  coverImage
                  dateAdded
                }
              }
            }
          }
        `,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.errors[0].message || 'Failed to fetch posts');
    }

    const posts = data.data.user.publication.posts;

    return posts;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};

const Blog: React.FC = async () => {
  const posts = await getPosts();

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>My Blogs</h1>
      <div className='grid grid-cols-2 gap-4 justify-center'>
        {posts.map((post) => (
          <div
            key={post.slug}
            className='rounded overflow-hidden shadow-lg flex'
          >
            <div className='w-1/3'>
              <Image
                src={post.coverImage}
                alt={post.title}
                width={200}
                height={150}
              />
            </div>
            <div className='w-2/3 p-4'>
              <h2 className='font-bold text-xl mb-2'>{post.title}</h2>
              <p className='text-gray-400 text-base truncate'>{post.brief}</p>
              <Link
                href={`${process.env.NEXT_PUBLIC_HASHNODE_BLOG_URL}/${post.slug}`}
                target='_blank'
                rel='noopener noreferrer'
                className='mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Link
        href={process.env.NEXT_PUBLIC_HASHNODE_BLOG_URL}
        target='_blank'
        rel='noopener noreferrer'
        className='mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      >
        View More
      </Link>
    </div>
  );
};

export default Blog;
