import Image from 'next/image'
import styles from './style.module.scss'
import useTranslation from 'next-translate/useTranslation'
import { Button } from '@mui/material'
import { createPost, getPosts } from 'services'
import { useEffect, useState } from 'react'

import classNames from 'classnames'
import backImage from "../../../../public/images/interier.jpeg"


export function Main() {
  const { t } = useTranslation('common')
  const [posts, setPosts] = useState([])
  const [active, setActive] = useState(false)
  useEffect(() => {
    getPosts({ limit: 10, page: 1 }).then((res) => {
      setPosts(res)
    })
  }, [])

  const addPost = () => {
    createPost(
      JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1
      })
    ).then((res) => {
      console.log('create')
    })
  }

  return (
    <main
    id="#home"
      className={classNames(styles.main, {
        [styles.active]: active
      })}
    >
      {/* next image
            https://nextjs.org/docs/api-reference/next/image
        */}
      <div className={styles.banner}>
        <div className={styles.headerTitle}>
        <div className={styles.title}>{t('Lumber Land')}</div>
        <div className={styles.text}> {t('yourfantasystartshere')} </div>

        </div>
        <Image
          src={backImage}
          objectFit='cover'
          priority={true}
          alt='airplain'
          layout='fill'
        />
      </div>

      {/* <Catalog /> */}

      {/* next image domain config
            https://nextjs.org/docs/basic-features/image-optimization#domains
        */}
      {/* <div className={styles.img}>
        <Image
          src='https://test.cdn.rasta.app/rasta/9302ea6c-46d9-4a9c-a9e0-5e9aa9631250'
          width={310}
          height={207}
          alt='airplain'
          objectFit='cover'
          layout='responsive'
        />
      </div> */}
      {/* <Button size='large' color='primary' onClick={addPost}>
        Create post
      </Button> */}
      {/* <div>
        {posts.map((item) => (
          <div key={item.id}>{item.title}</div>
        ))}
      </div> */}
    </main>
  )
}
