import React from 'react'

const WithImage = ({ children }) => {
  return <div style={styles.articleWithImage}>{children}</div>
}

const WithoutImage = ({ children }) => {
  return <div>{children}</div>
}

export const MediumPost = node => {
  let imageId
  const blockWithImage = node.previewContent.bodyModel.paragraphs.find(p => {
    return p.type === 4
  })

  if (blockWithImage) {
    imageId = blockWithImage.metadata.id
  }

  const ArticleContent = imageId ? WithImage : WithoutImage

  return (
    <a
      style={styles.link}
      href={`https://medium.com/@iwilsonq/${node.uniqueSlug}`}
      target="_blank"
    >
      <article style={styles.article}>
        <ArticleContent>
          {imageId && (
            <img
              style={styles.img}
              src={`https://cdn-images-1.medium.com/max/300/${imageId}`}
              alt={node.title}
            />
          )}
          <div>
            <h2>{node.title}</h2>
            <p>{node.previewContent.subtitle}</p>
            <small>Medium &#8226;</small>
          </div>
        </ArticleContent>
      </article>
    </a>
  )
}

const styles = {
  link: {
    textDecoration: 'none',
    color: '#000'
  },
  article: { paddingTop: 24 },
  articleWithImage: { display: 'flex', margin: 12 },
  img: {
    minWidth: 300,
    marginRight: 16
  }
}
