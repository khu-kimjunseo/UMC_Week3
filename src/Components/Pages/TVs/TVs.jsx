import React from 'react'
import TV from './TV/TV'
import { tvs } from './tvDummy'
import * as M from '../../Group.style'

export default function TVs() {
  return (
    <M.GroupWrap>
      {tvs.results.map((item) => {
        return (
          <TV key={item.id} title={item.name}
            rate={item.vote_average} url={item.poster_path} overview={item.overview}
          ></TV>
        )
      })
      }
    </M.GroupWrap>
  )
}
