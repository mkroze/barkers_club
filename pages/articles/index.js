import BigTitle from '../../components/indexComponents/BigTitle';
import Layout from '../../components/Layout';
import Article from '../../models/Article';
import db from '../../utils/db';

const Blog = ({articles}) => {
  return (
    <Layout title="Blog">
      <BigTitle
        title="Découvrez les dernières actualités et tendances sur notre blog"
        description="Restez informé et à jour sur tout ce qui concerne les chiens. Notre blog est votre source incontournable pour tout ce qui concerne les chiens."
      />
      {articles.map((article) => {
        return (
          <article className="overflow-hidden h-56 my-2 flex flex-row rounded-lg shadow transition hover:shadow-lg w-2/3 m-auto">
            <img
                alt="Office"
                src={article.image}
                className="object-contain object-cover rounded-xl"
              />

            <div className="bg-white p-4 sm:p-6">
              <time
                datetime="2022-10-10"
                className="block text-xs text-gray-500"
              >
                {article.createdAt}
              </time>

              <a href={`/articles/${article._id}`}>
                <h3 className="mt-0.5 text-xl text-green-600 font-bold">
                  {article.title}
                </h3>
              </a>

              <p className="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
                {article.summary}
              </p>
            </div>
          </article>
        );
      })}
    </Layout>
  );
};
export async function getServerSideProps() {
  await db.connect();
  const articles = await Article.find().lean();
  console.log(articles);
  return {
    props: {
      articles: articles.map(db.convertDocToObj),
    },
  };
}

export default Blog;
