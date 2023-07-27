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

export async function getAllQuestionSlugs() {
  const data = await fetchAPI({
    query: `
    {
      allQuestions(orderBy:_createdAt_DESC) {
        slug
      }
    }
    `,
  });
  return data;
}

export async function getAllQuestions() {
  const data = await fetchAPI({
    query: `
    {
      allQuestions {
        id
        title
        slug
        emoji
        _status
        _firstPublishedAt
      }
    
      _allQuestionsMeta {
        count
      }
    }
    `,
  });
  return data;
}

export async function getQuestionData(params) {
  const data = await fetchAPI({
    query: `
    query PostBySlug($slug: String) {
      question(filter: {slug: {eq: $slug}}) {
        id
        title
        question
        episode
        episodeLink
        emoji
        answer(markdown: true)
        tips {
          id
          tip
        }
        highlights
        position
        answerImage {
          alt
          url
          width
          height
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
