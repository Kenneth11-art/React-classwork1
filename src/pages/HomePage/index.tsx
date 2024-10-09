import './index.css';

const HomePage = () => {
    return (
        <div className='container' >
            <header>
                <h1 id="header">PROVIDE YOUR BASIC INforMATION</h1>
                <p>this paragaraph is directly after the header.</p>
                <hr />
            </header>
            <form action="" method="put">
                <label htmlFor="firstname">Fisrtname</label>
                <input type="text" placeholder="enter your firstname" name="name" id="firstname" />
                <br />
                <label htmlFor="lastname">Lastname</label>
                <input type="text" placeholder="enter your lastname" name="name" id="lastname" />
                <br />
                <label htmlFor="passport">Passport</label>
                <input type="file" placeholder="choose a file" name="name" id="passport" />
                <br />
                <label htmlFor="age">Age</label>
                <input type="number" placeholder="enter yor age" name="name" id="age" />
                <br />
                <input type="button" value="submit" />
            </form>
            <p className="highlight"
                id="bobo">
                WE ARE BASED ON IMPROVING PEOPLES STATE OF WELLBEING
                <br />
                BY PROVIDING A WAY OF PEOPLE TO CONNECT WITH EACH OTHER WITHOUT THE FEAR OF DATA HACKING
            </p>
            <div>
                <p>
                    this paragraph is inside a div
                </p>
                <div>
                    <p>this is paragraph2</p>
                </div>
            </div>
        </div>
    );
};

export default HomePage;