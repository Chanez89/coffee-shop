function About() {
  return (
    <div >
      <h1 className="lead">About this project</h1>
      <p>This project was done in collaboration between Neil Chanez, Yuxiang Li and Jacob Nasrallah. We wanted to demonstrate the use of React, Javascript, and CSS styling with Bootstrap 5.</p>
      <div className="">
        <h1 className="lead">Neil Chanez</h1>
        <div className="justify-content-between">
          <img src="./images/Neil.jpg" width="350px" height="350px" />
          <p className="mt-4 p-3">Located in Los Angeles, California. You can find me at <ul className="list-inline"><li><a href="https://github.com/Chanez89">GitHub</a> </li><li><a href="https://www.linkedin.com/in/neil-chanez-gracia-04743b18/">LinkedIn</a></li></ul></p>
        </div>
        <h1 className="lead">Yuxiang (Sean) Li</h1>
        <div className="justify-content-between">
          <img src="./images/yuxiang(sean)_li.png" width="40%" height="40%" />
          <p className="mt-4">Located in San Francisco, California. You can find me at <ul className="list-inline"><li><a href="https://github.com/seanliyuxiang">GitHub</a> </li><li><a href="https://www.linkedin.com/in/seanliyuxiang/">LinkedIn</a></li></ul></p>
        </div>
        <h1 className="lead">Jacob Nasrallah</h1>
        <div className=" justify-content-between">
          <img src="./images/jacobpfp.jpeg" />
          <p className="mt-4">Located in Seattle, Washington. You can find me at <ul className="list-inline"><li><a href="https://github.com/nasjac26">GitHub</a> </li><li><a href="https://www.linkedin.com/in/jacob-nasrallah-6792b5106/">LinkedIn</a></li></ul></p>
        </div>
      </div>  
    </div>
  );
}


export default About;