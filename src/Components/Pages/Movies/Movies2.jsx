import React, { useEffect, useRef, useState } from 'react'
import Movie from './Movie/Movie'
// import { movies } from './movieDummy'
import { Provider, useDispatch, useSelector } from 'react-redux'
import * as M from '../../Group.style'
import axios from 'axios'
import store from '../../../store'
import styled from 'styled-components'

export default function Movies2() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1)
  async function fetchData() {
      const url = `https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=${page}`
      try {
        console.log(new Date())
        const res = await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${process.env.REACT_APP_TOKEN}`,
                'accept': 'application/json'
            }
        })
        console.log(res.data)
        setMovies(res.data.results)
        preventRef.current = true
      } catch(err){
        console.error(err)
      }
  }
  useEffect(() => {
    console.log(page);
    window.scrollTo(0, 0)
    fetchData();    
  }, [page])

  //Infinite Scroll
  const preventRef = useRef(true);
  const lis = []
  function clickPage(i) {
    return (e) => {
      e.preventDefault()
      setPage(i)
    }
  }
  for (let i=page-2; lis.length<5; i++){
    if (i > 0) {
      if (i===page){
        lis.push(
          <Page current={true} onClick={clickPage(i)}>{i}</Page>
        )
      }
      else {
        lis.push(
          <Page onClick={clickPage(i)}>{i}</Page>
        )
      }
    }

  }
  return (
    <div>
      <M.GroupWrap>
        {movies.map((item) => {
          return (
            <Movie key={item.id} title={item.title}
              rate={item.vote_average} url={item.poster_path} overview={item.overview}
            ></Movie>
            )
          })
        }
      </M.GroupWrap>
      <PageWrap>
        {page !== 1 && <Pagingbutton onClick={(e)=>{
          e.preventDefault()
          setPage(prev => prev-1)
        }}>이전</Pagingbutton>}
        <Pagelist>
          {lis}
        </Pagelist>
        <Pagingbutton onClick={(e)=>{
          e.preventDefault()
          setPage(prev => prev+1)
        }}>다음</Pagingbutton>
      </PageWrap>
    </div>
  )
}

const PageWrap = styled.div`
  display: flex;
  justify-content: center
`

const Pagelist = styled.ul`
  display: flex;
  list-style: none;
`

const Page = styled.li`
  width: 50px;
  heigth: 50px;
  margin: 10px;
  font-size: 50px;
  text-align: center;
  border: ${(props) => props.current ? 'solid 5px' : 'none'};
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`

const Pagingbutton = styled.button`
  font-size: 50px;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`
