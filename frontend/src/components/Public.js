import {Link} from 'react-router-dom'
import Slider from './Carousel'
import { faFacebookF, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Public = () => {
    const content = (
        <>
            <Slider />
            <section>
                <div class="wrapper">

                <h2 class="section-title">Upgrade for a better you</h2>
                <p>Upgrade your skills with us and stay ahead of the competition. Our program provides you with access to the latest tools, techniques, and trends in your industry.</p>

                </div>
            </section>

            
            <section class="diagonal">
                <div class="wrapper">

                <h2 class="section-title">Grab your dream job</h2>
                <p>Invest in yourself and join our program today. Our expert instructors and state-of-the-art facilities will help you master new skills and take your career to the next level.</p>

                </div>
            </section>

            <section>
                <div class="wrapper">

                <h2 class="section-title"></h2>
                <p>Join our community of learners and upgrade your skills alongside like-minded professionals. With our engaging and interactive courses, you'll enjoy a fun and effective learning experience.</p>

                </div>
            </section>

            <section className="diagonal_sec mid-banner">
                <h2>Opportunities</h2>
                <div className="flex-div">
                <div className="card" onClick={(e)=>window.location.href="http://localhost:3000/login"}>
                    <img src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8Zz4KICA8cGF0aCBkPSJtMzc2IDIyMS42MWMyNi45OTIgMCA1MC4xOTkgMTUuMTU2IDYyLjAzOSAzNy44ODdsOC41MjM0LTQuNzM0NHY1My45ODhjMCAxMi43ODUgMTAuNDE4IDIyLjczIDIyLjczIDIyLjczaDEuODk0NWwwLjAwMzkwNi0xMi4zMTJoLTAuNDcyNjZjLTYuMTU2MiAwLTExLjM2Ny01LjIxMDktMTEuMzY3LTExLjM2N3YtNjAuMTQ1bDIwLjM2My0xMC44OTEtMTAzLjcxLTUyLjU3LTEwMy43MSA1NC45MzggNDEuMjAzIDIxLjMxMmMxMS44MzYtMjMuMjA3IDM1LjA0My0zOC44MzYgNjIuNTA4LTM4LjgzNnoiLz4KICA8cGF0aCBkPSJtMzc2IDIzMy40NWMtMzIuMjAzIDAtNTguNzIzIDI2LjUyLTU4LjcyMyA1OS4xOTkgMCAzMi42NzYgMjYuMDQ3IDU5LjE5OSA1OC43MjMgNTkuMTk5IDMyLjIwMyAwIDU4LjcyMy0yNi41MiA1OC43MjMtNTkuMTk5IDAuMDAzOTA2LTMyLjY4LTI2LjUyLTU5LjE5OS01OC43MjMtNTkuMTk5eiIvPgogIDxwYXRoIGQ9Im01NTcuMzggNTA5LjA4LTg2LjE5MS0xMTkuODJzLTExLjM2Ny0yMS43ODUtMzcuODg3LTIyLjczaC0xMTQuMTNjLTI2Ljk5MiAwLjk0NTMxLTM3Ljg4NyAyMi43My0zNy44ODcgMjIuNzNsLTg2LjY2NCAxMTkuODJjLTMuNzg5MSA1LjIxMDktNS42ODM2IDExLjg0LTUuNjgzNiAxOC45NDEgMCAxOC40NjkgMTUuMTU2IDMzLjYyNSAzMy42MjUgMzMuNjI1aDQ2Ljg4M3Y4LjUyMzRjMCA0LjczNDQgMy43ODkxIDguNTIzNCA4LjUyMzQgOC41MjM0aDE5Ny40OGM0LjczNDQgMCA4LjUyMzQtMy43ODkxIDguNTIzNC04LjUyMzR2LTguNTIzNGg0Ni44ODNjMTguNDY5IDAgMzMuNjI1LTE1LjE1NiAzMy42MjUtMzMuNjI1LTEuNDE4LTcuMTAxNi0zLjMxMjUtMTMuNzM0LTcuMTAxNi0xOC45NDF6bS03NC4zNTIgNTEuNjIxaC0yMTQuMDZ2LTEyOC44MmMwLTUuNjgzNiA0LjczNDQtOS45NDUzIDkuOTQ1My05Ljk0NTNoMTk0LjE3YzUuNjgzNiAwIDkuOTQ1MyA0LjczNDQgOS45NDUzIDkuOTQ1M3oiLz4KICA8cGF0aCBkPSJtMzc2IDQ3MC43MmMtMTIuMzEyIDAtMjIuNzMgOS45NDUzLTIyLjczIDIyLjczIDAgMTIuNzg1IDkuOTQ1MyAyMi43MyAyMi43MyAyMi43MyAxMi4zMTIgMCAyMi43My0xMC40MTggMjIuNzMtMjIuNzMgMC4wMDM5MDYtMTIuMzEyLTEwLjQxNC0yMi43My0yMi43My0yMi43M3oiLz4KIDwvZz4KPC9zdmc+Cg==" />
                    <p>Internships</p>
                </div>
                <div className="card" onClick={(e)=>window.location.href="http://localhost:3000/login"}>
                    <img src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8Zz4KICA8cGF0aCBkPSJtMzkwLjY4IDI2OC45N2MwIDMzLjIxNS0yNi45MyA2MC4xNDUtNjAuMTQ1IDYwLjE0NS0zMy4yMTkgMC02MC4xNDUtMjYuOTMtNjAuMTQ1LTYwLjE0NSAwLTMzLjIxOSAyNi45MjYtNjAuMTQ1IDYwLjE0NS02MC4xNDUgMzMuMjE1IDAgNjAuMTQ1IDI2LjkyNiA2MC4xNDUgNjAuMTQ1Ii8+CiAgPHBhdGggZD0ibTUzOS4zOSA0ODYuODJjMCA5LjQ3MjctNy41NzgxIDE3LjA1MS0xNy4wNTEgMTcuMDUxaC0xMi43ODVjLTkuNDcyNyAwLTE3LjA1MS03LjU3ODEtMTcuMDUxLTE3LjA1MXYtMC45NDUzMWMtMTYuMTAyLTAuOTQ1MzEtMzQuMDk4LTIuMzY3Mi01MC42NzItNC43MzQ0djQ3LjM1OWMwIDguNTIzNCA2LjYyODkgMTUuMTU2IDE1LjE1NiAxNS4xNTZsMTE3LjkyLTAuMDA3ODEyYzguNTIzNCAwIDE1LjE1Ni02LjYyODkgMTUuMTU2LTE1LjE1NnYtNDcuMzU5Yy0xNi41NzQgMi44Mzk4LTM0LjU3IDQuMjYxNy01MC4xOTkgNC43MzQ0bC0wLjAwMzkwNiAwLjk1MzEyeiIvPgogIDxwYXRoIGQ9Im01ODUuOCA0MjMuODNoLTMzLjYyNXYtMTEuMzY3YzAtMTEuODQtOS45NDUzLTIxLjc4NS0yMS43ODUtMjEuNzg1aC0yNy45NDFjLTExLjg0IDAtMjEuNzg1IDkuOTQ1My0yMS43ODUgMjEuNzg1djExLjM2N2gtMzMuNjI1Yy04LjUyMzQgMC0xNS4xNTYgNi42Mjg5LTE1LjE1NiAxNS4xNTZ2MjMuNjhjMCAyLjM2NzIgMS40MjE5IDQuMjYxNyAzLjMxNjQgNC4yNjE3IDE1LjE1NiAyLjgzOTggMzQuMDk4IDUuMjEwOSA1OC4yNSA2LjE1NjIgMC05LjQ3MjcgNy41NzgxLTE3LjA1MSAxNy4wNTEtMTcuMDUxaDEyLjMxNmM5LjQ3MjcgMCAxNy4wNTEgNy41NzgxIDE3LjA1MSAxNy4wNTEgMjMuNjgtMC45NDUzMSA0My4wOTgtMy4zMTY0IDU3Ljc3Ny02LjYyODkgMS44OTQ1LTAuNDcyNjYgMy4zMTY0LTIuMzY3MiAzLjMxNjQtNC4yNjE3di0yMy42OGMtMC4wMDM5MDYtNy41NzgxLTcuMTA5NC0xNC42ODQtMTUuMTYtMTQuNjg0em0tNTEuMTQ1IDBoLTM3LjQxNHYtMTEuMzY3YzAtMi4zNjcyIDEuODk0NS00LjczNDQgNC43MzQ0LTQuNzM0NGgyNy45NDFjMi4zNjcyIDAgNC43MzQ0IDEuODk0NSA0LjczNDQgNC43MzQ0eiIvPgogIDxwYXRoIGQ9Im01MjIuMzQgNDkxLjU1YzIuODM5OCAwIDQuNzM0NC0yLjM2NzIgNC43MzQ0LTQuNzM0NHYtMTIuNzg1YzAtMi44Mzk4LTIuMzY3Mi00LjczNDQtNC43MzQ0LTQuNzM0NGgtMTIuNzg1Yy0yLjgzOTggMC00LjczNDQgMi4zNjcyLTQuNzM0NCA0LjczNDR2MTIuNzg1YzAgMi44Mzk4IDIuMzY3MiA0LjczNDQgNC43MzQ0IDQuNzM0NHoiLz4KICA8cGF0aCBkPSJtNDk0LjQgMzI1LjggMTQuNjgtNDMuMDk4YzUuMjEwOS0xNS42MjktNC4yNjE3LTMyLjY3Ni0yMS4zMTItMzUuNTItMTMuMjYyLTIuMzY3Mi0yNi4wNDcgNi42Mjg5LTMwLjMwOSAxOS40MThsLTE0LjY4IDQzLjA5OGMtNS4yMTA5IDE2LjEwMi0xOC40NjkgMjguNDE0LTM0LjU3IDMyLjIwMy0yNC42MjUgNi4xNTYyLTQ5LjcyNyA4Ljk5NjEtNzQuODI0IDguOTk2MWgtNC43MzQ0Yy0yNS4xMDIgMC01MC42NzItMi44Mzk4LTc0LjgyNC04Ljk5NjEtMTYuNTc0LTMuNzg5MS0yOS4zNjMtMTYuMTAyLTM0LjU3LTMyLjIwM2wtMTIuNzg1LTM4LjM1OWMtNS42ODM2LTE3LjUyMy0xOC40NjktMjYuNTItMzEuNzMtMjQuMTUyLTE3LjA1MSAyLjgzOTgtMjYuNTIgMTkuODkxLTIxLjMxMiAzNS41MmwxNC4yMDcgNDIuMTQ4YzExLjg0IDM0LjU3IDM5Ljc4MSA2MS41NjYgNzUuMzAxIDcwLjA5IDUuNjgzNiAxLjQyMTkgMTEuMzY3IDIuMzY3MiAxNy4wNTEgMy43ODkxbDIuMzY3MiAxMDMuNzFjMCA5LjQ3MjcgOC4wNTA4IDE3LjA1MSAxNy4wNTEgMTcuMDUxaDEwNC4xOWM5LjQ3MjcgMCAxNy4wNTEtNy41NzgxIDE3LjA1MS0xNy4wNTFsMi4zNjcyLTEwMy43MWM1LjIxMDktMC45NDUzMSAxMC44OTEtMS44OTQ1IDE2LjEwMi0zLjMxNjQgMzUuMDMxLTguOTk2MSA2My40NDktMzUuMDQzIDc1LjI4OS02OS42MTd6bS0xNDkuMTggMTM4LjI5LTEyLjMxMiAxMy43MzRjLTAuOTQ1MzEgMC45NDUzMS0yLjgzOTggMC45NDUzMS0zLjc4OTEgMGwtMTIuMzEyLTEzLjczNGMtMC40NzI2Ni0wLjQ3MjY2LTAuOTQ1MzEtMS40MjE5LTAuNDcyNjYtMi4zNjcybDEwLjQxOC03NC44MjRoLTQuNzM0NGMtMS40MjE5IDAtMi44Mzk4LTEuNDIxOS0yLjgzOTgtMi44Mzk4di0xNS42MjljMC0xLjQyMTkgMS40MjE5LTIuODM5OCAyLjgzOTgtMi44Mzk4aDE5LjQxOGMxLjQyMTkgMCAyLjgzOTggMS40MjE5IDIuODM5OCAyLjgzOTh2MTUuNjI5YzAgMS40MjE5LTEuNDIxOSAyLjgzOTgtMi44Mzk4IDIuODM5OGgtNC43MzQ0bDEwLjQxOCA3NC44MjRjLTEuNDI1OCAwLjk0OTIyLTEuNDI1OCAxLjg5NDUtMS44OTg0IDIuMzY3MnoiLz4KIDwvZz4KPC9zdmc+Cg==" />
                    <p>Jobs</p>
                </div>
                <div className="card" onClick={(e)=>window.location.href="http://localhost:3000/login"}>
                    <img src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8Zz4KICA8cGF0aCBkPSJtNTk3Ljk5IDE0Ni42MWgtNDQzLjk4Yy00LjA4NTkgMC03LjQwMjMgMy4zMDg2LTcuNDAyMyA3LjQwMjN2NDQuMzk4YzAgNC4wOTM4IDMuMzE2NCA3LjM5ODQgNy4zOTg0IDcuMzk4NGg3LjM5ODR2MjY2LjM5aC03LjM5NDVjLTQuMDg1OSAwLTcuMzk4NCAzLjMwODYtNy4zOTg0IDcuMzk4NHYyOS41OThjMCA0LjA5MzggMy4zMTY0IDcuMzk4NCA3LjM5ODQgNy4zOTg0aDIxNC41OXY0NS43NThjLTguNTg5OCAzLjA2MjUtMTQuODAxIDExLjIwMy0xNC44MDEgMjAuODM2IDAgMTIuMjM4IDkuOTYwOSAyMi4xOTkgMjIuMTk5IDIyLjE5OXMyMi4xOTktOS45NjA5IDIyLjE5OS0yMi4xOTljMC05LjYzMjgtNi4yMDctMTcuNzczLTE0LjgwMS0yMC44MzZsMC4wMDM5MDYtNDUuNzU0aDIxNC41OWM0LjA4NTkgMCA3LjM5ODQtMy4zMDg2IDcuMzk4NC03LjM5ODR2LTI5LjU5OGMwLTQuMDkzOC0zLjMxNjQtNy4zOTg0LTcuMzk4NC03LjM5ODRoLTcuMzk4NHYtMjY2LjM5aDcuMzk4NGM0LjA4NTkgMCA3LjM5ODQtMy4zMDg2IDcuMzk4NC03LjM5ODR2LTQ0LjM5OGMwLTQuMDkzOC0zLjMxMjUtNy40MDIzLTcuMzk4NC03LjQwMjN6bS0yMjEuOTkgNDQzLjk4Yy00LjA3ODEgMC03LjM5ODQtMy4zMTY0LTcuMzk4NC03LjM5ODQgMC00LjA4NTkgMy4zMjQyLTcuMzk4NCA3LjM5ODQtNy4zOTg0IDQuMDc4MSAwIDcuMzk4NCAzLjMxNjQgNy4zOTg0IDcuMzk4NCAwLjAwMzkwNiA0LjA4Mi0zLjMyMDMgNy4zOTg0LTcuMzk4NCA3LjM5ODR6bTIxNC41OS04OC43OTdoLTQyOS4xOHYtMTQuODAxaDQyOS4xOHptLTE0LjgwMS0yOS41OThoLTM5OS41OHYtMjY2LjM5aDM5OS41OHptMTQuODAxLTI4MS4xOWgtNDI5LjE4di0yOS41OThoNDI5LjE4eiIvPgogIDxwYXRoIGQ9Im0xOTUuODEgMjc5LjM0IDQ2Ljk5NiAxNy42MTd2MzQuNjQ1YzAgMjEuMDk4IDMxLjgxMiAzNyA3My45OTYgMzcgNDIuMTg4IDAgNzMuOTk2LTE1LjkwMiA3My45OTYtMzd2LTM0LjY0NWwxNC44MDEtNS41NTA4djEyLjY1MmMtNC40MDIzIDIuNTY2NC03LjM5ODQgNy4yODkxLTcuMzk4NCAxMi43NDJzMi45OTYxIDEwLjE3NiA3LjM5ODQgMTIuNzQydjE2Ljg1OWgxNC44MDF2LTE2Ljg1NWM0LjQwMjMtMi41NjY0IDcuMzk4NC03LjI4OTEgNy4zOTg0LTEyLjc0MiAwLTUuNDUzMS0yLjk5NjEtMTAuMTc2LTcuMzk4NC0xMi43NDJ2LTE4LjIwM2wxNy4zOTgtNi41MjczYzIuODgyOC0xLjA4MiA0Ljc5NjktMy44Mzk4IDQuNzk2OS02LjkyNThzLTEuOTE4LTUuODQ3Ny00LjgwMDgtNi45MzM2bC0xMTguMzktNDQuMzk4Yy0xLjY3OTctMC42MjEwOS0zLjUyMzQtMC42MjEwOS01LjE5NTMgMGwtMTE4LjM5IDQ0LjM5OGMtMi44ODY3IDEuMDg1OS00LjgwNDcgMy44NDc3LTQuODA0NyA2LjkzMzZzMS45MTggNS44NDM4IDQuODA0NyA2LjkzMzZ6bTE4MC4xOSA1Mi4yNjJjMCA5LjA1ODYtMjMuMDY2IDIyLjE5OS01OS4xOTkgMjIuMTk5LTM2LjEzMyAwLTU5LjE5OS0xMy4xNDEtNTkuMTk5LTIyLjE5OXYtMjkuMDk0bDU2LjYwMiAyMS4yMjNjMC44Mzk4NCAwLjMxNjQxIDEuNzE4OCAwLjQ3MjY2IDIuNjAxNiAwLjQ3MjY2IDAuODc4OTEgMCAxLjc2MTctMC4xNTYyNSAyLjU5NzctMC40NjQ4NGw1Ni41OTgtMjEuMjN6bS01OS4xOTUtOTUuNjkxIDk3LjMyIDM2LjQ5Ni05Ny4zMiAzNi40OTYtOTcuMzItMzYuNDk2eiIvPgogIDxwYXRoIGQ9Im00NjQuOCAyNzkuOGg4OC43OTdjNC4wODU5IDAgNy4zOTg0LTMuMzA4NiA3LjM5ODQtNy4zOTg0di00NC4zOThjMC00LjA5MzgtMy4zMTY0LTcuMzk4NC03LjM5ODQtNy4zOTg0aC04OC43OTdjLTQuMDg1OSAwLTcuMzk4NCAzLjMwODYtNy4zOTg0IDcuMzk4NHY0NC4zOThjMCA0LjA4OTggMy4zMTY0IDcuMzk4NCA3LjM5ODQgNy4zOTg0em03LjQwMjMtNDQuMzk4aDczLjk5NnYyOS41OThsLTczLjk5NiAwLjAwMzkwNnoiLz4KICA8cGF0aCBkPSJtMjQyLjgxIDM4My40aDExMXYxNC44MDFoLTExMXoiLz4KICA8cGF0aCBkPSJtMTkxLjAxIDQxM2gyMDcuMTl2MTQuODAxaC0yMDcuMTl6Ii8+CiAgPHBhdGggZD0ibTQxMyA0MTNoMTQuODAxdjE0LjgwMWgtMTQuODAxeiIvPgogIDxwYXRoIGQ9Im00NDIuNiA0MTNoNTkuMTk5djE0LjgwMWgtNTkuMTk5eiIvPgogIDxwYXRoIGQ9Im0xOTEuMDEgNDQyLjZoMjQ0LjE5djE0LjgwMWgtMjQ0LjE5eiIvPgogIDxwYXRoIGQ9Im00ODcgMjk0LjYxaDczLjk5NnYxNC44MDFoLTczLjk5NnoiLz4KICA8cGF0aCBkPSJtNDUwIDMyNC4yaDExMXYxNC44MDFoLTExMXoiLz4KICA8cGF0aCBkPSJtNDUwIDM1My44aDExMXYxNC44MDFoLTExMXoiLz4KICA8cGF0aCBkPSJtNDUwIDQ0Mi42aDczLjk5NnYxNC44MDFoLTczLjk5NnoiLz4KIDwvZz4KPC9zdmc+Cg==" />
                    <p>Courses</p>
                </div>
                </div>
            </section>

            <section>
                <div class="wrapper">

                <h2 class="section-title"></h2>
                <p>Ready to invest in your future? Join our program and transform your skills, your career, and your life.</p>

                </div>
            </section>

            <section className="straight mid-banner">
                <div class="wrapper">

                <h2 class="section-title">Contact Us</h2>
                <FontAwesomeIcon className="icon" icon={faFacebookF}/>
                <FontAwesomeIcon className="icon" icon={faInstagram}/>
                <FontAwesomeIcon className="icon" icon={faYoutube}/>
                <FontAwesomeIcon className="icon" icon={faLinkedin}/>
                </div>
            </section>
        </>
    )
    return content
}
export default Public