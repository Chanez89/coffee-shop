function About() {
  return (
    <div >
      <h1 className="lead">About this project</h1>
        <p>This project was done in collaboration between Neil Chanez, Yuxiang Li and Jacob Nasrallah. We wanted to demonstrate the use of React, vanilla Javascript, and CSS/Styling with Bootstrap 5.</p>

      <div className="">
      <h1 className="lead">Neil Chanez</h1>
        <div className="justify-content-between">
          <img  src="https://picsum.photos/200/300"/>
          <p className="mt-4 p-3">Located in Seattle, Washington. You can find me at <ul className="list-inline"><li><a href="https://github.com/nasjac26">github</a> </li><li><a href="https://www.linkedin.com/in/jacob-nasrallah-6792b5106/">linkedin</a></li></ul></p>
        </div>
        <h1 className="lead">Yuxiang Li</h1>

        <div className="justify-content-between">
          <img src="https://picsum.photos/200"/>
          <p className="mt-4">Located in Seattle, Washington. You can find me at <ul className="list-inline"><li><a href="https://github.com/nasjac26">github</a> </li><li><a href="https://www.linkedin.com/in/jacob-nasrallah-6792b5106/">linkedin</a></li></ul></p>

        </div>
        <h1 className="lead">Jacob Nasrallah</h1>

        <div className=" justify-content-between">
        <img src="./images/jacobpfp.jpeg"/>
          <p className="mt-4">Located in Seattle, Washington. You can find me at <ul className="list-inline"><li><a href="https://github.com/nasjac26">github</a> </li><li><a href="https://www.linkedin.com/in/jacob-nasrallah-6792b5106/">linkedin</a></li></ul>
            </p>
          
        </div>
        </div>  
      </div>
  );
}


export default About;