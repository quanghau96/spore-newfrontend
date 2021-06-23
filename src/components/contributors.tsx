import './contributors.css';
import axios from 'axios';
import { useEffect, useState, useCallback } from 'react';
import Skeleton from 'react-loading-skeleton'
import uniqBy from 'lodash.uniqby'

const getContributorsVersion1 = () => axios.get('https://api.github.com/repos/sporeproject/Spore-frontend/contributors')
const getContributorsVersion2 = () => axios.get('https://api.github.com/repos/florez-alberto/spore-newfrontend/contributors')

const NUMBER_OF_DUMMIES = 8

const Contributors = () => {
  const [contrib, setContributors] = useState([]);
  const [isFetching, setIsFetching] = useState(true)

  const dummies: any[] = [...Array(NUMBER_OF_DUMMIES).keys()]

  useEffect(() => {
    
    const getContributors = async () => {
      const [contributorsVersion1, contributorsVersion2] = await Promise.all([getContributorsVersion1(), getContributorsVersion2()])
      const contributors = [...contributorsVersion1.data, ...contributorsVersion2.data]
      const uniqContributors = uniqBy(contributors, 'id') as []
      setContributors(uniqContributors)
      setIsFetching(false)
    }
  
    getContributors()
  }, [])

  return (
    <>
      {isFetching && dummies.map((dummie) => (
        <div className="col-sm-12 col-md-4 col-lg-3 mb-4" key={dummie.toString()}>
          <div className="card">
            <Skeleton height={304} width={304} />
            <div className="card-body">
              <h5 className="card-title">
              <Skeleton />
              </h5>
            <p className="card-text"><Skeleton /></p>
            <div className="text-center">
                <Skeleton width={60} height={30} />
            </div>
          </div> 
        </div>
      </div>
      ))}
      {
        !isFetching && contrib.map((data: any) => {
          return <div className="col-sm-12 col-md-4 col-lg-3 mb-4" key={data.html_url}>
            <div className="card">
              <Image url={data.avatar_url} />
              <div className="card-body">
                <h5 className="card-title">{data.login}</h5>
                <p className="card-text">Our Team Member</p>
                <div className="text-center">
                  <a href={data.html_url} className="btn btn-secondary githubbutton"><img src="git.png" height="30" alt=""></img></a>
                </div>
              </div>
            </div>
          </div>
        })
      }
    </>
  );
};

export default Contributors;

interface ImageProps {
  url: string
}

const Image:React.SFC<ImageProps> = (props) => {
  const { url } = props
  const [loading, setLoading] = useState(true)
  const imageLoaded = useCallback(() => {
    setLoading(false)
  }, [])

  return (
    <>
      {
        loading &&  <Skeleton height={304} width={304} />
      }
      <img onLoad={imageLoaded} loading="lazy" src={url} className="card-img-top" alt="spore dev" />
    </>
  )
}
