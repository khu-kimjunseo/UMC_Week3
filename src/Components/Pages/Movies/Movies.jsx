import React from 'react'
import Movie from './Movie/Movie'
import { movies } from './movieDummy'
import * as M from './Movies.style'

export default function Movies() {
  return (
    <M.MoviesWrap>
      {movies.results.map((item) => {
        return (
          <Movie key={item.id} title={item.title}
            rate={item.vote_average} url={item.poster_path} overview={item.overview}
          ></Movie>
        )
      })
      }
    </M.MoviesWrap>
  )
}
