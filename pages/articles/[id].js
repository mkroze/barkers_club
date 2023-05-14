import BigTitle from '../../components/indexComponents/BigTitle';
import Layout from '../../components/Layout';
import Article from '../../models/Article';
import db from '../../utils/db';

const ArticlePost = ({ article }) => {
  return (
    <Layout title="Article">
      <BigTitle
        title={article.title}
        description="Renseignez vous sur le sujet selectionné."
      />
      <div className='flex flex-row'>
      
        <img
          src={article.image}
          alt={article.title}
          className="m-auto rounded-xl w-1/3 mx-12"
        />
        <div className="m-auto w-2/3">
          {article.description.map((paragraph, index) => {
            return index == 0 ? (
              <p className="mb-3 mx-12  m-auto mt-4 font-semi text-justify text-gray-900  first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-green-600  first-letter:mr-3 first-letter:float-left">
                {paragraph}
              </p>
            ) : (
              <p className="font-semi  mx-12  m-auto mt-4 text-justify text-gray-900">
                {paragraph}
              </p>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};
export async function getServerSideProps(context) {
  // const { query } = useRouter();
  const { params } = context;

  const { id } = params;

  await db.connect();

  const article = await Article.findById(id).lean();
  return {
    props: {
      article: article ? db.convertDocToObj(article) : null,
    },
  };
}
export default ArticlePost;
