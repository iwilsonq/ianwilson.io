import React from 'react'
import { theme } from '../config/theme'

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
      rel="noopener noreferrer"
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

            <ul style={styles.tags}>
              <li style={styles.tagsLabel}>Tags: </li>
              {node.virtuals.tags.map((tag, i) => (
                <li style={styles.tag}>{tag.name}</li>
              ))}
            </ul>
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
  },
  tags: {
    lineHeight: 1.15,
    padding: 0,
    margin: 0,
    display: 'flex',
    listStyle: 'none'
  },
  tagsLabel: {
    padding: 4,
    margin: 0,
    fontSize: 14,
    marginRight: 12
  },
  tag: {
    padding: 4,
    margin: 0,
    fontSize: 14,
    marginRight: 12,
    backgroundColor: theme.bg.wash,
    borderRadius: 4
  }
}
