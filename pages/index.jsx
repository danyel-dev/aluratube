import config from '../config.json'
import styled from 'styled-components';
import Menu from '../src/components/Menu';
import { StyledTimeline } from '../src/components/Timeline';
import React, { useState } from "react";


function HomePage() {
    const [searchValue, setSearchValue] = useState("")

    return (
        <div>
            <Menu searchValue={searchValue} setSearchValue={setSearchValue} />
            <Header />
            <Timeline searchValue={searchValue} playlists={config.playlists} />
        </div>
    );
}

export default HomePage;


const StyledHeader = styled.div`
    background-color: ${({ theme }) => theme.backgroundLevel1};

    .user-info {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }

    .user-info img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
`

const StyledBanner = styled.div`
    height: 250px;
    background-image: url(${config.bg});
`;

function Header() {
    return (
        <StyledHeader>
            <StyledBanner />

            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} />

                <div>
                    <h2>{config.name}</h2>
                    <p>{config.job}</p>
                </div>
            </section>
        </StyledHeader>
    );
}

function Timeline({searchValue, ...propriedades}) {
    const playlistNames = Object.keys(propriedades.playlists);

    return (
        <StyledTimeline>
            {playlistNames.map((playlistName) => {
                const videos = propriedades.playlists[playlistName];
         
                return (
                    <section key={playlistName}>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos.filter(video => {
                                const titleNormalized = video.title.toLowerCase()
                                const searchValueNormalized = searchValue.toLowerCase()
                                return titleNormalized.includes(searchValueNormalized)
                            }).map((video) => {
                                return (
                                    <a key={video.url} href={video.url}>
                                        <img src={video.thumb} />
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    )
}
