import "../pages/BlogPage.css";
import React from "react";
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import BlogPageHeadCard from '../components/BlogPageHeadCard';
import BlogPageQualityCard from '../components/BlogPageQualityCard';
import BlogPageProtectionCard from '../components/BlogPageProtectionCard';
import BlogPageEducationCard from "../components/BlogPageEducationCard";
import BlogPageFutureCard  from "../components/BlogPageFutureCard";

export default function BlogPage() {
    return(
        <div>
            <div className="blogHeadlineContainer">
                <span className="blogHeadline">WATER BLOG</span>
            </div>
            <div className="blogHeroSpanContainer">
                <span className="blogHeroSpan">Discover the fascinating world of water and </span>
                <span className="blogHeroSpan">explore its wonders on our insightful blog. </span>
                <span className="blogHeroSpan">Dive into captivating articles, tips for </span>
                <span className="blogHeroSpan">conservation, and the latest discoveries </span>
                <span className="blogHeroSpan">in water-related topics.</span>
            </div>
            {/* <div>
                <img  className="blogHeroImage" src={process.env.PUBLIC_URL + "/resources/image 9BlogDrop.svg"} 
                alt="A Cartoon of Meadows and Trees inside a big drop of Water"/>
            </div> */}
                <Container maxWidth="md" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    {/* <div className="cardWrapper">
                        <BlogPageHeadCard />
                    </div> */}
                    <div className="cardWrapper">
                        <Link to="/article" className="linkWithoutUnderline">
                            <BlogPageQualityCard />
                        </Link>
                    </div>
                    <div className="cardWrapper">
                        <Link to="/article" className="linkWithoutUnderline">
                            <BlogPageEducationCard />
                        </Link>
                    </div>
                    <div className="cardWrapper">
                        <Link to="/article" className="linkWithoutUnderline">
                            <BlogPageProtectionCard />
                        </Link>
                    </div>
                    <div className="cardWrapper">
                        <Link to="/article" className="linkWithoutUnderline">
                            <BlogPageFutureCard />
                        </Link>
                    </div>
                </Container>
                <div className="blogButtonContainer">
                    <Link to="/blog" className="buttonLink">
                        <button className="yellowButton">VIEW ALL</button>
                    </Link>
                </div>
            </div>
    )
};