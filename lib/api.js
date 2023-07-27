const API_URL = "https://graphql.datocms.com";
const API_TOKEN = process.env.REACT_APP_DATOCMS_API_TOKEN;

async function fetchAPI({ query, variables, preview } = {}) {
  const res = await fetch(API_URL + (preview ? "/preview" : ""), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

export async function getHomeData() {
  const data = await fetchAPI({
    query: `
    {
      home {
        id
        valueProposition {
          pageTitle
          subtitle
        }
        introduction {
          introText(markdown: true)
          introTitle
        }
        ngoList {
          ngoListTitle
          ngoListGroup {
            ngoListType
            ngoListTitle
            ngoListLink
            ngoListIntro(markdown: true)
            id
          }
        }
      }
      allArticles(orderBy:_createdAt_DESC, first: 3) {
        id
        title
        slug
        introduction
        articleType
        link
      }
    }
    `,
  });
  return data;
}

export async function getAllArticleSlugs() {
  const data = await fetchAPI({
    query: `
    {
      allArticles(orderBy:_createdAt_DESC, first: 3) {
        slug
      }
    }
    `,
  });
  return data;
}

export async function getArticleData(params) {
  const data = await fetchAPI({
    query: `
    query PostBySlug($slug: String) {
      article(filter: {slug: {eq: $slug}}) {
        id
        title
        seometa: _seoMetaTags {
          attributes,
          content,
          tag,
        }
        articleType
        link
        content {
          value
        }
      }
    }
    `,
    variables: {
      slug: params.slug,
    },
  });
  return data;
}
