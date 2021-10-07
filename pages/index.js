const HomePage = ({ content }) => {
  console.log(content);
  const { attributes } = content;
  return (
    <>
      <h1>{attributes.hero_title}</h1>
      <p>{attributes.hero_description}</p>
      <img src={attributes.hero_image} alt="hero image" />
    </>
  );
};

/**
 * If you export an async function called getStaticProps
 * from a page, Next.js will pre-render this page at build
 * time using the props returned by getStaticProps.
 */
export const getStaticProps = async () => {
  const content = await import(`../content/pages/${"home"}.md`);
  return { props: { content: content.default } };
};

export default HomePage;
