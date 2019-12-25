import React, { useState } from 'react';
import './body.css';
import axios from 'axios';
import REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN from '../../config';
import Resume from './body-description-comp/Resume';

const Body = () => {
    const [inputValue, setInputValue] = useState('');
    const [userName, setUserName] = useState({ userName: '' })
    const [userData, setUserData] = useState({})
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    function getUserData() {
        const axiosGitHubGraphQL = axios.create({
            baseURL: 'https://api.github.com/graphql',
            headers: {
                Authorization: `bearer ${
                    REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
                    }`,
            },
        });

        const GET_USER = `
            {
                user(login: "${userName.userName}") {
                  name
                  url
                  bio
                  createdAt
                  location
                  followers {
                    totalCount
                  }
                  topRepositories(first: 5, orderBy: {field: UPDATED_AT, direction: ASC}) {
                    nodes {
                      name
                      createdAt
                      updatedAt
                      description
                      forkCount
                      url
                      languages(first: 50, orderBy: {field: SIZE, direction: DESC}) {
                        edges {
                          size
                          node {
                            name
                          }
                        }
                      }
                    }
                    totalCount
                  }
                }
              }
              
        `


        axiosGitHubGraphQL
            .post('', { query: GET_USER })
            .then(data => {


                setUserData(data)
                if (data.data.data.user === null) {
                    setError(true)
                }
                else if (data.data.data.user !== null) {
                    setError(null)
                }
            })

            .finally(setTimeout(function () {

                setLoading(false);
            }, 3000))

    }

    const handleSearchSubmit = (e) => {
        e.preventDefault()
        getUserData()
        setInputValue(``)


    }
    const handleChange = (e) => {
        setUserName({ userName: `${e.target.value}` })
        setInputValue(`${e.target.value}`)

    }



    return (
        <div className="body">

            <div className="title">
                <h2>My Github Resumé</h2>
            </div>

            <div className="form">
                <div className="form-group">
                    <span className="github-username">Github username</span>
                    <div className="form-input-group">
                        <form onSubmit={handleSearchSubmit}>
                            <input
                                className="form-input"
                                placeholder="John Doe"
                                id="url"
                                type="text"
                                value={inputValue}
                                onChange={handleChange}
                            />
                            <button type="submit" className="submit-button">
                                Generieren
                        </button>
                        </form>

                    </div>
                </div>
            </div>
            <Resume userData={userData.data} loading={loading} error={error} />
        </div>
    )

}
export default Body;