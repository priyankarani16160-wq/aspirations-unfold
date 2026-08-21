# Priyanka's Tech Journey

<section class="hero">

    <div class="hero-content">

        <h3>Hello, I'm</h3>

        <h1>Priyanka Rani</h1>

        <h2>

            <span class="typing"></span>

        </h2>

        <p>

            First-Year B.Tech Information Technology Student | Programmer Intern |

            Aspiring Software Engineer

        </p>

        <div class="buttons">

            <a href="#projects" class="btn">View Projects</a>

            <a href="#" class="btn btn-outline">Download Resume</a>

        </div>

    </div>

    <div class="hero-image">

        <img src="images/profile.jpg" alt="Priyanka">

    </div>

</section>    *{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    font-family:Poppins,sans-serif;
    background:#081b29;
    color:white;
}

.hero{

    min-height:100vh;

    display:flex;

    justify-content:space-between;

    align-items:center;

    padding:70px 10%;

}

.hero-content{

    width:55%;

    animation:fadeLeft 1.5s ease;

}

.hero-content h1{

    font-size:60px;

    margin:15px 0;

}

.hero-content h2{

    color:#00abf0;

    height:45px;

    font-size:34px;

}

.hero-content p{

    margin-top:25px;

    line-height:1.8;

    color:#ddd;

}

.hero-image{

    animation:floatImage 4s ease-in-out infinite;

}

.hero-image img{

    width:350px;

    border-radius:50%;

    border:6px solid #00abf0;

    box-shadow:0 0 30px #00abf0;

}

.buttons{

    margin-top:35px;

}

.btn{

    text-decoration:none;

    padding:15px 35px;

    background:#00abf0;

    color:white;

    border-radius:30px;

    margin-right:20px;

    transition:.4s;

}

.btn:hover{

    transform:translateY(-5px);

    box-shadow:0 0 25px #00abf0;

}

.btn-outline{

    background:transparent;

    border:2px solid #00abf0;

}

/* Floating Image */

@keyframes floatImage{

0%{

transform:translateY(0px);

}

50%{

transform:translateY(-25px);

}

100%{

transform:translateY(0px);

}

}

/* Fade Animation */

@keyframes fadeLeft{

from{

opacity:0;

transform:translateX(-100px);

}

to{

opacity:1;

transform:translateX(0);

}

}

/* Cursor */

.typing::after{

content:"|";

animation:blink .7s infinite;

}

@keyframes blink{

50%{

opacity:0;

}

}

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/132591a6-c511-4e8a-9e12-380c22cd2d1e).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
